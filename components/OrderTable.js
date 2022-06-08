import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Check from '@mui/icons-material/Check';
import Cancel from '@mui/icons-material/Close';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../auth/useUser'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import style from '../pages/register.module.css'
import { useRouter } from 'next/router'
import 'firebase/storage'



export default function OrderTable() {
  const { user, logout } = useUser()
  const paperstyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
  const [expanded, setExpanded] = React.useState(false);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (!user || !user.email) return;
    firebase
      .firestore()
      .collection('Order')
      .where("Email", "==", user.email)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          setProfile(doc.data())
        });
      }).catch((error) => {
        console.log(error)
      })


  }, [user])
  const handleExpandClick = () => {
    setExpanded(!expanded);

  };
  if (user && profile) {
    console.log(profile)
    function createData(type, email, price, track, status) {
      return { type, email, price, track, status };
    }
    const rows = [
      createData(profile.Type, profile.Email, profile.Price, profile.Tracking, <Check />),
    ];

    return (
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" >รุ่นสินค้า</TableCell>
              <TableCell align="center">อีเมล</TableCell>
              <TableCell align="center">ราคาสินค้า</TableCell>
              <TableCell align="center">หมายเลขการจัดส่ง</TableCell>
              <TableCell align="center">สถานะการชำระเงิน</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.type}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.track}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    );
  }
  else return (
    <>
      <main >
        {/* <GetData />
      <Readdata/> */}

      </main>
    </>
  )
}
