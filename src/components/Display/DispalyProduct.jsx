import React from 'react';

const DispalyProduct = ({p,handleDeleteCard}) => {
    const {product_name,price}=p
    return (
        <div className='border mx-3 my-3 rounded-lg bg-gray-300 '>
            <p>product name : {product_name}</p>
            <p>price : {price}</p>
            <button onClick={()=>handleDeleteCard(p)}  className='
bg-green-500 px-6 py-2 rounded-lg my-4 hover:border-2 hover:border-green-900'>delete </button>
        </div>
    );
};

export default DispalyProduct;
 