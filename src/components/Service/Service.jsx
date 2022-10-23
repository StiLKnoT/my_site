import React from "react";
import "./Service.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BgAnima from "../BgAnima/BgAnima";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 },

  }),
};
const BlockAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3,delay: custom * 0.1 },
  }),
};
const createBoxs = (HText, text1, text2, text3, custom, svg) => {
  return { HText, text1, text2, text3, custom, svg };
};



function Service() {
  const {t, i18n} = useTranslation()
  const arr = [
    createBoxs(
      `${t("service1.type")}`,
      `${t("service1.text1")}`,
      `${t("service1.text2")}`,
      `${t("service1.text3")}`,
      1,
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    ),
    createBoxs(
      `${t("service2.type")}`,
      `${t("service2.text1")}`,
      `${t("service2.text2")}`,
      `${t("service2.text3")}`,
      2,
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  
    ),
    createBoxs(
      `${t("service3.type")}`,
      `${t("service3.text1")}`,
      `${t("service3.text2")}`,
      `${t("service3.text3")}`,
      3,
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  
    )
  ];

  return (
    <div className="service" id="Services">
      <BgAnima/>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="heading component__space__service__top"
      >
        <motion.h1 custom={1} variants={textAnimation} className="heading">
        {t("service.title")}
        </motion.h1>
        <motion.p
          custom={2}
          variants={textAnimation}
          className="heading p__color"
        >
          {" "}
          {t("service.text1")}

        </motion.p>
        <motion.p
          custom={3}
          variants={textAnimation}
          className="heading p__color"
        >
        {t("service.text2")}
        </motion.p>
      </motion.div>

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2,  once: true  }}
          className="row component__space__service__bottom"
          id="boxRow"
        >
          {arr.map((box, service) => {
            return (
              <motion.div
                custom={`${box.custom}`}
                variants={BlockAnimation}
                className="col__3"
                key={service}
              >
                <div className="service__box pointer" >
                  <div className="icon">
                    {box.svg}
                  </div>
                  <div className="service__meta">
                    <h1 className="service__text">{box.HText}</h1>
                    <p className="service__text p__color">{box.text1}</p>
                    <p className="service__text p__color">{box.text2}</p>
                    <p className="service__text p__color">{box.text3}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
       </motion.div>
      </div>
    </div>
  );
}

export default Service;
