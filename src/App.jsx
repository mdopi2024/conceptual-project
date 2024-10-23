
import { useState } from 'react'
import './App.css'
import FristHeader from './components/Header/FristHeader'
import MainPart from './components/MainPart/MainPart'
import SidePart from './components/SidePart/SidePart'

function App() {
  const [selectedPoduct,setSelectedProduct]=useState([])
  const [addedPrice,setAddedPrice]=useState(0)
 

  const handleAddProduct=(product)=>{
   const checkedProduct = selectedPoduct.find(p => p.id=== product.id)
   if(checkedProduct){
    alert('This product already added')
   }
   else{
    const addedNewProduct = [...selectedPoduct,product]
    setSelectedProduct(addedNewProduct)
    setAddedPrice(addedPrice + product.price)
   }
  }


  const handleDeleteCard=(product)=>{
    const {id, price}=product

   const filter = selectedPoduct.filter(p => p.id !== id)
   setSelectedProduct(filter)

   const deletePrice = addedPrice - price;
   setAddedPrice(deletePrice)

   
  }

  return (
    <>
     <h1 className='text-center text-xl text-blue-700'>my conceptual project</h1>
     <FristHeader 
     selectedPoduct={selectedPoduct}  
     addedPrice={addedPrice}  
     ></FristHeader>


     <div className='grid grid-cols-3 gap-5'>

      <MainPart
       handleAddProduct={ handleAddProduct}
      ></MainPart>


     <SidePart
      product={selectedPoduct}
      handleDeleteCard={handleDeleteCard}
     
     ></SidePart>
     </div>
    </>
  )
}

export default App
