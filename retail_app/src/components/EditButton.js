import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col } from 'reactstrap';

const EditButton = (props) => {
  const {
    displayProduct,
    editProduct,
    deleteProduct
  } = props;

  let newProduct = displayProduct

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function edit() {
    editWord(displayProduct.id, newProduct.product_name, newProduct.description, newProduct.price)
    toggle()
  }

  function deleteTarget() {
    deleteProduct(displayProduct.id)
    toggle()
  }

  function updateInput(e) {
    newProduct[e.target.name] = e.target.value
    console.log(newProduct)
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>Edit | Delete</Button>
      <Modal isOpen={modal} toggle={toggle} className={displayProduct.id.toString()}>
        <ModalBody>
          <Form>
            <FormGroup row>
            <Label sm={3}>product_name</Label>
              <Col sm={9}><Input type="text" name="product_name" id="taskID" placeholder={displayProduct.product_name} onChange={updateInput}>{newProduct.product_name}</Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>description</Label>
              <Col sm={9}><Input type="text" name="description" id="taskID" placeholder={displayProduct.description} onChange={updateInput}>{newProduct.description}</Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>price</Label>
              <Col sm={9}><Input type="text" name="price" id="taskID" placeholder={displayProduct.price} onChange={updateInput}>{newProduct.price}</Input></Col>
            </FormGroup>
          </Form>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Update</Button>{' '}
          <Button color="danger" onClick={deleteTarget}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditButton;
