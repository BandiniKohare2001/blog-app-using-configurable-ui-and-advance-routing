import React from "react";

import blogData from "./../../data/cardconfig.json";
import "./Post.css";
import PostCard from "./../../components/Card/PostCard"



export default function Posts() {
    return (
        <>
            <div>
                <h1 className="heading">Technical Blogs</h1>
                {
                    blogData.map((post, index) => {
                     return(
                        <PostCard 
                        key={index}
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        description={post.description}
                        author={post.author}
                        />
                     )

                    })

                }
            
            </div >
        </>
    )
}