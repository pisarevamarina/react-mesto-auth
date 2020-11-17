import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/header__logo.png'
import Form from "./Form";

export default function Register ({ onLogin }) {
    const [value, setValue] = React.useState({
        email: '',
        password: ''
    })

const handleSubmit = (evt) => {
    evt.preventDefault()
    const { email, password } = value;
    if(!email || !password) {
        return
    }
    onLogin(email, password);
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
                <Link to='/sign-up' className='header__exit-link'>Регистрация</Link>
            </header>
            <Form onSubmit={handleSubmit}  title='Вход' submitBtnTitle='Войти' onChange={handleChange}
            />
        </>
    )
}