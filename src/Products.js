import React,{useState} from "react";
import SingleProduct from "./SingleProduct";
import {useGlobalContext} from "./context";

const Products  = () => {
	const products = useGlobalContext();
	const [data, setData] = useState(products);
	const product = data.product;
	return(
		<div className="products">
			{product.map((pro) =>{
				return (
					<SingleProduct key={pro.id} {...pro}/>
				)
			})}

			<button>Clear Cart</button>
		</div>
	)
}

export default Products;