import React, {useState, useContext, useReducer} from "react";
import products from "./data";

const AppContext = React.createContext();

const initialState = {
	loading:false,
	cart:products,
	amount:0,
	total:0
}

const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext = () =>{
	return useContext(AppContext);
}

export {AppContext, AppProvider};
