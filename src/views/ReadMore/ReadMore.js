import { useParams } from 'react-router-dom'
import './ReadMore.css'
import React, { useEffect, useState } from 'react';
import blogData from './.././../data/cardconfig.json'

export default function ReadMore(){
    const { id } = useParams()
    const  [post, setPost] = useState({})

    useEffect(() => {
        blogData.forEach((postObj) => {
            if(postObj.id == id) {
                setPost(postObj)
            }
        })
    },[id])
   
    return(
        <>
        <div className='container'>
           
           <img src={post.image} />
           <div className='blog-container'>
           <h1> {post.title}</h1>
           <span>{post.publish}</span>
           <p className='p'>{post.text1}</p>
           <p className='p'>{post.text2}</p>
           <p className='p'>{post.text3}</p>
           <p className='p'>{post.text4}</p>
           </div>
          

        </div>
        </>
    )
}