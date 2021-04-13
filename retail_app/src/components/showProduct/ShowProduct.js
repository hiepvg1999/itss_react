import React, {Component} from 'react';
import Product from "./Product";
import {Button} from 'reactstrap';
import './ShowProduct.css'

class ShowProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showListProduct: true
    }
  }

  handleShowListProduct = () => {
    this.setState({showListProduct: !this.state.showListProduct})
  }

  render() {
    const {products} = this.props;
    return (
      <div>
        {
          this.state.showListProduct &&
          <div style={styles.container}>
            {
              products.map((item, index) => {
                return (
                  <Product product={item} key={index}
                        editProduct={this.props.editProduct}
                        deleteProduct={this.props.deleteProduct}/>
                )
              })
            }
          </div>
        }
        <Button
          className="button-show" color="warning"
          onClick={this.handleShowListProduct.bind(this)}>
          {this.state.showListProduct ? 'Hide list product' : 'List of product'}
        </Button>
      </div>
    );
  }
}

export default ShowProduct;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    /*justifyContent: 'space-evenly',*/
    marginLeft: '4%',
    marginRight: '2%',
    marginTop: 20,
  },
  button: {
    width: '50%',
    height: 35,
    backgroundColor: '#ffc107',
    marginTop: 20,
    borderRadius: 10,
  }

};