import React from 'react'
import { useState } from 'react'
import '../App.css'
import {BiCricketBall} from 'react-icons/bi'
import {GiBaseballBat}  from 'react-icons/gi'
import {GiCricketBat} from 'react-icons/gi'
import {TbBuildingStadium} from 'react-icons/tb'
import { GiHamburgerMenu } from "react-icons/gi";
import {ImHome} from 'react-icons/im'
import {AiFillCloseCircle} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function Sideebar({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);

    const menuItem =[
        {
            path:'/batsman',
            name:'Batsmen',
            icon:<GiBaseballBat/>
        },
        {
            path:'/Bowlers',
            name:'Bowlers',
            icon:<BiCricketBall/>
        },
        {
            path:'/Allrounder',
            name:'Allrounders',
            icon:<GiCricketBat/>
        },
        {
            path:'/Pitch',
            name:'Pitch',
            icon:<TbBuildingStadium/>
        },
        {
            path:'/',
            name:'HOME',
            icon:<ImHome/>
        },
       
    ]
  return (
    <div className='contain' >
        <div className="sidebar" style={{width: isOpen? '300px' : '60px'}}>
            <div className="top-section">
                <h1 className='menubar' style={{display:isOpen? 'block':'none', transition:'all 0.6s'}}>Category</h1>
                <div className="bars" style={{marginLeft:isOpen? '20px':'0px'}}>
                <GiHamburgerMenu className='w-10 h-10 mt-1' onClick={toggle} style={{display:isOpen? 'none':'block'}}/>
                <AiFillCloseCircle className='w-10 h-10 mt-1' onClick={toggle} style={{display:isOpen? 'block':'none'}}/>
                
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassname="active">
                        <div className="icon">{item.icon}</div>
                        <div className="link_text" style={{display:isOpen? 'block':'none'}}>{item.name}</div>
                        
                        

                    </NavLink>

                ))
            }
        </div>
        <main >{children}</main>

    </div>
  )
}

export default Sideebar