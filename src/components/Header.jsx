import './Header.css'
import MovieSearch from './MovieSearch';
import tv from '../images/tv.png'
import Sidelogo from './Sidelogo';
import Cards from './Cards'
import { useState } from 'react';

const Header = () => {

  const [filter, setFilter] = useState ("")
  
  return (
    <>
      <div className="image">
        <div className='nav-header'>
            <div className='tv-icon'>
               <img src={tv} alt="logo" />
               <h5>MovieBox</h5>
            </div>
              <div className='movie-search'>
                 <MovieSearch 
                   filter={filter}
                   setFilter={setFilter}
                   />
              </div>
            <div className='sign-in'>
              <h5>Sign in</h5>
            </div>
          </div>
          <Sidelogo/>
         </div>
         <Cards filter={filter}/>
    </>
  )
}
export default Header
