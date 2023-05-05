import React from 'react';
import './Banner.css'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (

        <Container className='banner-body my-2' >
           <div className='banner'>
           <h3>Welcome to this delicious Bengali recipe! Bengali cuisine is known for its use of flavorful spices and ingredients that create a unique and aromatic blend of flavors. <br />
                <span >Delicious. Traditional. Refreshing.</span> </h3>
           </div>
        </Container>

    );
};

export default Banner;