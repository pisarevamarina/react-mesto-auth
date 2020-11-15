import React from "react";

export default function InfoTooltip () {

    return(
        <section className='popup'>
            <button
                className='popup__exit-button'
                type='button'
                onClick={props.onClose}
            ></button>
            <img className='popup__auth-img' src={} alt={}/>
            <h3 className='popup__auth-title'>
                {titleText}
            </h3>
        </section>
    )
}