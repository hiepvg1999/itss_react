import React, {Component} from 'react';
import './Product.css';
import EditButton from '../EditButton'

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      showPrice: false
    }
  }

  // handleShowPrice = () => {
  //   this.setState({showPrice: !this.state.showPrice})
  // };

  // handleShowDescription = () => {
  //   this.setState({showDescription: !this.state.showDescription})
  // };

  render() {
    const product = this.props.product;
    return (
      <div style={styles.container}>
        <span style={styles.product_name}>{product.product_name}</span>
        <div style={styles.container2}>
          <button
            style={styles.button}
            className="button1"
            /*onClick={this.handleShowDescription.bind(this)}*/>Description
          </button>
          {
            //this.state.showDescription &&
            <span style={styles.span}>{product.description}</span>
          }
          <button
            className="button1"
            style={styles.button} 
            /*onClick={this.handleShowPrice.bind(this)}*/>Price</button>
          {
            // this.state.showPrice &&
            <span style={styles.span}>{product.price}</span>
          }
          <EditButton 
            displayProduct = {product}
            editProduct = {this.props.editProduct}
            deleteProduct = {this.props.deleteProduct}/>

        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '31%',
    backgroundColor: '#fff',
    boxShadow: "0px 1px 11px -2px #9E9E9E",
    marginTop: 20,
    marginRight: 25,
    borderRadius: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

  },
  product_nameWrapper: {
    width: 150,
    height: 200,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  product_name: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    width: 150,
    height: 150,
    flex: 2,
  },
  button: {
    marginTop: 20,
    border: 'none',
    color: '#00f',
    textDecoration: 'none',
    fontStyle: 'normal',
    backgroundColor: 'white',
    padding: 0,
    textAlign: 'left'
  },
  span: {
    textAlign: 'left'
  }
};
