import React from 'react'
import { useTranslation } from "react-i18next";
import './Skill.css'
import kozimxon from "../../img/kozimxon.png";
import taqi from "../../img/taqi.png";
import smm from "../../img/smm.png";
import bolajon from "../../img/bolajon.png";
import JS from "../../img/JS.png";
import global from '../../img/global.jpg'
import critical from '../../img/critical.jpg'
import html5 from '../../img/html5.jpg'
import css3 from '../../img/css3.jpg'
import sass from '../../img/sass.png'
import bootstrap from '../../img/bootstrap.jpg'
import javascript from '../../img/javascript.png'
import reactImg from '../../img/react.png'
import muiImg from '../../img/muiImg.jpg'
import gsapImg from '../../img/gsapImg.png'
import figmaImg from '../../img/figma.webp'
import githubImg from '../../img/githubImg.png'
import vscodeImg from '../../img/vscodeImg.jpg'


// import {ReactComponents as Sass} from '../../img/sass.svg'
// import {ReactComponents as Css} from '../../img/css.svg'


function Skills() {
  const {t, i18n} = useTranslation()

  return (
    <div className='skills'>
   
      
      <article className="wrapper">
      <h2 className='skill__hard'>HARD SKILLS</h2>

        <div className="marquee">
          
          <div className="marquee__group">
            <img src={html5}/>
            <img src={css3}/>
            <img src={sass}/>
            <img src={bootstrap}/>
            <img src={javascript}/>
            <img src={reactImg}/>
            <img src={muiImg}/>
            <img src={gsapImg}/>
            <img src={figmaImg}/>
            <img src={githubImg}/>
            <img src={vscodeImg}/>        
          </div>
          
          <div aria-hidden="true" className="marquee__group">
            <img src={html5}/>
            <img src={css3}/>
            <img src={sass}/>
            <img src={bootstrap}/>
            <img src={javascript}/>
            <img src={reactImg}/>
            <img src={muiImg}/>
            <img src={gsapImg}/>
            <img src={figmaImg}/>
            <img src={githubImg}/>
            <img src={vscodeImg}/>   
          </div>
        </div>


        <h2 className='skill__soft'>SOFT SKILLS</h2>
        <div className="marquee marquee--reverse ">
          
          <div className="marquee__group">
            <div><span>{t("skills.Teamwork")} </span></div>
            <div><span>{t("skills.Communication")}</span></div>
            <div><span>{t("skills.Сreative")}</span></div>
            <div><span>{t("skills.Adaptability")}</span></div>
            <div><span>{t("skills.TimeManagement")}</span></div>
            <div><span>{t("skills.Сonfident")}</span></div>
            <div><span>{t("skills.CriticalThinking")}</span></div>
           
            
          </div>
          
          <div aria-hidden="true" className="marquee__group">

            <div><span>{t("skills.Teamwork")} </span></div>
            <div><span>{t("skills.Communication")}</span></div>
            <div><span>{t("skills.Сreative")}</span></div>
            <div><span>{t("skills.Adaptability")}</span></div>
            <div><span>{t("skills.TimeManagement")}</span></div>
            <div><span>{t("skills.Сonfident")}</span></div>
            <div><span>{t("skills.CriticalThinking")}</span></div>
          

            
          </div>
        </div>
      
      
      </article>
      
    
    </div>
  )
}

export default Skills
