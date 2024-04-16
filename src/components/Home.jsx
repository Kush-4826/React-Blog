// Home.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs.json';
import '../App.css';

const PAGE_SIZE = 3;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedBlogs, setSortedBlogs] = useState(blogsData);

  // Calculate total number of pages
  const totalPages = Math.ceil(sortedBlogs.length / PAGE_SIZE);

  // Calculate starting and ending indices for the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  // Get blogs for the current page
  const currentBlogs = sortedBlogs.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to sort blogs by most commented
  const sortByMostCommented = () => {
    const sortedByComments = [...sortedBlogs].sort((a, b) => b.comments.length - a.comments.length);
    setSortedBlogs(sortedByComments);
    setCurrentPage(1); // Reset current page to 1 after sorting
  };

  // Function to sort blogs by most liked
  const sortByMostLiked = () => {
    const sortedByLikes = [...sortedBlogs].sort((a, b) => b.likes - a.likes);
    setSortedBlogs(sortedByLikes);
    setCurrentPage(1); // Reset current page to 1 after sorting
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-text">Blog It</h1>
        <div className="button-container">
          <button className="button" onClick={sortByMostCommented}>Sort by Most Commented</button>
          <button className="button" onClick={sortByMostLiked}>Sort by Most Liked</button>
        </div>
      </div>
      <div className='blog-container row'>
        {currentBlogs.map(blog => (
          <div className="blog col-4" key={blog.id}>
            <div className='image-container'>
              <img src={ blog.image } alt="" className='image-responsive'/>
            </div>
            <div className='details-container'>
              <h2 style={{marginBottom: ".3rem"}}>{blog.title}</h2>
              <p style={{ margin: ".5rem 0" }}>{blog.author} • {blog.date}</p>
              <p style={{ margin: "1rem 0" }}><strong>Likes: </strong>{blog.likes} • <strong>Comments: </strong>{ blog.comments.length}</p>
              <Link to={`/blog/${blog.id}`} className='button-link'>Read more</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
