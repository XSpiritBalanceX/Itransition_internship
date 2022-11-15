import React from "react";
import Card from 'react-bootstrap/Card';
import fon from './fon.jpg'
const PageMain =()=>{
    return(<div style={{ position:'relative'}}>
           <Card style={{ width: '18rem',margin:'auto',marginTop:'5%',position:'absolute', top:'0', left:'0', right:'0', bottom:'0' }}>
      <Card.Img variant="top" src={fon} style={{height:'20em'}}/>
      <Card.Body>
        <Card.Title>Itransition internship 2022</Card.Title>
        <Card.Text>
          Welcom to my implementation of Task 4. Look around here!
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    )
}

export default PageMain;