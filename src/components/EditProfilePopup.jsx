import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  const currentUser = React.useContext(CurrentUserContext); //подписались на контекст
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='popup__input popup__input_type_name'
        value={name}
        placeholder=' Введите имя'
        name='name'
        required
        minLength='2'
        maxLength='40'
        id='name-input'
        onChange={handleNameChange}
      />
      <span className='popup__input-error' id='name-input-error'></span>
      <input
        type='text'
        className='popup__input popup__input_type_info'
        value={description}
        placeholder=' Чем вы занимаетесь?'
        name='about'
        required
        minLength='2'
        maxLength='200'
        id='info-input'
        onChange={handleDescriptionChange}
      />
      <span className='popup__input-error' id='info-input-error'></span>
    </PopupWithForm>
  );
}
