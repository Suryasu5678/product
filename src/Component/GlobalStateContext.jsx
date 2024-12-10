import React, { createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "./Reducer";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
