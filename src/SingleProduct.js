import React from "react";

const SingleProduct  = ({title, src, price}) => {
	return(
		<div className="product">
			<img src={src} alt=""/>
			<h3>{title}</h3>
			<div className="btns-center">
				<button onClick={() => console.log('Increment')}className="add">+</button>
				<span>0</span>
				<button onClick={() => console.log('Decrement')} className="remove">-</button>
			</div>
			<p>${price}</p>
			<button className="btn btn-buy" onClick={() => console.log('Buy')}>Buy</button>
			<button className="btn btn-remove" onClick={() => console.log('Remove')}>Remove</button>
		</div>
	)
}

export default SingleProduct;