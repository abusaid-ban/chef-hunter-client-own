import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/Authprovider';
import ActiveLink from '../../../ActiveLink/ActiveLink';




const Header = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <Container className='header mt-2 '>
      <Navbar collapseOnSelect expand="lg" bg="Light" variant="Light">
        <Container >
          <h2 className='name'><span className='text-white '>Bengali</span> Kitchen</h2>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" mx-auto">
              <ActiveLink className='me-5 link ' to="/">Home</ActiveLink>
              <ActiveLink className='blog' to="/blog">Blog</ActiveLink>

            </Nav>
            {user &&
              <Nav className='me-2'>
                {user.email}
              </Nav>}
            <Nav>
              { user ?
              <Button variant="outline-warning" active>Logout</Button> :
              <ActiveLink to='/login'><Button variant="outline-warning" active>Login</Button></ActiveLink> 
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </Container>

  );
};

export default Header;