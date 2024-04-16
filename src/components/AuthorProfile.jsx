// AuthorProfile.js

import React from 'react';
import { useParams } from 'react-router-dom';
import authorsData from '../data/authors.json';
import '../App.css';

const AuthorProfile = () => {
  const { authorId } = useParams();
  const author = authorsData.find(author => author.id === parseInt(authorId));
  console.log(author);

  if (!author) return <div className="container">Author not found</div>;

  return (
    <div className="container">      
      <div className="blog profile">
        <img src={"../" + author.image} alt="" className='user-img' />
        <h2>{author.name}</h2>
        <p>{author.email}</p>
        <p>{author.bio}</p>
      </div>
    </div>
  );
};

export default AuthorProfile;

