import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name='new-card'
      title='Новое место'
      buttonText='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='popup__input popup__input_type_title'
        defaultValue=''
        placeholder='Название'
        name='name'
        required
        minLength='1'
        maxLength='30'
        id='title-input'
        ref={nameRef}
      />
      <span className='popup__input-error' id='title-input-error'></span>
      <input
        type='url'
        className='popup__input popup__input_type_image-link'
        defaultValue=''
        placeholder='Ссылка на картинку'
        name='link'
        required
        id='link-input'
        ref={linkRef}
      />
      <span className='popup__input-error' id='link-input-error'></span>
    </PopupWithForm>
  );
}
