import React from 'react';

const SellerForm = () => {
  return (
    <form className="form">
      <div className="form__item">
        <label htmlFor="seller__name">Seller's Name : </label>
        <input
          type="text"
          name="seller__name"
          id="seller__name"
          placeholder="sample_seller_name...."
        />
      </div>
      <div className="form__item">
        <label htmlFor="seller__phone">Seller's phone : </label>
        <input
          type="text"
          name="seller__phone"
          id="seller__phone"
          placeholder="(+123) 456 789 1234"
        />
      </div>
      <div className="form__item">
        <label htmlFor="seller__address">Seller's Address</label>
        <textarea
          name="seller__address"
          id="seller__address"
          cols="30"
          rows="3"
          placeholder="seller's Address"
        ></textarea>
      </div>
      <div className="form__item">
        <label htmlFor="service__rating">Service Rating(out of 5)</label>
        <input
          type="number"
          name="service__rating"
          id="service__rating"
          placeholder="4.9/5"
        />
      </div>

      <div className="form__item">
        <label htmlFor="delivery__period">Delivery Period : </label>
        <input
          type="text"
          name="delivery__period"
          id="delivery__period"
          placeholder="3 days from the date of order"
        />
      </div>

      <input type="submit" value="Add Seller" />
    </form>
  );
};

export default SellerForm;
