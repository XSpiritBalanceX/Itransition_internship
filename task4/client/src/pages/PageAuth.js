import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const PageAuth =()=>{

    return(
        <div style={{margin:'15% 30% 0 30%', border:'#c5c7c4 5px solid', padding:'3%', borderRadius:'15px'}}>
          <h3>Authorization</h3>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
      <Button variant="link" size="sm"><Nav.Link  href="/registration">No account</Nav.Link></Button>
    </Form>
        </div>
    )
}

export default PageAuth;