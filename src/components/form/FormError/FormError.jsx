import React from 'react'
import '../Form.css'
import { useState } from 'react'

const FormError = (props) => {
    // const [openForm, setOpenForm] = useState(false)

  return (
    <> <div className={props.errorForm?'fixedNone':'fixedForm'}>
    <div className='fixedForm_answer'>
    <h2> Ошибка !</h2>
    <span>Ошибка при отправке !</span>
    <button className='btn contact pointer' onClick={props.FormErrorAnswer}>Закрыть</button>
    </div>      
</div>
   
    </>
  )
}

export default FormError

