import React from 'react';
import { BsFillArrowRightCircleFill, BsFillPauseFill } from "react-icons/bs";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/index.css';

const TrainsList = () => {
    return (
        <div>
            <div className='ListBackground'>
                <Link to="/login">
                    <Row>
                        <Col>
                            <p className='text'>Argo</p>
                        </Col>
                        <Col>
                            <BsFillPauseFill style={{ color: 'black', marginTop: 35 }} size={35} />
                        </Col>
                        <Col>
                            <p className='text'>06.40</p>
                        </Col>
                        <Col>
                            <BsFillArrowRightCircleFill style={{ color: 'black', marginTop: 35 }} size={35} />
                        </Col>
                        <Col>
                            <p className='text'>09.20</p>
                        </Col>
                        <Col>
                            <BsFillPauseFill style={{ color: 'black', marginTop: 35 }} size={35} />
                        </Col>
                        <Col>
                            <p className='text'>2j 40m</p>
                        </Col>
                        <Col>
                            <BsFillPauseFill style={{ color: 'black', marginTop: 35 }} size={35} />
                        </Col>
                        <Col>
                            <p className='text'>Rp.115.000</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='textdesc'>Ekonomi</p>
                        </Col>
                        <Col></Col>
                        <Col>
                            <p className='textdesc'>From</p>
                        </Col>
                        <Col></Col>
                        <Col>
                            <p className='textdesc'>Destination</p>
                        </Col>
                        <Col></Col>
                        <Col>
                            <p className='textdesc'>Direct</p>
                        </Col>
                        <Col></Col>
                        <Col>
                            <p className='textdesc'>Rp.115.000</p>
                        </Col>
                    </Row>
                </Link>
            </div>
        </div>
    );
};

export default TrainsList;