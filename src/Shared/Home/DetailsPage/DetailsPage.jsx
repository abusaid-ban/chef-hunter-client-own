import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './DetailsPages.css'

const DetailsPage = () => {
    const detailsData = useLoaderData();
    const { id } = useParams();
    // console.log(detailsData);
    const [details, setDetails] = useState({});
    useEffect(() => {
        const chefData = detailsData.find(dD => dD.id == id);
        console.log(chefData);
        setDetails(chefData);
    }, [])
    return (
        <Container className='my-5'>
            <h2 className='text-center'>Chef Details</h2>
                <div className='details'>
                <div>
                   <img src={details.picture} alt="" />
                </div>
                <div>
                    <h5>Chef Name: {details.name}</h5>
                    <h5>Bio: {details.bio}</h5>
                    <h5>Total Likes: {details.likes}</h5>
                    <h5>Number of Recipe: {details.recipes}</h5>
                    <h5>Experience: {details.experience} Years</h5>
                </div>
                </div>
                <table class="table-success">...</table>
        </Container>
    );
};

export default DetailsPage;