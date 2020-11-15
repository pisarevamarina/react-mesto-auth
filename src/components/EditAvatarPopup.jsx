import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({
  isOpen,
  onClose, onUpdateAvatar
}) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type='url'
        className='popup__input popup__input_type_avatar'
        defaultValue=''
        placeholder='Ссылка на картинку'
        name='avatar'
        required
        id='avatar-input'
        ref={avatarRef}
      />
      <span className='popup__input-error' id='avatar-input-error'></span>
    </PopupWithForm>
  );
}
