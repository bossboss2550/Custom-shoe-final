import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Check from '@mui/icons-material/Check';
import Cancel  from '@mui/icons-material/Close';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('NIKE AIR FORCE1', 15523, "2,500","กำลังเตรียมพัสดุ",<Check/>),
  createData('NIKE AIR JORDAN', 12123, "4,500","-",<Cancel/>),
  createData('CONVERS ALL STAR', 10235, "3,500","TH05715456412",<Check/>),
  createData('VAN OLD SCHOOL', 2535, "4,000","TH05491912316",<Check/>),
  createData('CONVERS ALL STAR2', 2535, "4,300","-",<Cancel/>),
];

export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>รุ่นสินค้า</TableCell>
            <TableCell align="right">รหัสสินค้า</TableCell>
            <TableCell align="right">ราคาสินค้า</TableCell>
            <TableCell align="right">หมายเลขการจัดส่ง</TableCell>
            <TableCell align="right">สถานะการชำระเงิน</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
