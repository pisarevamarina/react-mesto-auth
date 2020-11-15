import React from 'react';
import { Link } from 'react-router-dom'
import Form from './Form';
import logo from '../images/header__logo.png'
import successImg from '../images/success.png'

export default function Register () {

    return(
        <>
        <header className='header header_type_auth'>
        <img src={logo} alt='Логотип Место' className='header__logo' />
        <Link to='/signIn' className='header__exit-link'>Вoйти</Link>
      </header> 
      <Form />
          <Link to='/signIn'>
              <p className='popup__auth-text'>
                  Уже зарегистрированы? Войти
              </p>
              </Link>
      </>
    )
}