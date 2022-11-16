import React from 'react';
import { useState } from "react";

const Users=(props)=>{
    console.log(props)
    

   return(
    <tr>
        <td><input type={'checkbox'} checked={props.checkedInput} onChange={(event) => props.setCheckedCh(event.target.checked)} /></td>
        <td>{props.info.id}</td>
        <td>{props.info.name}</td>
        <td>{props.info.email}</td>
        <td>{props.info.createdAt}</td>
        <td>{props.info.updatedAt}</td>
        <td>Статус</td>
    </tr>
   )
}

export default Users;