import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdateButton from './UpdateButton';
import DeleteButton from './DestroyButton';

export default function StudentCRUD(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">serial number</TableCell>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">surname</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((row) => (
            <TableRow
              >
              <TableCell align="left">{row.serial_number}</TableCell>
              <TableCell align="left">{row.general_data.name}</TableCell>
              <TableCell align="left">{row.general_data.surname}</TableCell>
              <TableCell align="left">
                <UpdateButton></UpdateButton>
                <DeleteButton serial_number={row.serial_number}></DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}