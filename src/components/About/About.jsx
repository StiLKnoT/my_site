import React, { useState } from "react";
import "./About.css";
import aboutImg from "../../img/aboutNur.jpg";
import videoPlay from "../../img/videoPlay.jpg";
import { motion } from "framer-motion";
import Skills from "../SKills/Skills";
import { useTranslation } from "react-i18next";
import myCV from "../../documents/myCV.pdf";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {BsArrowUp} from "react-icons/bs";
const btnAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 },
  },
};

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  }),
};
const imgAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
};
const videoAnimation = {
  hidden: {
    x: 0,
    opacity: 1,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
};


function About() {
  const { t, i18n } = useTranslation();
  const [players, setPlayers] = useState(false);

  window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top")
    upToTop.classList.toggle("active", window.scrollY > 0)
  });

  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={videoAnimation}
            viewport={{ amount: 0.4, once: true }}

            className="col__2 myMainImg"
          >
            <motion.img variants={imgAnimation} src={aboutImg} className="about__img" />
            <div style={{ position: "relative" }}>
              <img
                src={videoPlay}
                className="PlayBtn"
                onClick={() => {
                  setPlayers(!players);
                }}
              />
            </div>
            {players ? (
              <motion.div variants={videoAnimation}>
                <div className="fixedPlayer">
                  {" "}
                  <div className="player">
                    <button
                      className="btnESC"
                      onClick={() => {
                        setPlayers(!players);
                      }}
                    >
                      X
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/F8MN0o6RS9o"
                      allowFullScreen
                      className="VideoPlayer"
                      controls
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            ) : null}
            {/* {video.player.state ? (
                          <div className="fixedPlayer">
                            {" "}
                            <div className="player">
                            <button
                              className="btnESC"
                              onClick={() =>video.player.set(!video.player.state)}
                            >
                              X
                            </button>

                              <video
                                src={video.link}
                                allowFullScreen
                                className="VideoPlayer" 
                                controls
                              ></video>
                            </div>
                          </div>
                        ) : null} */}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" className="col__2" id="aboutBlock">
            <motion.h1
              custom={1}
              variants={textAnimation}
              className="about__heading"
            >
              {t("about.aboutMe")}
            </motion.h1>
            <div className="about__meta">
              <div className="about__info">
                <motion.h2
                  custom={2}
                  variants={textAnimation}
                  className="about__text p__color"
                >
                  {t("about.name")}
                  <br />
                  {t("about.surname")}
                  <br />
                  {t("about.age")}
                  <br />
                  {t("about.education")}
                  <br />
                  {t("about.course")}
                </motion.h2>
                <motion.div variants={textAnimation} className="social__icons" id="social__icons">
                  <div style={{ display: "flex" }}>
                    <a href="https://www.instagram.com/nurlan_karshiev" target="__blank"><BsInstagram className="social" id="instagram" /></a>
                    <a href="https://t.me/NuR_K3" target="__blank"><BsTelegram className="social" id="telegram" /></a>
                  </div>
                  <div style={{ display: "flex" }}>
                    <a href="https://github.com/StiLKnoT" target="__blank"><BsGithub className="social" id="github" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100047181914898" target="__blank"><BsFacebook className="social" id="facebook" /></a>

                  </div>
                </motion.div>
              </div>

              {/* <motion.h2 custom={3} variants={textAnimation} className="about__text p__color">
                            Age: 22<br/>
                            Occupation: Student<br/>
                            Live: Tashkent<br/>
                            Education: TUIT<br/>
                            Course: 3
                        </motion.h2> */}
                        <div className="about__info">
              <motion.span
                custom={3}
                variants={textAnimation}
                className="about__text p__color"
              >
                {t("about.iAm")}
                <br />
                {t("about.goals")}
                <br />
                {t("about.specialist")}
                <br />
                {t("about.creation")}
                <br />
                {t("about.demand")}
                <br />
                <motion.div variants={textAnimation} className="social__icons" id="social__icons2">
                <div style={{ display: "flex" }}>
                    <a href="https://www.instagram.com/nurlan_karshiev" target="__blank"><BsInstagram className="social" id="instagram" /></a>
                    <a href="https://t.me/NuR_K3" target="__blank"><BsTelegram className="social" id="telegram" /></a>
                  </div>
                  <div style={{ display: "flex" }}>
                    <a href="https://github.com/StiLKnoT" target="__blank"><BsGithub className="social" id="github" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100047181914898" target="__blank"><BsFacebook className="social" id="facebook" /></a>
                  </div>
                </motion.div>
                

                {/* Hobby :<br/>
                        Sports games, participate in mini<br/>
                        travelling, photographing nature. */}
              </motion.span>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={btnAnimation}
                className="about__button d__flex align__items__center"
              >
                <a href={myCV} download="CV Karshiev Nurlan">
                  <button className="about btn pointer" id="aboutBtn">
                    {t("about.CV")}
                  </button>
                </a>
                <a href="https://github.com/StiLKnoT" target="_blank">
                  <button className="about btn pointer" id="aboutBtn">
                    {t("about.hireME")}
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Skills />
      
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
            <BsArrowUp/>
        </a>
      </div>

   
    </div>
  );
}

export default About;
