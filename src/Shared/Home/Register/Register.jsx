import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }

    return (
        <div>
            <h2 className="text-center mt-2"> PLease Register Here</h2>
            <Container className="login-form">
                <form onSubmit={handleRegister} className="w-75 mx-auto my-2" >
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label> Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <div>
                        <Button className="mb-2" variant="outline-warning" size='lg' active>Register</Button>
                    </div>


                    <p>Already have an account ?<Link to='/login'>Login here</Link></p>

                </form>
            </Container>
        </div>
    );
};

export default Register;