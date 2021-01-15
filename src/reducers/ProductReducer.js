import * as types from '../types/type';
const initialState = {
    product:[],
    cartProduct:[]


}

export const ProductReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case types.Add_PRODUCT:
        return { ...state,cartProduct:[...state.cartProduct, payload] }

    default:
        return state
    }
}
