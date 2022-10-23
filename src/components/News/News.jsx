import React from "react";
import { useTranslation } from "react-i18next";
import "./News.css";
import gits from "../../img/gitsUz.png";
import Samarkand from '../../img/Samarkand.jpg'
import Aydarkul from '../../img/Aydarkul.jpg'
import Parkent from '../../img/parkent.jpg'
import Bashnya from '../../img/bashnya.jpg'
import NBU from '../../img/nbu.jpg'
import { motion } from "framer-motion";


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

function Blesk() {
  const {t, i18n} = useTranslation()

  return (
    <div style={{background:"black"}} className=" component__space" id="Blog">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="heading"
        >
            <motion.h1 custom={1} variants={textAnimation} className="heading">
              {t("blog.blog")}
            </motion.h1>
        </motion.div>
      <div className="wrapperCard">
        {/* <h2>
          <strong>
            All Games<span>( 4 )</span>
          </strong>
        </h2> */}

        <div className="cards">
          <figure className="card">
            <img src={Aydarkul} />

            <figcaption><span className="active__text">{t("blog.Aydarkul")}<br/><br/>{t("blog.AydarkulText")}</span></figcaption>
          </figure>

          <figure className="card">
            <img src={Samarkand} />

            <figcaption><span className="active__text">{t("blog.Samarkand")}<br/><br/>{t("blog.SamarkandText")}</span></figcaption>
          </figure>

          <figure className="card">
            <img src={Bashnya} />

            <figcaption><span className="active__text">{t("blog.Tower")}<br/><br/>{t("blog.TowerText")}</span></figcaption>
          </figure>

          <figure className="card">
            <img src={NBU} />

            <figcaption><span className="active__text">{t("blog.NBU")}<br/><br/>{t("blog.NBUText")}</span></figcaption>
          </figure>
        </div>       
      </div>
    </div>
  );
}

export default Blesk;
