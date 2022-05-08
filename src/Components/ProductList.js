import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
	render() {
		return this.props.productList.map((product, i) => {
			return (
				<div className="mt-1">
					<Product
						products={product}
						incrementQuantity={this.props.incrementQuantity}
						decrementQuantity={this.props.decrementQuantity}
						index={i}
						key={i}
					/>
				</div>
			);
		});
	}
}
