import React, {Component} from 'react';
import Product from "./product";
import {Button} from 'reactstrap';
import './showProduct.css'

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
    const {dictionary} = this.props;
    return (
      <div>
        {
          this.state.showListProduct &&
          <div style={styles.container}>
            {
              dictionary.map((item, index) => {
                return (
                  <Word word={item} key={index}
                        editWord={this.props.editProduct}
                        deleteWord={this.props.deleteProduct}/>
                )
              })
            }
          </div>
        }
        {/*<button style={styles.button} onClick={this.handleShowListWord.bind(this)}>List word</button>*/}
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