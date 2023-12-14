import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/users/Login";
import Navbar from "./components/headers/Navbar";
import CreateBlog from "./components/main-content/blogs/CreateBlog";
import Home from "./components/main-content/Home";
import Footer from "./components/footer/Footer";
import GetBlogs from "./components/main-content/blogs/GetBlogs";
import Admin from "./components/users/Admin";
import { useEffect, useState } from "react";
import Protected from "./components/users/Protected";
function App() {
  const [userData,setUserData]=useState()

 const getFromLoginData=(data)=>{
  setUserData(data)
  }
  useEffect(()=>{
    if (localStorage.getItem("user")) {
      let localUser=localStorage.getItem("user")
      let parseData=JSON.parse(localUser)
      setUserData(parseData)
    }
      },[])
  return (
    <div>
      <BrowserRouter>
        <Navbar localData={userData}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blogs" element={<GetBlogs />}></Route>
          <Route path="/login" element={<Login getFromLoginData={getFromLoginData}/>}></Route>
          {/* <Route path="/admin" element={<Admin />}></Route>
          <Route path="/create-blog" element={<CreateBlog />}></Route> */}
            <Route
        path="/admin"
        element={
          <Protected>
            <Admin />
          </Protected>
        }
      />
      <Route
        path="/create-blog"
        element={
          <Protected>
            <CreateBlog />
          </Protected>
        }
      />
      <Route
        path="/create-blog/:id"
        element={
          <Protected>
            <CreateBlog />
          </Protected>
        }
      />
    </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
