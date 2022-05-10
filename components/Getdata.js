import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../auth/useUser'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import style from '../pages/register.module.css'
import { useRouter } from 'next/router'
const Getdata = () => {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Address, setAddress] = useState("");
    const [Sex, setSex] = useState("");
    const router = useRouter()
    const { user } = useUser()

    const sendData = () => {
        if (!Name || !Age || !Address || !Sex) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        } else {
            try {
                firebase
                    .firestore()
                    .collection('User')
                    .doc(user.id) // leave as .doc() for a random unique doc name to be assigned
                    .set({
                        Name: Name,
                        Sex: Sex,
                        Age: Age,
                        Address: Address
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



    return (
        <div className={style.container}>
            <div className={style.loginbox}>
                <label>
                    กรุณากรอกข้อมูล
                </label>
                <br></br>
                <div className={style.loginbox2}>
                    <input placeholder="Name" className={style.input} type="Text" id="Name" value={Name}
                        onChange={(e) => setName(e.target.value)} required="required" ></input>
                    <input placeholder="Age" className={style.input} type="number" id="Age" value={Age}
                        onChange={(e) => setAge(e.target.value)} required="required" ></input>
                    <input placeholder="Sex" className={style.input} type="Text" id="Sex" value={Sex}
                        onChange={(e) => setSex(e.target.value)} required="required" ></input>
                    <input placeholder="Address" className={style.input} type="Text" id="Address" value={Address}
                        onChange={(e) => setAddress(e.target.value)} required="required" ></input>
                </div>
                <div style={{ margin: '5px 0' }}>
                    <Button className={style.button} onClick={sendData} style={{ width: '100%' }}>บันทึกข้อมูล</Button>
                </div>
            </div>
        </div>
    )

}

export default Getdata