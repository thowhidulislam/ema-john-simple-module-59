import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    console.log(cart)
    let total = 0
    let totalShipping = 0
    let quantity = 0

    for (const product of cart) {
        // console.log(product)
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
    }
    /* let initialValue = 0;
    const total = cart.reduce((previous, current) => previous + current.price, initialValue)
    const totalShipping = cart.reduce((previous, current) => previous + current.shipping, initialValue) */


    // const tax = +((total * 0.1).toFixed(2));
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + totalShipping + tax
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: ${totalShipping} </p>
            <p>Tax: ${tax} </p>
            <p>Grand Total: ${grandTotal} </p>
            {props.children}
        </div>
    );
};

export default Cart;