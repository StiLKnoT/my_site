import React from 'react'
import './Contact.css'
import Astr from '../../img/Astr.jpg'
import { useTranslation } from "react-i18next";
import BgContact from '../BgAnima/BgContact/BgContact';
import BgAnima from '../BgAnima/BgAnima';
import { useState } from 'react';
import axios from 'axios'
import Form from '../form/Form';
import { useEffect } from 'react';
import FormError from '../form/FormError/FormError';



function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [postUser, setPostUser] = useState([])
  const [openForm, setOpenForm] = useState(true)
  const [errorForm, setErrorForm] = useState(true)

  const {t, i18n} = useTranslation()
  const url = "https://62373d82f5f6e28a154abef5.mockapi.io/news"
  
  const clear = (value) => {
    setSubject((value = ""));
    setMessage((value = ""));
    setEmail((value = ""));
    setName((value = ""));
  };
  useEffect(()=>{
    getPostUser()
  },[])

  const getPostUser = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
      setPostUser(resp.data);
      setTimeout(()=>setOpenForm(!openForm),200) 
      clear();

    } catch (error) {
      setTimeout(()=>setErrorForm(!errorForm),200) 
      clear();
    }
  };


  

  return (
    <div className="contact" id='Contact'>
      <BgAnima/>

      <div className="row component__space contact_bg" >
        <div className="col__2 col__2__contact__info">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">{t("contact.hireMe")}.</h1>
              <p className="hire__text white">{t("contact.aboutMe")} {t("contact.connect")}</p>
              <p className="hire__text white"><strong>+998 90 012 35 43</strong> {t("contact.or")} <strong>stilknot@gmail.com</strong></p>
            </div>


            <form className="input__box" onSubmit={getPostUser}>
              <input type="text" className="contact name" placeholder= {t("contact.name")+" *"} value={name} onChange={(e)=>setName(e.target.value)} required />
              <input type="text" className="contact email" placeholder={t("contact.email")+" *"} value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              <input type="text" className="contact subject" placeholder={t("contact.subject")} value={subject} onChange={(e)=>setSubject(e.target.value)} required/>
              <textarea name="message" id="message" placeholder={t("contact.message")} value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
              <button className="btn contact pointer" type="submit">{t("contact.submit")}</button>
            </form>

            <Form openForm={openForm} FormAnswer={()=> setOpenForm(!openForm)}/>
            <FormError errorForm={errorForm} FormErrorAnswer={()=> setErrorForm(!errorForm)}/>

          </div>
        </div>
        <div className="col__2" id='col__2__contact__img'>
          <img src={Astr} alt="" className="contact__img"/>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
