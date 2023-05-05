import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './DetailsPages.css'

const DetailsPage = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const detailsData = useLoaderData();
    const { id } = useParams();
    // console.log(detailsData);
    const [details, setDetails] = useState({});
    useEffect(() => {
        const chefData = detailsData.find(dD => dD.id == id);
        console.log(chefData);
        setDetails(chefData);
    }, [])
    const  addToFavorites=()=> {
        setIsFavorite(true);
        toast("Add to favorite Recipe");
       
      }

    const  addFavorites =()=> {
        setIsClicked(true);
        toast("Add to favorite Recipe");
      
      }
    const  handleFavorites =()=> {
        setIsPressed(true);
        toast("Add to favorite Recipe");
      
      }
      
    
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
                        <td> <Button disabled={isClicked}  onClick={ addFavorites} variant="danger">Add to Favorites <ToastContainer /></Button></td>
                    </tr>
                    <tr>
                    <th scope="row">{details.recipe_name2}</th>
                        <td>{details.ingredients}</td>
                        <td>{details.method}</td>
                        <td>{details.rating2}</td>
                        <td> <Button disabled={isFavorite} onClick={addToFavorites} variant="danger">Add to Favorites <ToastContainer /></Button></td>
                    </tr>
                    <tr>
                    <th scope="row">{details.recipe_name3}</th>
                        <td>{details.ingredients}</td>
                        <td>{details.method}</td>
                        <td>{details.rating3}</td>
                        <td> <Button disabled={isPressed} onClick={ handleFavorites} variant="danger">Add to Favorites <ToastContainer /></Button></td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default DetailsPage;