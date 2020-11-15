export default class Api {
    constructor (options) {
this.baseUrl =  options.baseUrl;
this.headers = options.headers;
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Упс! Ошибка: ${res.status}`)
      }

    getInitialCards() {
        return fetch (`${this.baseUrl}/cards`, {
            headers: this.headers
        })
        .then(this._getResponseData);
    }

    postUserCard ({name, link}){
        return fetch (`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers, 
            body: JSON.stringify({
             name, link
            })
        })
        .then(this._getResponseData);
    }

    getUserInfo() {
        return fetch (`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(this._getResponseData);
}

    editUserInfo({name, about}) {
        return fetch (`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
            name, about
              })

        })
        .then(this._getResponseData);

    }

    changeLikeCardStatus (cardId, isLiked) {
        return fetch (`${this.baseUrl}/cards/likes/${cardId}`, {
          method: isLiked ? 'PUT' : 'DELETE',
          headers: this.headers
        })
        .then(this._getResponseData);
    }

    deleteCard(cardId) {
        return fetch (`${this.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(this._getResponseData);
    }

    changeAvatar({avatar}) {
        return fetch (`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({avatar})
        })
        .then(this._getResponseData);
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
    headers: {
      authorization: 'aa64054e-de41-439a-90ae-ddf7c127f70d',
      'Content-Type': 'application/json',
    },
  });