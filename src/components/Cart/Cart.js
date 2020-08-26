import React from 'react';

const Cart = (props) => {
    const cart=props.cart;

    const total = cart.reduce((total,prd)=>total + prd.price,0);

   
    const number = num=>{
        const p = num.toFixed(2);
        return Number(p);
    }

    return (
        <div className="cart">

     <h4>My Courses</h4>
    <p>Purchase Course:{cart.length}</p>
    <p>Course Price:{number(total)}</p>
    <p>Total Price: {number(total)}</p>
    
        </div>
    );
};

export default Cart;