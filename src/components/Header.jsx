import React from 'react';
import Logo from '../images/header__logo.png';

export default function Header({ onSignOut }) {
  return (
    <header className='header'>
      <img src={Logo} alt='Логотип Место' className='header__logo' />
      <p className='header__email'>Email</p>
      <button className='header__exit-button' onClick={onSignOut}>Выйти</button>
    </header>
  );
}
