import * as types from './types';
import * as cartActions from './actions';

const initialState = false;
const reducer = (state=initialState, action) => {
    switch(action.type){
        case types.TOGGLE_CART: {
            return state === false ? true : false;
            //return !state;
        }
        default:
            return state;
    }
}

export {
    cartActions
}


export default reducer;