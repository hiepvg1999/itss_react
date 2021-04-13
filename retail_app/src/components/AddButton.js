import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col } from 'reactstrap';

const AddButton = (props) => {
	const {
		addProduct
	} = props;
	
	let newProduct = {
		product_name: '',
		description: '',
		price: ''
	}
	
	const [modal, setModal] = useState(false);
  	const toggle = () => setModal(!modal);
  	
  	function add(){
  		addProduct(newProduct.product_name, newProduct.description, newProduct.price)
    	toggle()
  	}
  	function updateInput(e) {
    	newProduct[e.target.name] = e.target.value
  	}
    return (
		<div>
			<Button color="primary" onClick={toggle}>Add New Product</Button>
			<Modal isOpen={modal} toggle={toggle} className="ok">
		        <ModalBody>
		          	<Form>
		            	<FormGroup row>
		            		<Label sm={3}>Product Name</Label>
		              		<Col sm={9}><Input type="text" name="product_name" id="productID" onChange={updateInput}></Input></Col>
		            	</FormGroup>
		            	<FormGroup row>
		            		<Label sm={3}>Description</Label>
		              		<Col sm={9}><Input type="text" name="description" id="productID" onChange={updateInput}></Input></Col>
		            		</FormGroup>
		            	<FormGroup row>
		            		<Label sm={3}>Price</Label>
		              		<Col sm={9}><Input type="text" name="price" id="productID" onChange={updateInput}></Input></Col>
		            	</FormGroup>
		          	</Form>
		        </ModalBody>
		        <ModalFooter>
		          	<Button color="primary" onClick={add}>Add New Product</Button>{' '}
		        </ModalFooter>
      		</Modal> 
		</div>
    );
}

export default AddButton;