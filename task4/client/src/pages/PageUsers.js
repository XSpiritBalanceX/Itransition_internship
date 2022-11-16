import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState , useEffect} from "react";
import Users from '../components/Users';

const PageUsers =()=>{

    const [checked, setChecked]= useState(false);
    const [dataUser, setDataUser]=useState([]);
    const [isLoad, setLoad]=useState(false);
    const [checkCh, setCheckedUser]=useState(false)

    useEffect(()=>{
      fetch('http://localhost:5000/api/table')
      .then(res=>res.json())
      .then(data=>{setLoad(true); setDataUser(data)})
    },[]);

    

    let users=isLoad?dataUser.map(el=>{
        return <Users key={el.id} 
        info={el} 
        checkedInput={checkCh}
        setCheckedCh={setCheckedUser}/>
    }):null;

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
          onChange={(e) => {setChecked(e.currentTarget.checked);setCheckedUser(e.currentTarget.checked)}}
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
        {users}
      </tbody>
    </Table>
        </div>
    )
}

export default PageUsers;