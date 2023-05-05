import React, { useEffect, useState } from 'react';
import './Card.css';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Card = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading,setLoading] = useState(true);
   
    useEffect(() => {
        setLoading(true);
        
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            setLoading(false);
    }, []);
   
    return (
        <div className='my-5'>
            <h2 className='text-center mb-3'>Our Famous Bangladeshi Chefs</h2>
            {isLoading ? <div className='text-center'>
                <Spinner animation="border" variant="success" />
            </div> :
            <div className='card' >
                {
                    categories.map(category =>
                        <div className='card-item ' key={category.id}>
                            <img className='h-50 w-100 mb-5' src={category.picture} alt="" />
                            <h4 className='mt-2 mb-2'>Name: {category.name}</h4>
                            <h6>Experience: {category.experience} Years</h6>
                            <h6>Number of Recipes: {category.recipes} </h6>
                            <h6>Likes: {category.likes} </h6>
                            <Link to={`/category/${category.id}`}> <Button className='mb-2' type='submit' variant="success">View Recipes</Button></Link>

                        </div>)
                }
            </div>}

        </div>
    );
};

export default Card;