import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const PageAuth =()=>{

  const [form, setForm]=useState({email:'Enter email', password:'Password'});
  const [show, setShow] = useState(false);
  const [modalInfo, setModal]=useState('')

  const handleClose = () => setShow(false);

  const formHandler=(event)=>{
    setForm({...form, [event.target.name]:event.target.value})
  }

  const checkInfo=(event)=>{
    event.preventDefault();
    fetch('http://localhost:5000/api/user/login',{method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
      body:JSON.stringify({
        email:form.email,
        password:form.password
      })})
      .then(res=>res.json())
      .then(data=>{setModal(data); setShow(true); setForm({email:'Enter email', password:'Password'})});
  }

    return(
        <div style={{margin:'15% 30% 0 30%', border:'#c5c7c4 5px solid', padding:'3%', borderRadius:'15px'}}>
          <h3>Authorization</h3>
            <Form onSubmit={checkInfo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder={form.email} name='email' onChange={formHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder={form.password} name='password' onChange={formHandler}/>
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
      <Button variant="link" size="sm"><Nav.Link  href="/registration">No account</Nav.Link></Button>
    </Form>

    <Modal show={show} onHide={handleClose}>
        <Modal.Body>{modalInfo.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default PageAuth;