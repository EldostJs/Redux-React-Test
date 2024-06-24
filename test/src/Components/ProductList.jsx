import React from 'react';
import { useSelector } from 'react-redux';

function ProductList() {

    const products = useSelector(state => state.products)
    
    console.log('as',products);
    return (
        <div>
        </div>
    );
}

export default ProductList;
