import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import FoodItems from "../FoodItems/FoodItems";


const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Card></Card>
            <FoodItems></FoodItems>
        </Container>
    );
};

export default Home;