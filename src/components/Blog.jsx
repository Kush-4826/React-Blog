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
    <div className="container">
      <div className="blog">
        <h2>{blog.title}</h2>
        <p>{blog.author}</p>
        <p>{blog.date}</p>
        <p>{blog.content}</p>
        <h3>Comments:</h3>
        <ul>
          {blog.comments.map(comment => (
            <li key={comment.id}>
              <strong>{comment.author}:</strong> {comment.content}
            </li>
          ))}
        </ul>
        <Link to={`/author/${blog.authorId}`}>View Author Profile</Link>
      </div>
    </div>
  );
};

export default Blog;
