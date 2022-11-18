import React, {useState} from 'react';


const Users=(props)=>{ 
    const  [chech, setChecked]=useState(false);
    
   return(
    <tr>
        <td><input type={'checkbox'} id={props.info.id}  checked={props.checkedInput?true:chech}  
           onChange={(event)=>{setChecked(event.target.checked); 
           props.selectUserNow(event.target.id, event.target.checked);}}/></td>
        <td>{props.info.id}</td>
        <td>{props.info.name}</td>
        <td>{props.info.email}</td>
        <td>{props.info.data_reg}</td>
        <td>{props.info.data_log}</td>
        <td>{props.activuser==props.info.id?'Active':props.blocked?'Blocked':'Inactive'}</td>
    </tr>
   )
}

export default Users;