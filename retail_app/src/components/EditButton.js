import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col } from 'reactstrap';

const EditButton = (props) => {
  const {
    displayWord,
    editWord,
    deleteWord
  } = props;

  let newWord = displayWord

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function edit() {
    editWord(displayWord.id, newWord.product_name, newWord.description, newWord.price)
    toggle()
  }

  function deleteTarget() {
    deleteWord(displayWord.id)
    toggle()
  }

  function updateInput(e) {
    newWord[e.target.name] = e.target.value
    console.log(newWord)
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>Edit | Delete</Button>
      <Modal isOpen={modal} toggle={toggle} className={displayWord.id.toString()}>
        <ModalBody>
          <Form>
            <FormGroup row>
            <Label sm={3}>product_name</Label>
              <Col sm={9}><Input type="text" name="product_name" id="taskID" placeholder={displayWord.product_name} onChange={updateInput}>{newWord.product_name}</Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>description</Label>
              <Col sm={9}><Input type="text" name="description" id="taskID" placeholder={displayWord.description} onChange={updateInput}>{newWord.description}</Input></Col>
            </FormGroup>

            <FormGroup row>
            <Label sm={3}>price</Label>
              <Col sm={9}><Input type="text" name="price" id="taskID" placeholder={displayWord.price} onChange={updateInput}>{newWord.price}</Input></Col>
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
