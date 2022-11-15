import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from "react";

const PageUsers =()=>{

    const [checked, setChecked]= useState(false);

    return(<div>
          <div style={{marginTop:'3%'}}>
            <ButtonGroup aria-label="Basic example" >
                <Button variant="secondary" >Block</Button>
                <Button variant="secondary" >Unblock</Button>
                <Button variant="secondary" >Delete</Button>
            </ButtonGroup>
        </div>  
        <Table striped>
      <thead>
        <tr>
          <th><ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >{!checked?'Select All':'Deselect'}</ToggleButton></th>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Date reg</th>
          <th>Date log</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type={'radio'}/></td>
          <td>1</td>
          <td>Mark</td>
          <td>gfgu@gmail.com</td>
          <td>01.01.2022</td>
          <td>01.01.2022</td>
          <td>Active</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}

export default PageUsers;