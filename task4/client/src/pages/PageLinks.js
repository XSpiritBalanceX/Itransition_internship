import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "../index";
import {observer} from 'mobx-react-lite'
import { Button } from 'react-bootstrap';

const PagesLinks=observer(()=> {
  const {user}=useContext(Context);
  const navigate=useNavigate();  

  const logOut=()=>{
    user.setIsAuth(false);
    localStorage.clear()
    navigate('/')
  }
  const logIn=()=>{
    user.setIsAuth(false);
    navigate('/login')
  }
  
    return (
        <div >
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Task 4</Navbar.Brand>
          {user.isAuth?<Nav className='ml-auto' >
            <Button variant='outline-light' onClick={()=>logOut()}>Log out</Button></Nav>:
            <Nav className='ml-auto' >
            <Button variant='outline-light'  onClick={()=>logIn()} >Sign in</Button> </Nav>} 
        </Container>
      </Navbar>
        </div>
    );
})

export default PagesLinks;