// reducer.js
export const initialState = {
  cart: [],
  products: [],
  bikes: [],
  loading: true,
};

export const actionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_BIKES: "SET_BIKES",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY",
  SET_LOADING: "SET_LOADING",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.SET_BIKES:
      return { ...state, bikes: action.payload };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.find((item) => item.id === action.payload.id)
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case actionTypes.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
