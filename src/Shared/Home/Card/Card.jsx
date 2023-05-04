import React, { useEffect, useState } from 'react';
import './Card.css';
import { Button } from 'react-bootstrap';


const Card = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    } ,[]);
    return (
        <div className='my-5'>
            <h2 className='text-center mb-3'>Here is Famous Bangladeshi Chefs</h2>
          <div className='card' >
          {
                categories.map(category=> 
                <div className='card-item'  key={category.id}>
                    <img className='h-50 w-100 mb-5' src={category.picture} alt="" />
                  <h4 className='mt-2 mb-2'> Chef Name: { category.name}</h4>
                  <h6>Experience: { category.experience} Years</h6>
                  <h6>Number of Recipes: { category.recipes} </h6>
                  <h6>Likes: { category.likes} </h6>
                  <Button className='mb-2' variant="success">view Recipes</Button>

                </div> )
            }
          </div>
            
        </div>
    );
};

export default Card;