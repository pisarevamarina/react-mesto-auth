import React from "react";
import successImg from '../images/success.png'
import failImg from '../images/Fail.png'

export default function InfoTooltip ({ loginIn, title, onClose, isOpen}) {

    return(
        <section className={`popup popup_type_auth ${
            isOpen && 'popup_opened'}`}>
            <div className='popup__form popup__form_type_infoToolTip'>
                <button
                    className='popup__exit-button'
                    type='button'
                    onClick={onClose}
                ></button>
                <img className='popup__auth-img' src={loginIn ? successImg : failImg} alt={'Картинка'}/>
                <h3 className='popup__auth-title'>
                    {title}
                </h3>
            </div>

        </section>
    )
}