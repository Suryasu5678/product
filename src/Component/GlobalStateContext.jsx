import React, { createContext, useReducer, useContext, useEffect } from "react";
import { reducer, initialState } from "./Reducer";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        dispatch({ type: "SET_PRODUCTS", payload: [] });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchProducts();
  }, []);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
