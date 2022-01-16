import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../style/index.css'


const CarouselComponent = () => {
    return (
        <div style={{ backgroundColor: '#36D3DA', height: "500px", }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carausel"
                        alt="First slide"
                        src={require('../images/banner1.png')}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carausel"
                        alt="Second slide"
                        src={require('../images/banner2.png')}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent

