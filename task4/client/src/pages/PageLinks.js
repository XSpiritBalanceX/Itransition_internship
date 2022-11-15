import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class PagesLinks extends React.Component {

    
  render() {

    return (
        <div >
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Task 4</Navbar.Brand>
          <Nav className='justify-content-end flex-grow-1 pe-3'>
            <Nav.Link href="/login">Sign In</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
    
  }

}

export default PagesLinks;