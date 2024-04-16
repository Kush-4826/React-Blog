// Blog.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import '../App.css';

const Blog = () => {
  const { id } = useParams();
  const blog = blogsData.find(blog => blog.id === parseInt(id));

  if (!blog) return <div className="container">Blog not found</div>;

  return (
    <div className="container" id='blog-page'>
      <div className="blog">
        <div className="image-container">
          <img src={"../" + blog.image} alt="" className='image-responsive'/>
        </div>
        <h2>{blog.title}</h2>
        <p>{blog.author}</p>
        <p>{blog.date}</p>
        <p>{blog.content}</p>
        <h3>Likes:</h3>
        <p>{ blog.likes }</p>
        <h3>Comments:</h3>
        <ul className='comments-section'>
          {blog.comments.map(comment => (
            <li key={comment.id} className='comment'>
              <p><strong>{comment.author}</strong></p><p>{comment.content}</p>
            </li>
          ))}
        </ul>
        <Link to={`/author/${blog.authorId}`} className='button-link'>View Author Profile</Link>
      </div>
    </div>
  );
};

export default Blog;
