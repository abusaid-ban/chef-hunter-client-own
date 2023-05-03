import { Button, Container, Form } from "react-bootstrap";
import './Login.css'
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";


const Login = () => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
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
        const handleGithubSignIn=()=>{
            signInWithPopup(auth,githubProvider)
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
            <Form className="w-75 mx-auto my-2" >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <Button className="mb-2" variant="outline-warning" size='lg' active>Login</Button>
                </div>

                <Button onClick={handleGoogleSignIN} className="mb-2 " variant="outline-primary" size="lg">  <FaGoogle /> Login With Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-success" size="lg"> <FaGithub /> Login With GitHub</Button>
                <p>New to Bengali Kitchen ?<Link to='/register'>Register here</Link></p>

            </Form>
        </Container>
    );
};

export default Login;