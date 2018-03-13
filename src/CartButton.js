import React from 'react';

import { connect } from 'react-redux';
import { cartActions } from './cart';


const CartButton = props => {
    return (
        <div>
            <button onClick={() => props.toggle() }>Cart</button>
        </div>
    );
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(cartActions.toggleCart())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CartButton);