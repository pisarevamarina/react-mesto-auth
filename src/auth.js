
export const BASE_URL = 'https://auth.nomoreparties.co'

export const getResponseData = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Упс! Ошибка: ${res.status}`)
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup` , {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then((res) => {
           return getResponseData(res)
        })
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin` , {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password, email }),
    })
        .then((res) => {
          return  getResponseData(res)
        })
}

export const getUserInfo = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
        .then((res) => {
           return getResponseData(res);
        })

}