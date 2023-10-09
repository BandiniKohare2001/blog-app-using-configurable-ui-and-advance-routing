import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";



function PostCard({  id, image, title, description, author, text }) {
    return (

        <>
            <div>
            <Link className="card-link" to={`/Post/ReadPost/${id}`}>
                <div className="card">
                    <div>
                        <img className="image-card" src={image} alt="image" />
                    </div>
                    <div className="text">
                        <h1 className="title-card">{title}</h1>
                        <p>{description}
                        
                            {" "}
                            .....Read More
                       </p>
                        <span>{author}</span>
                    </div>
                </div>
                </Link>
            </div>
        </>

    );
}

export default PostCard;
