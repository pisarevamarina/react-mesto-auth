import React from 'react';
import { Route, useHistory, Redirect, Switch } from 'react-router-dom'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from '../auth'
import InfoTooltip from "./InfoTooltip";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoToolTipOpen] = React.useState(true);
  const [failRegistration, setFailRegistration] = React.useState(false)

  const history = useHistory()

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
    setIsInfoToolTipOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userInfo) {
    api
      .editUserInfo(userInfo)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(newAvatar) {
    api
      .changeAvatar(newAvatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(data) {
    api
      .postUserCard(data)
      .then((newPlace) => {
        setCards([newPlace, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
console.log(email)

  function onRegister(email, password) {
    auth.register(email, password)
        .then((res) => {
          if (res.statusCode !== 400 ) {
            setRegistered(true)
            history.push('/sign-in');
          } else {
            setFailRegistration(true)
            history.push('/sign-up')
          }
        })
        .catch((err) => {
          if (err === 400) {
            return console.log('Некорректно заполнено одно из полей')
          }
        })
  }

  function onLogin(email, password) {
    auth.authorize(email, password)
        .then((data) => {
          if(data.token) {
            setEmail(email)
            console.log(email)
            setLoggedIn(true)
            localStorage.setItem('token', data.token)
            history.push('/')
          }
        })
        .catch((err) => {
          if (err.status === 400) {
            return console.log('Не передано одно из полей')
          }
          if (err.status === 401) {
            return console.log('Пользователь с таким email не найден')
          }
        })
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if(token) {
      auth.getUserInfo(token)
          .then((data)=> {
            setLoggedIn(true)
              history.push('/')
            }
          )
          .catch((err) => {
            if (err.status === 401 ) {
              return console.log('Токен не передан или передан не в том формате')
            } else {
             return console.log('Переданный токен некорректен')
            }
    })
  }
  }
  React.useEffect(() => {
    tokenCheck();
  }, []);

  function onSignOut () {
    localStorage.removeItem('token');
    setLoggedIn(false)
    history.push('/sign-in')
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page-container'>
        <Switch>
        <Route path='/sign-in'>
          <Login onLogin={onLogin}/>
        </Route>
        <Route path='/sign-up'>
          {
            failRegistration ? <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} title={'Вы не успешно зарегистрировались!'}  />
          }
          <Register onRegister={onRegister}/>
        </Route>
        <ProtectedRoute exact path='/' loginIn={loggedIn}>
          <Header email={email} onSignOut={onSignOut}/>
          <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} title={'Вы успешно зарегистрировались!'} />
          <Main
              handleEditAvatar={handleEditAvatarClick}
              handleAddPlace={handleAddPlaceClick}
              handleEditProfile={handleEditProfileClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
          />
          <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
          />

          <PopupWithForm
              name='confirm-deleting'
              title='Вы уверены?'
              buttonText='Да'
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <Footer />
        </ProtectedRoute>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
