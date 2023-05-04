import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/Authprovider";



const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser, updateUserData } = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name,email,password,photo);






        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                setSuccess('User has created successfully')
                updateUserData(result.user, name, photo)
                    .then(() => { console.log('user name updated') })
                    .catch(error => { setError(error.message) })

                form.reset();

            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })

    }

    // const updateUserData =(user,name,photo)=>{
    //     updateProfile(user,{
    //         displayName:name,
    //         photoURL:photo
    //     })
    //     .then(()=>{console.log('user name updated')})
    //     .catch(error=>{ setError(error.message)})
    // }


    return (
        <div>
            <h2 className="text-center mt-2"> PLease Register Here</h2>
            <Container className="login-form  p-3 my-2">
                <Form onSubmit={handleRegister}>
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
                    <Form.Group className="mb-3" controlId="formGroupPhoto">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Photo URL" />
                    </Form.Group>


                    <Button className="mb-2" variant="outline-warning" type="submit" size='lg' active>Register</Button>



                    <p>Already have an account ?<Link to='/login'>Login here</Link></p>
                    <p className="text-danger">{error}</p>
                    <p className="text-success">{success}</p>

                </Form>
            </Container>
        </div>
    );
};

export default Register;