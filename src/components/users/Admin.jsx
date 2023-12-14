import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import baseURL from '../../Config';

const Admin = () => {
    const [latestArticle, setlatestArticle] = useState([]);
    const getlatestArticle = () => {
        axios.get(`${baseURL}/article`).then((responce) => {
            setlatestArticle(responce.data);
        });
    };
    const formatDate = (date) => {
        const dateString = date;
        const dateObject = new Date(dateString);

        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('en-US', options);
        return formattedDate
    }
    const deleteArticle = async (id) => {
        const data = await axios.delete(`${baseURL}/delete-article/` + id)
        getlatestArticle()
    }
    useEffect(() => {
        getlatestArticle();
    }, []);
    return (
        <>
            {
                latestArticle ? latestArticle.map((item) => (
                    <>
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
                                <p className="text-sm text-gray-500">Post By :- {item?.postBy}</p>
                               <div className='flex' style={{justifyContent:"end"}}>
                               <button onClick={() => deleteArticle(item._id)} className="bg-sky-500 text-white px-4 py-2 rounded">
                                    Delete
                                </button>
                               <Link to={`/create-blog/${item._id}`}  className="bg-sky-500 text-white px-4 mx-5 py-2 rounded">
                                    Update
                                </Link>
                                 </div>
                            </div>
                        </div>
                    </>
                ))
                    : <p>No data availabel</p>
            }
        </>
    )
}

export default Admin;