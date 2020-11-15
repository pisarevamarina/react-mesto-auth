import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn
    ? 'grid-element__trash-button'
    : 'grid-element__trash-button_hidden';
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `grid-element__like-button ${
    isLiked ? 'grid-element__like-button_active' : ''
  }`;

  return (
    <li className='grid-element'>
      <img
        src={card.link}
        alt={card.name}
        className='grid-element__image'
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        type='button'
        onClick={handleDeleteClick}
      ></button>
      <div className='grid-element__description'>
        <h3 className='grid-element__title'>{card.name}</h3>
        <div className='grid-element__like-container'>
          <button
            className={cardLikeButtonClassName}
            type='button'
            onClick={handleLikeClick}
          ></button>
          <h3 className='grid-element__like-count'>{card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}
