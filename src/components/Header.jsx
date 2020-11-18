import React from 'react';
import Logo from '../images/header__logo.png';


export default function Header({ onSignOut, email }) {
  return (
    <header className='header'>
      <img src={Logo} alt='Логотип Место' className='header__logo' />
      <div className='header__container'>
          <p className='header__email'>{email}</p>
          <button className='header__exit-button' onClick={onSignOut}>Выйти</button>
      </div>

    </header>
  );
}
