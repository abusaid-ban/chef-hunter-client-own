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
        <Container className='my-5'>
            <h4 className='text-center'>Choose a category</h4>
            <h2 className='text-center mb-3'>Recipe Categories </h2>
            <div className='photo'>
                <div>
                    <img src={photo1} alt="" />
                    <h4>Appetizer</h4>
                </div>
                <div>
                    <img src={photo2} alt="" />
                    <h4>Beef</h4>
                </div>
                <div>
                    <img src={photo3} alt="" />
                    <h4>Chicken</h4>
                </div>
                <div>
                    <img src={photo4} alt="" />
                    <h4>Vegetarian</h4>
                </div>
                <div>
                    <img src={photo5} alt="" />
                    <h4>Desserts</h4>
                </div>

            </div>

        </Container>
    );
};

export default FoodItems;