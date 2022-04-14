import React, { useState, createContext } from 'react';

export const ProductsContext = createContext();

export const MovieProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },

    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },

    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },

    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },

    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },

    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },

    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },

    {
      _id: Math.random(),
      name: 'Sample product',
      desc: 'this is a sample product descript. I am not really interested in writing this description but I have to, in order to build the app',
      seller_name: 'sample seller',
      rating: 4.5,
      price: 345.5,
      avail: 'yes',
      images: [
        'https://google.com/',
        'https://youtube.com',
        'https://instagram.com/',
        'https://twitter.com/',
      ],
      brand_name: 'Gucci',
    },
  ]);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
