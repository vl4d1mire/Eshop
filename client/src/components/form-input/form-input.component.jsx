import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './form-input.styles.scss';

function FormInput() {
  const btnStyle = {
    width: '100px',
    height: '34px',
    marginTop: '24px',
    fontSize: '11px',
  };

  return (
    <div className="product__address-wrap">
      <form className="product__address-form">
        <div className="address-form__title">SHIPPING ADDRESS</div>
        <input id="address-country" placeholder="Bangladesh" type="text" />
        <input id="address-state" placeholder="State" type="text" />
        <input id="address-postcode" placeholder="Postcode / Zip" type="text" />
        <div className="address-form__btn">
          <CustomButton style={btnStyle}>GET A QUOTE</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default FormInput;
