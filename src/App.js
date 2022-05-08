import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import React, { Component } from "react";

class App extends Component {
	constructor() {
		super();

		this.state = {
			productList: [
				{ name: "Iphone", price: 99999, quantity: 0 },

				{
					name: "Redmi",
					price: 9999,
					quantity: 0,
				},
			],
			totalAmount: 0,
		};
	}
	incrementQuantity = (index) => {
		const newProductList = [...this.state.productList];
		newProductList[index].quantity++;
		let totalPrice = this.state.totalAmount;
		totalPrice = totalPrice + newProductList[index].price;
		this.setState({
			productList: newProductList,
			totalAmount: totalPrice,
		});
	};

	decrementQuantity = (index) => {
		const newProductList = [...this.state.productList];
		let totalPrice = this.state.totalAmount;
		if (newProductList[index].quantity == 0) {
			/* TODO document why this block is empty */
		} else {
			totalPrice = totalPrice - newProductList[index].price;
			newProductList[index].quantity--;
		}

		this.setState({
			productList: newProductList,
			totalAmount: totalPrice,
		});
	};

	resetQuantity = () => {
		const newProductList = [...this.state.productList];
		newProductList.map((product) => {
			product.quantity = 0;
		});
		this.setState({
			productList: newProductList,
			totalAmount: 0,
		});
	};

	addProduct = (pname, rsprice, pquantity) => {
		let newProductList = [...this.state.productList];
		const product = {
			name: pname,
			price: rsprice,
			quantity: pquantity,
		};
		newProductList.push(product);
		this.setState({
			productList: newProductList,
		});
	};

	render() {
		return (
			<div>
				<Header />
				<div className="mt-5"></div>
				<ProductList
					productList={this.state.productList}
					incrementQuantity={this.incrementQuantity}
					decrementQuantity={this.decrementQuantity}
				/>
				<Footer
					totalAmount={this.state.totalAmount}
					reset={this.resetQuantity}
					addProduct={this.addProduct}
				/>
			</div>
		);
	}
}

export default App;
