import { Container } from "react-bootstrap";


const Blog = () => {
    return (
        <Container className="my-5 ">
          <h2 className="text-center">Simple Answer Questions</h2>
          <hr />
          <div>
            <h5> Question #1 : Tell us the differences between uncontrolled and controlled components?</h5>
            <p> Answer: </p>
            <h5> Question #2 : How to validate React props using PropTypes?</h5>
            <p> Answer: </p>
            <h5> Question #3 : Tell us the difference between nodejs and express js.?</h5>
            <p> Answer: </p>
            <h5> Question #4 : What is a custom hook, and why will you create a custom hook??</h5>
            <p> Answer: </p>
          </div>
        </Container>
    );
};

export default Blog;