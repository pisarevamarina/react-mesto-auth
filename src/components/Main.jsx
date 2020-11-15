import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

export default function Main({
  handleEditAvatar,
  handleAddPlace,
  handleEditProfile,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile'>
        <button
          className='profile__avatar'
          type='button'
          onClick={handleEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        ></button>
        <div className='profile__info'>
          <h1 className='profile__title'>{currentUser.name}</h1>
          <button
            className='profile__edit-button'
            type='button'
            onClick={handleEditProfile}
          ></button>
          <p className='profile__subtitle'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={handleAddPlace}
        ></button>
      </section>
      <section className='grid-elements'>
        <ul className='grid-elements__list'>
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
