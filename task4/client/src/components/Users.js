import React, {useState} from 'react';

const Users=(props)=>{  
    const  [chech, setChecked]=useState(false);

   return(
    <tr>
        <td><input type={'checkbox'} checked={props.checkedInput?true:chech}  onChange={(event)=>setChecked(event.target.checked)}/></td>
        <td>{props.info.id}</td>
        <td>{props.info.name}</td>
        <td>{props.info.email}</td>
        <td>{props.info.data_reg}</td>
        <td>{props.info.data_log}</td>
        <td>Статус</td>
    </tr>
   )
}

export default Users;