
import { useState,useEffect } from "react";
import Product from "../Product/Product";
const MainPart = ({ handleAddProduct}) => {

 const [products, setProducts]=useState([])
useEffect(()=>{
    fetch(`faceDatas.json`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

    return (
        <div className='col-span-2 border text-center'>
            <h2 className="text-2xl font-bold">All Products card</h2>
            {
                products.map((product,indx)=> <Product key={indx}
                product={product}
                handleAddProduct={ handleAddProduct}
                ></Product>)
            }
        </div>
    );
};

export default MainPart;