// AuthorProfile.js

import React from 'react';
import { useParams } from 'react-router-dom';
import authorsData from '../data/authors.json';
import '../App.css';

const AuthorProfile = () => {
  const { authorId } = useParams();
  const author = authorsData.find(author => author.id === parseInt(authorId));

  if (!author) return <div className="container">Author not found</div>;

  return (
    <div className="container">
      <div className="blog">
        <h2>{author.name}</h2>
        <p>{author.bio}</p>
        <p>{author.email}</p>
      </div>
    </div>
  );
};

export default AuthorProfile;

