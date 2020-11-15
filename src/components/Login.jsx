import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/header__logo.png'
import Form from "./Form";

export default function Register () {

    return(
        <>
            <header className='header header_type_auth'>
                <img src={logo} alt='Логотип Место' className='header__logo' />
                <Link to='/signUp' className='header__exit-link'>Регистрация</Link>
            </header>
            <Form />
        </>
    )
}