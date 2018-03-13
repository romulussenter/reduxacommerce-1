import React from 'react';


const CartButton = props => {
    return (
        <div>
            <button onClick={() => console.log('toggle the cart')}>Cart</button>
        </div>
    );
}


export default CartButton;