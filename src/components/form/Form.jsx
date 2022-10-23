import React from 'react'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {
    const [openForm, setOpenForm] = useState(false)

  return (
    <div className='fixedForm'>
        <div className='fixedForm_answer'>
        <h2> Спасибо !</h2>
        <span>Ваше сообщение Отправлено</span>
        <button className='btn contact pointer' onClick={props.FormAnswer}>Закрыть</button>
        </div>      
    </div>
  )
}

export default Form

