import React, { Component } from 'react';
import './../App.css';

import { Jumbotron, Col, Container} from 'reactstrap';

class ShowFindResult extends Component {
    render() {
        const jStyle = {
            margin: '10px',
            padding: '5px',
            background: '#ccffcc',
            height:'21vh',
          };
          const dStyle = {
            cursor: 'pointer'
          };
        return (
            <div >
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Jumbotron fluid  style={jStyle} className="deleteFindResult">
                        <Container fluid style={dStyle} onClick = {this.props.onDelete} className="deleteFindResult">
                            <p className="lead">  
                            商品名: {this.props.result.product_name} <br />
                            種類: {this.props.result.description} <br/>
                            価格: {this.props.result.price}
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </div>
        );
    }
}

export default ShowFindResult;