import DispalyProduct from "../Display/DispalyProduct";


const SidePart = ({product,handleDeleteCard}) => {
  
    return (
        <div className="text-center border bg-gray-200">
            
          <h1 className="text-xl font-bold">Your added Card </h1>
          {
 
           product.map((p,inds)=><DispalyProduct
            key={inds} p={p}
            handleDeleteCard={handleDeleteCard}
            ></DispalyProduct>)
           }
        </div>
    );
};

export default SidePart;