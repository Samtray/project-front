import React,{useEffect, useState} from 'react';
import { Button } from '@mui/material'

export default function DeleteButton(props)
{
    const DestroyStudent = () =>{
        alert(props.serial_number)
    }  

    return (
       <div>
        <Button variant="outlined" onClick={DestroyStudent} color='error'>Delete</Button>
       </div> 
    )

}