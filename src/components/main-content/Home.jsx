import axios from 'axios';
import React, { useEffect, useState } from 'react'
import baseURL from '../../Config';

const Home = () => {
  const [latestArticle, setlatestArticle] = useState([]);
  const getlatestArticle = () => {
    axios.get(`${baseURL}/lates-article`).then((responce) => {
      setlatestArticle(responce.data);
    });
  };
  const formatDate=(date) => {
    const dateString = date;
    const dateObject = new Date(dateString);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate
  }
  useEffect(() => {
    getlatestArticle();
  }, []);
  return (
    <>
     {
        latestArticle ? latestArticle.map((item,i) => (
          <>
            {
              i==0 && (
                <div className="max-w-screen-lg mx-auto mb-16 my-8 bg-white shadow-md rounded-md overflow-hidden grid grid-cols-3">
              {/* Card Header */}
              <div className="col-span-3 bg-gray-200 p-4">
               <div className="flex">
               <h1 className="text-3xl font-bold">{item.title}</h1>
                <h1 className="date-style">{formatDate(item.date)}</h1>
               </div>
              </div>

              {/* Left side (image) */}
              <div className="col-span-1">
                <img
                  src={item.image}
                  alt="Blog Thumbnail"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Right side (content) */}
              <div className="col-span-2 p-4">
                {item.description}
              </div>

              {/* Card Footer */}
              <div className="col-span-3 bg-gray-200 p-4">
                <p className="text-sm text-gray-500">Post By :- VSN</p>
              </div>
            </div>
              )
            }
          </>
        ))
          : ''
      }
     
    </>
  )
}

export default Home;