import React from 'react'
import './Header.css'
import imdb from '../images/imdb.png'
import apple from '../images/apple.png'
import Play from '../images/Play.png'

const Sidelogo = () => {
  return (
        <>
           <div className='sidelogo'>
             <h1 className='header-side'>John Wick 3 : <br /> <span>Parabellum</span></h1>
          
                 <div className='apple'>
                  <img src={imdb} alt="logo" />
                    <div className='apple-num'> 
                      <img src={apple} alt="apple" />
                    <p>97%</p></div>
                 </div>
           
               <div className='para'>
                  <p>John Wick is on the run after killing a <br />
                   member of the international assassins' <br />
                   guild, and with a $14 million price <br /> tag
                  on his head, he is the target<br /> of hit men and women everywhere.</p>
               </div>
                <div className='btn'>
                     <img src={Play} alt="logo" />
                    <p>Watch trailer</p>
                 </div>
      </div>
       </>
  )
}

export default Sidelogo
