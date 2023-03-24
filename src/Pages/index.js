import React, {useState, useEffect} from 'react';
import Student from '../api/Student';
import StudentCRUD from '../Components/StudentCRUD';
import constants from '../Static/constants';
import {Grid} from '@mui/material';
import StoreButton from './../Components/StoreButton';

export default function Index(){
  const [students, setStudents] = useState([]);

  useEffect(() => {
    Student[constants.index](setStudents);
  }, [])

  return(
    <Grid style={{marginTop: "20px"}} container spacing={2}>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={8}>
        <StudentCRUD students={students}></StudentCRUD>
      </Grid>
      <Grid item xs={2}>
        <StoreButton></StoreButton>
      </Grid>
    </Grid>
  );
}
