import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import FoodItems from "../FoodItems/FoodItems";
import LastedRecipe from "../LastedRecipe/LastedRecipe";


const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Card></Card>
            <FoodItems></FoodItems>
            <LastedRecipe></LastedRecipe>
        </Container>
    );
};

export default Home;