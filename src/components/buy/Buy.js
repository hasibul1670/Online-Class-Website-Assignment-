import React, { useState } from 'react';
import fakeData from'../../fakeData';
import'./Buy.css';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
 
const Buy = () => {
    const first = fakeData.slice(0,15)
  const [product,setproduct]=useState(first);

  const[cart,setCart]=useState([]);

 

const addproduct=(product)=>{
    const newcart=[...cart,product];
    setCart(newcart);
}

    return (
        <div className="main-container">
          
<div className="course-container">
    
{

    product.map(pd=><Course 
        addproduct={addproduct}
        product={pd} ></Course>)
}

</div>
<div className="my">
   <Cart cart= {cart}></Cart>
</div>


        </div>
    );
};

export default Buy;