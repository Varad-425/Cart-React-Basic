import React, { Component } from "react";

class Product extends Component {
	constructor(props) {
		super(props);

		this.state = {
			product: this.props.products,
		};
	}
	render() {
		return (
			<div className="row container">
				<div className="col-4">
					<h3>
						{this.state.product.name} : {this.state.product.price} Rs
					</h3>
				</div>
				<div className="col-3">
					<div
						className="btn-group"
						role="group"
						aria-label="Basic mixed styles example"
					>
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => {
								this.props.decrementQuantity(this.props.index);
							}}
						>
							-
						</button>
						<button type="button" className="btn btn-warning">
							{this.state.product.quantity}
						</button>
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								this.props.incrementQuantity(this.props.index);
							}}
						>
							+
						</button>
					</div>
				</div>
				<div className="col-2  ">
					<label>
						{this.state.product.quantity * this.state.product.price}
					</label>
				</div>
			</div>
		);
	}
}

export default Product;
