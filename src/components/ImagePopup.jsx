import React from 'react';

export default function ImagePopup({ card, onClose }) {
  return (
    <section
      className={
        card ? 'popup popup_type_image popup_opened' : 'popup popup_type_image'
      }
    >
      <div className='popup__container'>
        <button
          className='popup__exit-button popup__exit-button_type_image-popup'
          type='button'
          onClick={onClose}
        ></button>
        <img src={card.link} alt={card.name} className='popup__image' />
        <h3 className='popup__bottom-title'>{card.name}</h3>
      </div>
    </section>
  );
}
