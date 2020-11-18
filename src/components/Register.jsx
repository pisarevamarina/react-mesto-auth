import React from 'react';
import { Link } from 'react-router-dom'
import Form from './Form';
import logo from '../images/header__logo.png'


export default function Register ({ onRegister}) {

    const [value, setValue] = React.useState({
        email: '',
        password: ''
    })

    function handleSubmit (evt) {
        evt.preventDefault();
        const { email, password } = value;
        onRegister(email, password)
    }
    function handleChange (evt)  {
        const { name, value } = evt.target;
        setValue((prevValue) => ({
            ...prevValue, [name]: value,
        }))
    }

    return(
        <>
        <header className='header header_type_auth'>
        <img src={logo} alt='Логотип Место' className='header__logo' />
        <Link to='/sign-in' className='header__exit-link'>Вoйти</Link>
      </header> 
      <Form
      onSubmit={handleSubmit}
      onChange={handleChange}
      title='Регистрация'
      submitBtnTitle='Зарегистрироваться'
      />
          <Link to='/sign-in'>
              <p className='popup__auth-text'>
                  Уже зарегистрированы? Войти
              </p>
              </Link>
      </>
    )
}