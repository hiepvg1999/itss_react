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
			<Button color="primary" style={styles.button} onClick={toggle}>新しい商品を追加する</Button>
			<Modal isOpen={modal} toggle={toggle} className="ok">
		        <ModalBody>
		          	<Form>
		            	<FormGroup row>
		            		<Label sm={3}>商品名</Label>
		              		<Col sm={9}><Input type="text" name="product_name" id="productID" onChange={updateInput}></Input></Col>
		            	</FormGroup>
		            	<FormGroup row>
		            		<Label sm={3}>種類</Label>
		              		<Col sm={9}><Input type="text" name="description" id="productID" onChange={updateInput}></Input></Col>
		            		</FormGroup>
		            	<FormGroup row>
		            		<Label sm={3}>価格</Label>
		              		<Col sm={9}><Input type="text" name="price" id="productID" onChange={updateInput}></Input></Col>
		            	</FormGroup>
		          	</Form>
		        </ModalBody>
		        <ModalFooter>
		          	<Button color="primary" onClick={add}>新しい商品を追加する</Button>{' '}
		        </ModalFooter>
      		</Modal> 
		</div>
    );
}
const styles = {
	button:{
		marginTop: 20
	}
}
export default AddButton;