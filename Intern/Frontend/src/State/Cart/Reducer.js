import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
} from "./ActionType";

export const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true, error: false };

    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload.cartItems],
      };

    case ADD_ITEM_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CART_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload.cartItems,
        cart: action.payload,
      };

    case GET_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
      };
    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
