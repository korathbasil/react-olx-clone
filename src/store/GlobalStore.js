import { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const ContextProvider = ({ initialState, reducer, children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  );
};

const useGlobalStore = () => useContext(Context);
export default useGlobalStore;
