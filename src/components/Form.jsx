import React from 'react';

export default function Form() {
  return (
    <form className='popup__form popup__form_type_auth'>
      <h3 className='popup__title popup__title_type_auth'>Регистрация</h3>
      <input className='popup__input popup__input_type_auth'  placeholder=' Email' name='email' required />
      <input className='popup__input popup__input_type_auth'  placeholder=' Пароль' name='password' required />
      <button className='popup__submit-button popup__submit-button_type_auth' type='submit'>Зарегистрироваться</button>
    </form>
  );
}
