import React from "react";
import "./Home.css";
import redLogo from "../../img/redLogo.png";
import { useRef } from "react";
import { useEffect } from "react";
import { TweenMax, Power2, Expo} from "gsap";
import gsap from 'gsap'
import { useTranslation } from "react-i18next";
import {BsJustify} from "react-icons/bs"
import {CgClose} from 'react-icons/cg'
import BgAnima from "../BgAnima/BgAnima";
import BgContact from "../BgAnima/BgContact/BgContact";

function Home() {
  const {t, i18n} = useTranslation()
  const [show, setShow] = React.useState(false)

  const changeLanguage = (e)=>{
    i18n.changeLanguage(e.target.value);
  }

  useEffect(()=>{
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if(element.value === i18n.language){
        element.setAttribute("selected", "true")
      }
    }
  })
  
    const words = ["Nurlan", "A Frontend Developer", "Good Man"]
  let mainText = useRef(null);
  let mainText2 = useRef(null);
  let mainText3 = useRef(null);
  let mainText4 = useRef(null);
  let cursor = useRef(null)
  let textTL = useRef(null)

  useEffect(() => {
    TweenMax.to(mainText, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut});
    TweenMax.to(mainText2, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut});
    TweenMax.to(mainText3, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut });
    TweenMax.to(mainText4, 2.5, { opacity: 1, y: -35, ease: Expo.easeOut });
    gsap.to(cursor, 2, {opacity: 0, color: "red", ease: Power2.inOut, repeat: -1});


  
  }, []);

  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 0)
  });
 

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <BgContact/>
        <div className="container header d__flex align__items__center pxy__30">
          <div className="row row__home" id="header_row">
            <div className="logo">
              <a href="#">
              <img src={redLogo} className="navbar__logo"/>
              </a>
            </div>
            <div className="navigation pxy__30">
              <ul className="navbar d__flex">
                <a href="#Home">
                  <li className="col-12 nav__items mx__15">{t("navbar.Home")}</li>
                </a>
                <a href="#about">
                  <li className="col-12 nav__items mx__15">{t("navbar.About")}</li>
                </a>
                <a href="#Services">
                  <li className="col-12 nav__items mx__15">{t("navbar.Services")}</li>
                </a>
                <a href="#Portfolio">
                  <li className="col-12 nav__items mx__15">{t("navbar.Portfolio")}</li>
                </a>
                <a href="#Blog">
                  <li className="col-12 nav__items mx__15">{t("navbar.Blog")}</li>
                </a>
                <a href="#Contact">
                  <li className="col-12 nav__items mx__15">{t("navbar.Contact")}</li>
                </a>
                <li className="li__language">
                    <select className="uz" id="select" aria-label="Default select example" onChange={changeLanguage} defaultValue="ru" >
                      <option className="uz lang" value="uz">UZ</option>
                      <option className="uz lang" value="ru" defaultValue="true">RU</option>
                      <option className="uz lang" value="en">EN</option>
                    </select>                  
              </li>
              </ul>
            </div>
            <div className="toggle__menu">
              {show? <CgClose className="white" id="menu__svg"  onClick={()=>setShow(!show)}/>: <BsJustify  className="white" id="menu__svg"  onClick={()=>setShow(!show)} />}
              {show ?  (

              <div className="sideNavbar">
              <ul className="sidebar d_flex">
                <li className="sideNavbar">
                  <a href="#Home">{t("navbar.Home")}</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">{t("navbar.About")}</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Services">{t("navbar.Services")}</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Portfolio">{t("navbar.Portfolio")}</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Blog">{t("navbar.Blog")}</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">{t("navbar.Contact")}</a>
                </li>
                <li className="li__language">
                    <select className="uz" id="select" aria-label="Default select example" onChange={changeLanguage} defaultValue="ru" >
                      <option className="uz lang" value="uz" >UZ</option>
                      <option className="uz lang" value="ru" selected="true">RU</option>
                      <option className="uz lang" value="en">EN</option>
                    </select>                  
              </li>
              </ul>
            </div>):null}

            </div>
         
            
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 ref={el=>{mainText=el}} className="home__text pz__10">{t("title.welcome")}</h1>
              <h2 ref={el=>{mainText2=el}} className="home__text pz__10">
                {t("title.salom")} <span className="cursorSpan" id="neon" style={{display: "inline-block"}}ref={el=>{textTL=el}}>{t("title.Nurlan")}</span><span className="cursorSpan" ref={el=>{cursor=el}}>_</span>
              </h2>
              <h3 ref={el=>{mainText3=el}} className="home__text sweet pz__10">JS {t("title.developer")}</h3>
              <h4 ref={el=>{mainText4=el}} className="home__text pz__10">{t("title.based")}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
