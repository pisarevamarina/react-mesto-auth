import React from 'react';

export default function Form({ onSubmit, onChange, title, submitBtnTitle }) {
  return (
    <form className='popup__form popup__form_type_auth' onSubmit={onSubmit}>
      <h3 className='popup__title popup__title_type_auth'>{title}</h3>
      <input className='popup__input popup__input_type_auth'  placeholder=' Email' name='email'  type='email' onChange={onChange} required />
      <input className='popup__input popup__input_type_auth'  placeholder=' Пароль' name='password' type='password' required onChange={onChange} />
      <button className='popup__submit-button popup__submit-button_type_auth' type='submit' >{submitBtnTitle}</button>
    </form>
  );
}
