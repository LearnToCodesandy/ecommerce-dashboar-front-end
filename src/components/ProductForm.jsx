import React from 'react';

const ProductForm = () => {
  return (
    <form className="form">
      <div className="form__item">
        <label htmlFor="product__name">Product's Name : </label>
        <input
          type="text"
          name="product__name"
          id="product__name"
          placeholder="sample_seller_name...."
        />
      </div>
      <div className="form__item">
        <label htmlFor="products__description">Product's Description</label>
        <textarea
          name="products__description"
          id="products__description"
          cols="30"
          rows="3"
          placeholder="Product's Description"
        ></textarea>
      </div>

      <div className="form__item">
        <label htmlFor="product__sellers__name">Seller's Name : </label>
        <input
          type="text"
          name="product__sellers__name"
          id="product__sellers__name"
          placeholder="product seller's name...."
        />
      </div>

      <div className="form__item">
        <label htmlFor="product__rating">Product Rating(out of 5)</label>
        <input
          type="number"
          name="product__rating"
          id="product__rating"
          placeholder="4.9/5"
        />
      </div>

      <div className="form__item">
        <label htmlFor="product__price">Product Price : </label>
        <input
          type="number"
          name="product__price"
          id="product__price"
          placeholder="$ 123.4"
        />
      </div>

      <div className="form__item">
        <label htmlFor="brand__name">Brand Name : </label>
        <input
          type="text"
          name="brand__name"
          id="brand__name"
          placeholder="Gucci"
        />
      </div>

      <input type="submit" value="Add Product" />
    </form>
  );
};

export default ProductForm;
