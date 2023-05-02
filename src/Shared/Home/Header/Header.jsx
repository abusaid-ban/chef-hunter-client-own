import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
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
            <Nav>
              <Nav.Link href="#deets">Profile Name</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Profile Picture
              </Nav.Link>
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