import React from 'react';
import './subscribe-form.styles.scss';

function SubscribeForm() {
  return (
    <div className="subscribe__item">
      <p className="subscribe__item-text">
        SUBSCRIBE
        <span>FOR OUR NEWLETTER AND PROMOTION</span>
      </p>
      <div className="subscribe__item-form item-form">
        <form className="item-form__input">
          <label htmlFor="input-email">
            <input
              id="input-email"
              placeholder="Enter Your Email"
              type="email"
            />
          </label>
          <div className="item-form__btn">
            <button type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubscribeForm;
