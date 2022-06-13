import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, createTheme, } from '@mui/material';
import { useRouter } from 'next/router';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import firebase from 'firebase';

export default function MultiActionAreaCard(props) {
    const { shoegrid } = props;
    const router = useRouter();
    function swapPage(id) {
        router.push({
            pathname: '/showcus/[id]',
            query: {
                id: id,
            }
        })
    }
    const theme = createTheme({
        typography: {
            button: {
                textTransform: "none"
            }
        }
    });

    const deleteImage = (id) => {
        Swal.fire({
            key: shoegrid.key,
            title: "Are you sure?",
            text: "คุณต้องการลบ  " + shoegrid.topic + "  ใช่หรือไม่ ? ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",

        }).then(async (result) => {
            if (result.isConfirmed) {
                await firebase.firestore()
                    .collection("Model")
                    .doc(id)
                    .delete()
                    .then(async () => {
                        await Swal.fire({
                            title: "Deleted!",
                            text: "รองเท้า " + shoegrid.topic + "  ถูกลบแล้ว",
                            icon: "success",
                            timer: 1000,
                            showConfirmButton: false
                        });
                        await window.location.reload();

                    });
            }
        });
    };
    return (

        <Card sx={{ maxWidth: 300 }} >
            <CardActionArea onClick={() => { swapPage(shoegrid.key) }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={shoegrid.urltexup}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {shoegrid.topic}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shoegrid.Type}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                {shoegrid.Email} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button size="small" color="error" theme={theme} onClick={() => { deleteImage(shoegrid.key) }}>
                    <DeleteIcon color="pink" />
                </Button>
            </CardActions>

        </Card>
    );
}