import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StudentCRUD(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">serial number</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">surname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((row) => (
            <TableRow
              >
              <TableCell align="right">{row.serial_number}</TableCell>
              <TableCell align="right">{row.general_data.name}</TableCell>
              <TableCell align="right">{row.general_data.surname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}