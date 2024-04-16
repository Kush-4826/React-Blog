// App.js

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import AuthorProfile from './components/AuthorProfile';

function App() {
  return (
    <div className="App">
    <Routes>
      
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/author/:authorId" element={<AuthorProfile />} />
    
    </Routes>
    </div>
  );
}

export default App;

