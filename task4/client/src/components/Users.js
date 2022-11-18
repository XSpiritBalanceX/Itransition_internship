import React, {useState, useContext} from 'react';
import { Context } from "../index";

const Users=(props)=>{  
    const {user}=useContext(Context);
    const  [chech, setChecked]=useState(false);

   return(
    <tr>
        <td><input type={'checkbox'} checked={props.checkedInput?true:chech}  onChange={(event)=>{setChecked(event.target.checked); props.selectUserNow(props.info.id)}}/></td>
        <td>{props.info.id}</td>
        <td>{props.info.name}</td>
        <td>{props.info.email}</td>
        <td>{props.info.data_reg}</td>
        <td>{props.info.data_log}</td>
        <td>{user.isAuth?'Active':'Blocked'}</td>
    </tr>
   )
}

export default Users;