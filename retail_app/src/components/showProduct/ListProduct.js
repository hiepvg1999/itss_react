import React, { Component } from 'react';

class ListProduct extends Component {
  render() {
  	const {
      id,
      product_name,
      description,
      price
    } = this.props;
    return (
		<div className="">
      <tr>
        <td>{id}</td>
        <td>{product_name}</td>
        <td>{description}</td>
        <td>{price}</td>
      </tr>
		</div>
    );
	}
}

export default ListProduct;