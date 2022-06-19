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

export default function MultiActionAreaCard2(props) {
    const { shoegrid } = props;
    const router = useRouter();
    function swapPage(id) {
        router.push({
            pathname: '/updateorder/[id]',
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
    const CheckTrack = () => {
        Swal.fire('Tracking Is  ', shoegrid.Tracking)
    }
    if (shoegrid.Status == 1) {
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
                            เวลาที่สั่ง {shoegrid.OrderTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <h4>สถานะ : รอตรวจสอบยอดโอน</h4>
                </CardActions>

            </Card>
        );
    } else if (shoegrid.Status == 2) {
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
                            เวลาที่สั่ง {shoegrid.OrderTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <h4>สถานะ : กำลังจัดทำสินค้า</h4>
                </CardActions>

            </Card>
        );
    } else if (shoegrid.Status == 3) {
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
                            เวลาที่สั่ง {shoegrid.OrderTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <h4>สถานะ : เตรียมจัดส่งสินค้า</h4>
                </CardActions>

            </Card>
        );
    } else if (shoegrid.Status == 4) {
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
                            เวลาที่สั่ง {shoegrid.OrderTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>


                    <div>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;<Button onClick={CheckTrack} variant="contained" color="success">
                        จัดส่งสินค้าเรียบร้อยแล้ว
                    </Button> </div>
                </CardActions>

            </Card>
        );
    } else if (shoegrid.Status == 5) {
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
                            เวลาที่สั่ง {shoegrid.OrderTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    &nbsp; &nbsp; &nbsp;&nbsp;<Button variant="contained" href="https://www.messenger.com/t/106916272054944" target="_blank" color="error">
                        ข้อมูลผิดพลาดกรุณาติดต่อร้านค้า
                    </Button>

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
                            เวลาที่สั่ง {shoegrid.OrderTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary" theme={theme} onClick={() => { swapBuy(shoegrid.key) }}>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <ShoppingCartIcon /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </Button>
                    <Button size="small" color="error" theme={theme} onClick={() => { deleteImage(shoegrid.key) }}>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<DeleteIcon />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </Button>
                </CardActions>

            </Card>
        );
    }

}