// 1. define action types
export const ADD_PRODUCT = "ADD_PRODUCT";
// 2. define action creators
// an exportable function, that accepts 'payload'
// and returns Object with 'actiontype' and 'payload'
// additionally this may contains logic to ajax calls
// or any other domain logic required on front-end

export function addProduct(product) {
    console.log(`Inside action ${JSON.stringify(product)}`);
    return {
        type: ADD_PRODUCT,
        product
    }
};