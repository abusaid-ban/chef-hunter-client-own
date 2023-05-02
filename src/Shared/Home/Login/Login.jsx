import { Button, Container, Form } from "react-bootstrap";
import './Login.css'
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
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
      
      <Button className="mb-2 " variant="outline-primary" size="lg">  <FaGoogle /> Login With Google</Button> 
      <Button variant="outline-success" size="lg"> <FaGithub /> Login With GitHub</Button>
      <p>New to Bengali Kitchen ?<Link to='/register'>Register here</Link></p>
      
    </Form>
        </Container>
    );
};

export default Login;