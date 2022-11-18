import React, { useState , useEffect, useContext}from "react";
import {Button,ButtonGroup,Table,ToggleButton, Modal } from 'react-bootstrap';
import Users from '../components/Users';
import decoded from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import { Context } from "../index";
import {observer} from 'mobx-react-lite';


const PageUsers =observer(()=>{

    const {user}=useContext(Context);

    const [checked, setChecked]= useState(false);
    const [dataUser, setDataUser]=useState([]);
    const [isLoad, setLoad]=useState(false);
    const [userSel, setUserSelect]=useState(null);
    const navigate=useNavigate();
    const [show, setShow] = useState(false);
    const [modalInfo, setModal]=useState('');
    const [checUsNow, setChecUsNow]=useState(false);
    const handleClose = () => setShow(false);

    useEffect(()=>{
      fetch('http://localhost:5000/api/table')
      .then(res=>res.json())
      .then(data=>{setLoad(true); setDataUser(data)})      
    },[]);

    const [hashUser, setHashUser]=useState({})

    const selectUser=(userId, chec)=>{ 
      hashUser[userId]=chec;
      setHashUser(hashUser);
      setUserSelect(userId) ;
      setChecUsNow(chec); 
    }
    
    const activUser=decoded(localStorage.getItem('token'));

    const deleteUser=()=>{
      let newData=dataUser.filter(el=>el.id!==userSel);
      setDataUser(newData)
      fetch('http://localhost:5000/api/table/delete/'+userSel,{method:'DELETE',
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      }})
      .then(response=>response.json())
      .then(data=>{setModal(data.message); setShow(true)})
      if(userSel===activUser.id){
        user.setIsAuth(false);
        navigate('/registration');
      }
    }
    
    
    const blockUser=()=>{
      if(userSel===activUser.id){
        user.setIsAuth(false);        
        navigate('/login');
        localStorage.setItem(`blocked ${userSel}` , userSel);
      }
      for(let k in hashUser){
        if(hashUser[k]===true){
          localStorage.setItem(`blocked ${k}` , k);
        }
      }
      setChecUsNow(false);
      setUserSelect(null);   
    }

    const ublockUser=()=>{
      for(let k in hashUser){
        if(hashUser[k]===true){
          localStorage.removeItem(`blocked ${k}`);
        }
      }
      //localStorage.removeItem(`blocked ${userSel}`);
      setChecUsNow(false);
      setUserSelect(null); 
    }

    let users=isLoad?dataUser.map(el=>{
        return <Users key={el.id} 
        activuser={activUser.id}
        info={el} 
        checkedInput={checked}
        selectUserNow={selectUser}
        isSelected={userSel}
        checkUserNow={checUsNow}
        blocked={el.id===parseInt(localStorage.getItem(`blocked ${el.id}`))}/>
    }):null;

    return(<div>
          <div style={{marginTop:'3%'}}>
            <ButtonGroup aria-label="Basic example" >
                <Button variant="secondary" onClick={blockUser}>Block</Button>
                <Button variant="secondary" onClick={ublockUser}>Unblock</Button>
                <Button variant="secondary" onClick={deleteUser}>Delete</Button>
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
        {users}
      </tbody>
    </Table>

    <Modal show={show} onHide={handleClose}>
        <Modal.Body>{modalInfo}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
})

export default PageUsers;