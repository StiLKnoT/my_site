import React from 'react'
import "./Footer.css"
import logo from "../../img/snake.png"
import redLogo from '../..//img/redLogo.png'
import {BsArrowUp} from "react-icons/bs";


function ToTop(){
    window.scrollTo(0)
  }

function Footer() {
  return (
    <div className="footer component__space d__flex align__items__center justify__content__space__between pz-10" style={{padding:"10px 20px", zIndex:"100", background:"black", position: "relative"}}>
        <div className='container footer__container' style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
            <a href='#'>
                 <img src={redLogo} alt="" className="footer__img pointer" />
            </a>
      <span className="copyright" style={{color: "#c6c9d8", fontSize: "14px", opacity:"0.75" }}>Copyright © 2022 Nurlan Karshiev All Rights Reserved</span>
      </div>

    </div>
  )
}

export default Footer
