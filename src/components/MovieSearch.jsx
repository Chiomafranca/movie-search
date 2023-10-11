// import React, { useState } from 'react'
import React from 'react';
// import Search from '../images/Search.png';
import './MovieSearch.css';
import {BsFillSearchHeartFill} from 'react-icons/bs'

const MovieSearch = ({ filter, setFilter }) => {

  return (
    <div className='search'>
      <input
        type="text"
        value={filter}
        placeholder='What do you want to watch?' 
        onChange={(e) => setFilter(e.target.value)}
      />
     
     <div>
     <BsFillSearchHeartFill className='icon-search'/>
     </div>
    </div>
  );
}

export default MovieSearch;
