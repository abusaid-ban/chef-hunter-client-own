import { Button, Container, Form } from "react-bootstrap";
import './Login.css'
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/Authprovider";


const Login = () => {
    const [error, setError] = useState('');
    const [success,setSuccess]= useState('');
    const { signIn } = useContext(AuthContext);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser);
                setError('');
                form.reset();
                setSuccess('Successfully Login')
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    }




    const handleGoogleSignIN = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

            })
            .catch(error => {
                console.log(error.message);
            })

    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Container className="login-form">
            <Form onSubmit={handleLogIn} className="w-75 mx-auto my-2" >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <div>
                    <Button className="mb-2" variant="outline-warning" type="submit" size='lg' active>Login</Button>
                </div>

                <Button onClick={handleGoogleSignIN} className="mb-2 " variant="outline-primary" size="lg">  <FaGoogle /> Login With Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-success" size="lg"> <FaGithub /> Login With GitHub</Button>
                <p>New to Bengali Kitchen ?<Link to='/register'>Register here</Link></p>

                <Form.Text className="text-success">
                    {success}

                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Login;