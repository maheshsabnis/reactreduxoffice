// the file contains one or more reducers those will 
// update state in storebundleRenderer.
// each reduecer is pure function that accepts two parameters
// first parameters in state with initial value
// second paraneter is the action
// the return type from each reducer is updatet state from store
// **** one reducer can invoke other, and these can be combined using combinereducer

// import action type

import { ADD_PRODUCT } from './../actions/actions';
import { combineReducers } from 'redux';

export function addProduct(state, action) {
    // write additional logic as per the requirement
    console.log(`Calling addProduct reducer with payload as ${JSON.stringify(action.product)}`);
    console.log(`Calling addProduct reducer with initial state as ${JSON.stringify(state)}`);
    switch (action.type) {
        case ADD_PRODUCT:
            {
                return {
                    product: action.product
                }
            }
        default:
            return state;
    }
}

export function listproducts(state = [], action) {
    // write additional logic as per the requirement
    console.log(`Calling listproducts reducer with payload as ${JSON.stringify(action.product)}`);
    console.log(`Calling listproducts reducer with initial state as ${JSON.stringify(state)}`);
    switch (action.type) {
        case ADD_PRODUCT:
            {
                // call the addProduct redecure to get default state
                // newly added product
                return [...state, addProduct(undefined, action)];

            }
        default:
            return state;
    }
}

// combine redecer

const productreducer = combineReducers({ listproducts });
export default productreducer;