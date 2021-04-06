import React from "react";
import Products from "./Products";
import {useGlobalContext} from "./context";

const Home = () =>{
	return (
		<div className="home">
			<Products/>
		</div>
	)
}

export default Home;