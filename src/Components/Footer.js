import React, { Component } from "react";

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			price: 0,
			quantity: 0,
		};
	}
	handleName = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handlePrice = (event) => {
		this.setState({
			price: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<nav className="navbar fixed-bottom navbar-dark bg-dark">
					<div className="container row">
						<div className="col-4">
							<div aria-label="Basic mixed styles example">
								<button
									type="button"
									className="btn btn-outline-light mx-5"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									Add a New Product
								</button>
								<button
									type="button"
									className="btn btn-outline-light"
									onClick={this.props.reset}
								>
									Reset all
								</button>
							</div>
						</div>
						<div className="col-2">
							<button
								type="button"
								className="btn btn-outline-primary"
								onClick={() => {
									this.props.reset();
									alert("Purchase Completed");
								}}
							>
								Buy
							</button>
						</div>
						<div className="col-4 text-light">
							<label>Total : {this.props.totalAmount} Rs</label>
						</div>
					</div>
				</nav>
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Add Product
								</h5>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body row">
								<div className="col-4">
									<label> Name of Product</label>
									<input
										type="text"
										value={this.state.name}
										onChange={this.handleName}
									></input>
								</div>
								<div className="col-4">
									<label> Price of Product</label>
									<input
										type="number"
										value={this.state.price}
										onChange={this.handlePrice}
									></input>
								</div>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button
									type="submit"
									class="btn btn-primary"
									onClick={() => {
										this.props.addProduct(
											this.state.name,
											this.state.price,
											this.state.quantity,
										);
									}}
								>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
