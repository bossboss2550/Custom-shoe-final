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
      .orderBy("Date", "desc")
      .where("Email", "==", user.email)
      .get()
      .then(querySnapshot => {
        const Data = []
        querySnapshot.forEach((doc, index) => {
          Data.push(doc.data())

        });
        setProfile(Data)
      }).catch((error) => {
        console.log(error)
      })

  }, [user])
  const handleExpandClick = () => {
    setExpanded(!expanded);

  };

  if (user && profile) {
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
            {profile.map((row, index) => (
              <TableRow
                key={`${row.Price}-${index}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.Type}
                </TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="center">{row.Price}</TableCell>
                <TableCell align="center">{row.Tracking}</TableCell>
                <TableCell align="center"><Check /></TableCell>
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
