import React from 'react';

function Modal() {
  return (
    <div className="modal">
      <div className="modal__content">
        <form className="modal__form">
          <label htmlFor="customer_name">
            Your name
            <input type="text" name="" id="customer_name" placeholder="Enter your name" />
          </label>

          <label htmlFor="customer_tel">
            Your phone
            <input type="tel" name="" id="customer_tel" placeholder="Enter phone number" />
          </label>

          <label htmlFor="customer_email">
            Your email
            <input type="tel" name="" id="customer_email" placeholder="Enter phone email" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Modal;
