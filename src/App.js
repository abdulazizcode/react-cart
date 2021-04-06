import React from "react";
import Header from "./Header";
import Home from "./Home";
import {useGlobalContext} from "./context";

function App() {
	const {loading} = useGlobalContext();
	if(loading){
		return(
			<div className="loading">
				<h1>Loading</h1>
			</div>
		)
	}
	
  return (
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
