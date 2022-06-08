import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../auth/useUser'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import style from '../pages/register.module.css'
import { useRouter } from 'next/router'
import 'firebase/storage'


const GetBill = () => {

    const router = useRouter()
    const { user } = useUser()
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const handleUpload = () => {
        const uploadTask = firebase.storage().ref(`Bills/${image.name}`).put(image);
        uploadTask.on(
            "state_change",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                firebase
                    .storage()
                    .ref("Bills")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        setUrl(url)
                    })
            }
        )
    };

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    console.log("image: ", image)

    const sendData = () => {
        if (!url) {
            alert('กรุณาอัพโหลดใบเสร็จเพื่อยืนยัน Order')
        } else {
            try {
                firebase
                    .firestore()
                    .collection('Order')
                    .doc() // leave as .doc() for a random unique doc name to be assigned
                    .set({
                        uid: user.id,
                        Email: user.email,
                        Type: "NIKE AIR FORCE1",
                        Price: 3000,
                        Bill: url,
                        Tracking: "-"
                    }
                    )
                    .then(alert('บันทึกข้อมูลเรียบร้อย'),
                        router.push('/')

                    )
            } catch (error) {
                console.log(error)
                alert(error)
            }
        }
    }


    if (user) {
        console.log(user)
        return (
            <div >
                <input type='file' onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>

                <img src={url} />
                <Button className={style.button} onClick={sendData} style={{ width: '100%' }}>บันทึกข้อมูล</Button>
            </div>

        )

    }

    else return (
        <>

            <main >

            </main>
        </>
    )
}
export default GetBill