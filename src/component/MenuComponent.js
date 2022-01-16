import React from 'react'
import { Form, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/index.css';

const MenuComponent = () => {
    return (
        <div>
            <div className="background">
                <Row>
                    <Col>
                        <p style={{ display: 'flex', marginTop: 20, fontSize: 20 }}>From</p>
                        <Form.Control type="email" placeholder="Enter From" className='placeholder' />
                    </Col>
                    <Col>
                        <p style={{ display: 'flex', marginTop: 20, fontSize: 20 }}>Destination</p>
                        <Form.Control type="email" placeholder="Enter Destination" className='placeholder' />
                    </Col>
                    <Col>
                        <p style={{ display: 'flex', marginTop: 20, fontSize: 20 }}>Passengers</p>
                        <Form.Control type="email" placeholder="Enter Passengers" className='placeholder' />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ display: 'flex', marginTop: 20, fontSize: 20 }}>Depature Date</p>
                        <Form.Control type="email" className='placeholder' />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Link className='button' to="/trainlist">Search</Link>
            </div>
        </div>
    )
}

export default MenuComponent
