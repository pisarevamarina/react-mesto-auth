import React from 'react';

export default function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen && 'popup_opened'
      }`}
    >
      <form
        className={`popup__form popup__form_type_${props.name}`}
        name={props.name}
        method='POST'
        action='#'
        noValidate
        onSubmit={props.onSubmit}
      >
        <button
          className='popup__exit-button'
          type='button'
          onClick={props.onClose}
        ></button>
        <h3 className='popup__title'>{props.title}</h3>
        {props.children}
        <button className='popup__submit-button' type='submit'>
          {props.buttonText}
        </button>
      </form>
    </section>
  );
}
