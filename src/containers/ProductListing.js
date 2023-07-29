import React, { useEffect } from 'react';
import axios from 'axios';
import  {useDispatch, useSelector} from 'react-redux';

import Product from './Product'
import {setProducts, fetchProducts} from '../redux/actions/productActions'


const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[]);

  return (
    <div className='ui grid container'>
      <Product />
    </div>
  )
}

export default ProductListing
