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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PaidIcon from '@mui/icons-material/Paid';

export default function MultiActionAreaCard(props) {
    var today = new Date()
    var minutes = today.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    var sec = today.getSeconds()
    sec = sec > 9 ? sec : '0' + sec;

    var time = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '  ' + today.getHours() + ':' + minutes + ':' + sec;
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
    function swapBuy(id) {
        router.push({
            pathname: '/buyorder/[id]',
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

    const Evaluate = (id) => {
        Swal.fire({
            key: shoegrid.key,
            title: 'Multiple inputs',
            html:
                "Price" + '<input id="swal-input1" class="swal2-input">' + "&nbsp; &nbsp; &nbsp;" +
                "Time" + '<input id="swal-input2" class="swal2-input">'
            ,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                await firebase.firestore()
                    .collection("Model")
                    .doc(id)
                    .update({
                        Status: 7,
                        EvaluateStatus: false,
                        Price: document.getElementById('swal-input1').value,
                        Day: document.getElementById('swal-input2').value
                    }
                    )
                    .then(async () => {
                        await Swal.fire({
                            title: "Evaluate!",
                            text: "ประเมินราคา " + shoegrid.topic + "  เรียบร้อยแล้ว",
                            icon: "success",
                            timer: 1000,
                            showConfirmButton: false
                        });
                        await window.location.reload();

                    });
            }
        });
    };

    const CheckTrack = () => {
        Swal.fire('Tracking Is  ', shoegrid.Tracking)
    }
    if (shoegrid.EvaluateStatus == true) {
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
                            {shoegrid.Type} <br /><br />
                            {shoegrid.Email}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                        <Button onClick={() => { Evaluate(shoegrid.key) }} variant="contained" color="warning">
                            ประเมินราคา
                        </Button> </div>
                </CardActions>

            </Card>
        );
    }
    else {
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
                            {shoegrid.Type} <br /><br />
                            {shoegrid.Email}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="warning" theme={theme} onClick={() => { Evaluate(shoegrid.key) }}>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <PaidIcon /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </Button>
                    <Button size="small" color="error" theme={theme} onClick={() => { deleteImage(shoegrid.key) }}>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<DeleteIcon />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </Button>
                </CardActions>

            </Card>
        );
    }

}