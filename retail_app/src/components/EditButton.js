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
    editProduct(displayProduct.id, newProduct.product_name, newProduct.description, newProduct.price)
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
      <Button color="primary" onClick={toggle}>変更 | 削除</Button>
      <Modal isOpen={modal} toggle={toggle} className={displayProduct.id.toString()}>
        <ModalBody>
          <Form>
            <FormGroup row>
            <Label sm={3}>商品名</Label>
              <Col sm={9}><Input type="text" name="product_name" id="ProductID" placeholder={displayProduct.product_name} onChange={updateInput}>{newProduct.product_name}</Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>種類</Label>
              <Col sm={9}><Input type="text" name="description" id="ProductID" placeholder={displayProduct.description} onChange={updateInput}>{newProduct.description}</Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>価格</Label>
              <Col sm={9}><Input type="text" name="price" id="ProductID" placeholder={displayProduct.price} onChange={updateInput}>{newProduct.price}</Input></Col>
            </FormGroup>
          </Form>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>変更</Button>{' '}
          <Button color="danger" onClick={deleteTarget}>削除</Button>{' '}
          <Button color="secondary" onClick={toggle}>キャンセル</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditButton;
