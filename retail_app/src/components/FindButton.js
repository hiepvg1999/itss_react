import React, { Component } from 'react';
import ShowFindResult from './ShowFindResult'
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';

class FindButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      findProduct: '',
      resultFindProduct: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleFindProduct = this.handleFindProduct.bind(this)
}
  
  handleChange(event) {
    this.setState({findProduct: event.target.value})
  }

  handleFindProduct(event){
    const products = this.props.products;
    const findProduct = this.state.findProduct;
    for(let i = 0; i < products.length; i++){
      if(products[i].description === findProduct){
        this.state.resultFindProduct.push(products[i]);
        this.setState({resultFindProduct: this.state.resultFindProduct});
      }
    }
    this.setState({findProduct: ''})
    event.preventDefault()
  }

  handleDelete = (index) => {
    this.state.resultFindProduct.splice(index, 1)
    this.setState({resultFindProduct: this.state.resultFindProduct})
  }

  render() {
    var resultShow = this.state.resultFindProduct.map((result, key) => (
      <ShowFindResult
        key = {key}
        result= {result}
        onDelete = {() => this.handleDelete(key)}
      />
    ))

    return (
      <div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Product Information</h1>
            <Form>
              <FormGroup row>
                <Col sm={10}>
                <Input 
                  type="text" 
                  name="inputproduct" 
                  placeholder="Search a product by description"
                  value={this.state.findProduct}
                  onChange={this.handleChange}
                ></Input>
                </Col>
                <Button color="warning" onClick={this.handleFindProduct}>Search</Button>
              </FormGroup>
            </Form>
            
          </Col>
        </Row>
        <div>
        {resultShow}
        </div>
      </div >
    );
  }
}

export default FindButton;