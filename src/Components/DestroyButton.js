import React,{useEffect, useState} from 'react';
import { Button } from '@mui/material'
import Student from '../api/Student';
import constants from '../Static/constants';
import apiconstants from '../Static/apiconstants';

export default function DeleteButton(props)
{
    const DestroyStudent = () =>{
        Student[constants.destroy](props.serial_number, props.setStudents)
    }  

    return (
       <div>
        <Button variant="outlined" onClick={DestroyStudent} color='error'>Delete</Button>
       </div> 
    )

}