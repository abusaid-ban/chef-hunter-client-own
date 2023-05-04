import React from 'react';
import photo1 from '../../../assets/lastedfood1.png'
import photo2 from '../../../assets/lastedFood-02.png'
import photo3 from '../../../assets/lastedfood-3.png'
import { Card, Container } from 'react-bootstrap';
import './LastedRecipe.css'

const LastedRecipe = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center mb-3'>Lasted Recipe </h2>
            <div className='lastedrecipe'>
                <div className='photo1'>
                    <img  className='w-75' src={photo1} alt="" />
                    <h5>Chicken</h5>
                </div>
                <div className='photo2'>
                    <img  className='w-75' src={photo2} alt="" />
                    <h5>Pizza</h5>
                </div>
                <div className='photo3'>
                    <img className='w-75' src={photo3} alt="" />
                    <h5>Burger</h5>
                </div>


            </div>



        </Container>
    );
};

export default LastedRecipe;