

const Product = ({product, handleAddProduct}) => {
 const {product_name,price}=product
    return (
        <div className="border text-center mx-5 my-4 bg-blue-500 text-white rounded-lg">
         <h3>Product name : {product_name}</h3>  
         <h3>product Price : {price}</h3>
         <div className="mb-2">
            <button onClick={()=> handleAddProduct(product)} className="px-4 py-2 rounded-xl bg-green-600 hover:border-2 hover:border-green-900 ">Add to Card </button>
         </div>

        </div>
    );
};

export default Product;