import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import FindButton from './components/FindButton'
import ShowProduct from './components/showProduct/ShowProduct'
import AddButton from './components/AddButton'

class App extends Component {
  
  state = {
    products: [
      {
        id: 1,
        product_name: 'Iphone 11 Promax',
        description: 'smartphone',
        price: '18.000.000d'
      },
      {
        id: 2,
        product_name: 'Macbook',
        description: 'laptop',
        price: '22.000.000d'
      },
      {
        id: 3,
        product_name: 'Apple watch',
        description: 'watch',
        price: '7.000.000d'
      }
    ]
  }

  addProduct = (newProductName, newDescription, newPrice) => {
    let products = this.state.products
    let newID = this.state.products[this.state.products.length-1].id + 1
    products[products.length] = {
      id : newID,
      product_name : newProductName,
      description : newDescription,
      price : newPrice
    }
    
    this.setState({ products })
  }

  edit = (id, newProductName, newDescription, newPrice) => {
    let products = this.state.products
    let index = products.findIndex((element) => {
      return element.id === id
    })
    products[index] = {
      id: id,
      product_name: newProductName,
      description: newDescription,
      price: newPrice
    }
    this.setState({ products })
  }

  delete = (id) => {
    let products = this.state.products
    products = products.filter((element) => {
      return element.id !== id
    })
    this.setState({ products: products, displayProductID: products[0].id})
  }

  render() {
    return (
      <div className="App">
        <FindButton
          products = {this.state.products} 
        /> 
        <AddButton 
          addProduct = {this.addProduct}
        /> 
        <ShowProduct 
          products = {this.state.products}
          editProduct = {this.edit}
          deleteProduct = {this.delete}
        />
      </div>
    );
  }
}

export default App;
