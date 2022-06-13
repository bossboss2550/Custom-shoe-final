import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../auth/useUser'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import style from '../pages/register.module.css'
import { useRouter } from 'next/router'
import Swal from "sweetalert2";

const Getdata = () => {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const router = useRouter()
    const { user } = useUser()
    const sendData = () => {
        if (!Name || !Age) {
            Swal.fire({
                title: "Error",
                text: "กรุณากรอกชื่อและอายุ",
                icon: "error",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
            })
        } else {
            try {
                firebase
                    .firestore()
                    .collection('User')
                    .doc(user.id) // leave as .doc() for a random unique doc name to be assigned
                    .set({
                        Name: Name,
                        Age: Age,
                    }
                    )
                    .then(async () => {
                        await Swal.fire({
                            title: "Save!",
                            text: " ข้อมูลของท่านถูกบันทึกแล้ว !",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false
                        })
                        router.push('/')
                    }
                    )
            } catch (error) {
                console.log(error)
                alert(error)
            }
        }
    }



    return (
        <div className={style.container}>
            <div className={style.loginbox}>
                <label>
                    กรุณากรอกข้อมูล
                </label>
                <br></br>

                <input placeholder="Name" className={style.input} type="Text" id="Name" value={Name}
                    onChange={(e) => setName(e.target.value)} required="required" ></input>
                <br />
                <input placeholder="Age" className={style.input} type="number" id="Age" value={Age}
                    onChange={(e) => setAge(e.target.value)} required="required" ></input>
                <br />

                <div style={{ margin: '5px 0' }}>
                    <Button className={style.button} onClick={sendData} style={{ width: '100%' }}>บันทึกข้อมูล</Button>
                </div>
            </div>
        </div>
    )

}

export default Getdata