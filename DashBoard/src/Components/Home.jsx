import React from 'react'
import './Home.css'
import Image from '../data/histogram.png'
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from 'react-router-dom';


function Home() {
  return (
    <div style={{height:'100vh'}}>
      
     

      <div className="menu flex flex-row justify-end align-center px-10 py-6" >
        
        <div className="">
          <h3  className="   text-6xl font-serif">Fantasy Insights</h3>
        </div>
      </div>
      
      <div className="flex content ">
        
  
          <div className='flex mt-10  flex-col'>
          <h4 className="text-5xl  font-serif   leading-normal  abt-text">Struggling to Pick a right Team to Win?</h4>
          <h4 className="text-5xl  font-serif  text-right mr-35 leading-normal   abt-text">Don't Worry,</h4>
          <h4 className="text-5xl  font-serif  leading-normal   abt-text">You are on a right place</h4>
          </div>
           <img src={Image} alt=""  className="hist mx-20 pr-10 flex " style={{Height:'300px',Width:'300px'}}/>
        

      </div>
    </div>
  );
}

export default Home