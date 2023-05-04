import React from 'react';
import { Container } from 'react-bootstrap';
import photo1 from '../../../assets/photo-1.png'
import photo2 from '../../../assets/photo-2.png'
import photo3 from '../../../assets/photo-3.png'
import photo4 from '../../../assets/photo-4.png'
import photo5 from '../../../assets/photo-5.png'
import './FoodItems.css';

const FoodItems = () => {
    return (
        <Container>
            <h4 className='text-center'>Choose a category</h4>
            <h2 className='text-center'>Recipe Categories </h2>
            <div className='photo'>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
                <img src={photo5} alt="" />
            </div>
            
        </Container>
    );
};

export default FoodItems;