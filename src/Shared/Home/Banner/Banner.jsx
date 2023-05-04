import React from 'react';
import './Banner.css'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (

        <Container className='banner my-2'>
            <h3>Welcome to this delicious Bengali recipe! Bengali cuisine is known for its use of flavorful spices and ingredients that create a unique and aromatic blend of flavors. <br />
                <span >Delicious. Traditional. Refreshing.</span> </h3>
        </Container>

    );
};

export default Banner;