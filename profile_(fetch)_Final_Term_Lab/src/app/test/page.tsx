'use client';
import axios from "axios";
import { useState , useEffect } from "react";


const Home = () => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(()=>{
        const getPosts = async () =>{
            const {data : res} = await axios.get(apiEndPoint);
            setPosts(res);
        };

        getPosts();

    },[]);
    return (
        <>
        <div className="container">
            <h2>
                There are {posts.length} post in the database
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Update
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post : {id : number; title : string}) =>
                        <tr key={post.id}>
                            <td>
                               {post.title} 
                            </td>
                            <td><button className="btn btn-infocus"> Update </button></td>
                            <td><button className="btn btn-danger"> Delete </button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Home;