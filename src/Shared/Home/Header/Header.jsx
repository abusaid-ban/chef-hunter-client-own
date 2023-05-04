import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/Authprovider';
import { FaUser } from "react-icons/fa";


const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className='header mt-2 '>
      <Navbar collapseOnSelect expand="lg" bg="Light" variant="Light">
        <Container >
          <h2 className='name'><span className='text-white '>Bengali</span> Kitchen</h2>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" mx-auto">
              <Link className='me-5 link ' to="/">Home</Link>
              <Link className='blog' to="/blog">Blog</Link>

            </Nav>
            {user &&
              <Nav className='me-2'>
                <FaUser style={{ fontSize: '2rem' }} />
              </Nav>}
            <Nav>
              { user ?
              <Button variant="outline-warning" active>Logout</Button> :
              <Link to='/login'><Button variant="outline-warning" active>Login</Button></Link> 
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h3>Welcome to this delicious Bengali recipe! Bengali cuisine is known for its use of flavorful spices and ingredients that create a unique and aromatic blend of flavors. <br />
          <span >Delicious. Traditional. Refreshing.</span> </h3>
      </div>
    </Container>

  );
};

export default Header;