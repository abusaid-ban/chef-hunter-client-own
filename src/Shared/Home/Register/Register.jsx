import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <Container>
            <h2> PLease Register Here</h2>
            <Container className="login-form">
           <Form className="w-75 mx-auto my-2" >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
     <div>
     <Button className="mb-2" variant="outline-warning" size='lg' active>Login</Button>
     </div>
      
      
      <p>Already have an account ?<Link to='/login'>Login here</Link></p>
      
    </Form>
        </Container>
        </Container>
    );
};

export default Register;