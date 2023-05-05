import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
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
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Recipe Name</th>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Cooking Method</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">{details.recipe_name}</th>
                        <td>{details.ingredients}</td>
                        <td>{details.method}</td>
                        <td>{details.rating}</td>
                        <td> <Button variant="danger">Favorite</Button></td>
                    </tr>
                    <tr>
                    <th scope="row">{details.recipe_name2}</th>
                        <td>{details.ingredients}</td>
                        <td>{details.method}</td>
                        <td>{details.rating2}</td>
                        <td> <Button variant="danger">Favorite</Button></td>
                    </tr>
                    <tr>
                    <th scope="row">{details.recipe_name3}</th>
                        <td>{details.ingredients}</td>
                        <td>{details.method}</td>
                        <td>{details.rating3}</td>
                        <td> <Button variant="danger">Favorite</Button></td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default DetailsPage;