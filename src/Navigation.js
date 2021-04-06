import React from "react";
import {links} from "./links";

const Navigation = () => {
	return(
		<nav className="nav">
		  {links.map((link) => {
		  	const {id,url, text} = link;
		  	return (
		  		<li key={id}><a href={url}>{text}</a></li>
		  	)
		  })}		
		</nav>

	)
		
	
}
export default Navigation;
