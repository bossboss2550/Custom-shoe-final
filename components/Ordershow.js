import MultiActionAreaCard from '../components/ListuCus'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import shoeinfo from '../pages/api/shoedata';
import { useUser } from '../auth/useUser'
import 'firebase/storage'
import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import MultiActionAreaCard2 from './ListOrder';


export default function Ordershow() {

    const { user, logout } = useUser()
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        if (!user || !user.email) return;
        firebase
            .firestore()
            .collection("Model")
            .orderBy("OrderTime", "asc")
            .where("BuyStatus", "==", true)
            .get()
            .then(querySnapshot => {
                const Data = []
                querySnapshot.forEach((doc, index) => {
                    // console.log(index, doc.data())
                    Data.push({
                        ...doc.data(),
                        key: doc.id,
                    });
                });
                setProfile(Data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [user])
    const handleExpandClick = () => {
        setExpanded(!expanded);

    };


    if (user && profile) {
        const shoegridElements = profile.map((shoegrid, index) => {
            return <Grid item xs={3} key={shoegrid.key}>
                <MultiActionAreaCard2 shoegrid={shoegrid} />
            </Grid>

        })
        return (

            <div >
                <br />
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl" max>

                        <Box sx={{ bgcolor: '#FEF9EF', height: '0px' }} >
                            <Grid container spacing={3}>
                                {shoegridElements}
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>

            </div>

        )
    } else {
        return (

            <div >
            </div>

        )
    }



}