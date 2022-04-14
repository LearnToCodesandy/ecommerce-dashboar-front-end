import React, { useState } from 'react';
import './home.css';
import SellerForm from '../../components/SellerForm';
import ProductForm from '../../components/ProductForm';
import CommentForm from '../../components/CommentForm';

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

const Home = () => {
  const [current, setCurrent] = useState('Seller');

  // handlers
  const handleFormChange = (e) => {
    console.log(e.target.value);
    setCurrent(e.target.value);
  };

  return (
    <>
      <div className="home__wrapper">
        <div className="sidebar__wrapper">
          <nav>
            <li className="sidebar__item active">Add</li>
            <li className="sidebar__item">Sellers</li>
            <li className="sidebar__item">Products</li>
            <li className="sidebar__item">Comments</li>
            <li className="sidebar__item">Shopping cart</li>
            <li className="sidebar__item">Users</li>
          </nav>
        </div>
        <div className="content__wrapper">
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
        </div>
      </div>
    </>
  );
};

export default Home;
