import React, { useState } from 'react';
import SellerForm from '../components/SellerForm';
import ProductForm from '../components/ProductForm';
import CommentForm from '../components/CommentForm';

// switch function
const switchForm = (value) => {
  switch (value) {
    case 'Seller':
      return <SellerForm />;
    case 'Product':
      return <ProductForm />;
    case 'Comment':
      return <CommentForm />;
    default:
      return <SellerForm />;
  }
};

const AddContainer = () => {
  const [current, setCurrent] = useState('Seller');

  // handlers
  const handleFormChange = (e) => {
    // console.log(e.target.value);
    setCurrent(e.target.value);
  };

  return (
    <div className="form__wrapper">
      <div className="form__wrapper__header">
        <p className="form__title">{current}'s Info</p>
        <select
          name="add__filter"
          id="add__filter"
          onChange={(e) => handleFormChange(e)}
        >
          <option value="Seller">Seller</option>
          <option value="Product">Product</option>
          <option value="Comment">Comment</option>
        </select>
      </div>
      <div className="form__container">{switchForm(current)}</div>
    </div>
  );
};

export default AddContainer;
