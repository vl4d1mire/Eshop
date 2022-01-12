import React from 'react'
import './subscribe-form.styles.scss'

const SubscribeForm = () => {
    return (
        <div className="subscribe__item">
            <p className="subscribe__item-text">
                SUBSCRIBE
                <span>FOR OUR NEWLETTER AND PROMOTION</span>
            </p>
            <div className="subscribe__item-form item-form">
                <form className="item-form__input">
                    <label htmlFor="input-email"/>
                    <input id="input-email" placeholder="Enter Your Email" type="email"/>
                    <div className="item-form__btn">
                        <button>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubscribeForm