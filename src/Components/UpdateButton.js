import React,{useEffect, useState} from 'react';
import { Button } from '@mui/material'

export default function UpdateButton(props)
{
    const UpdateStudent = () =>{
        
    }  

    return (
       <div>
        <Button variant="outlined" onClick={props.handleClickOpen} color='success'>Update</Button>
       </div> 
    )

}