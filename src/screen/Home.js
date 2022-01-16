import React from 'react'
import CarouselComponent from '../component/CarouselComponent';
import MenuComponent from '../component/MenuComponent';
import NavbarComponent from '../component/NavbarComponent';

const Home = () => {
    return (
        <div>
            <NavbarComponent />
            <CarouselComponent />
            <MenuComponent />
        </div>
    )
}

export default Home
