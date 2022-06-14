import { useState } from "react";
import initFirebase from "../config";
import firebase from "firebase/app";
import 'firebase/auth';
import style from "../pages/register.module.css";
import Swal from "sweetalert2";


export default function Register() {
    initFirebase();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");




    return (

        <div className={style.container}>
            <div className={style.loginbox}>
                <label>
                    Register
                </label>
                <br></br>

                <input placeholder="Email" className={style.input} type="email" id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required="required" ></input>
                <br></br>
                <input placeholder="Password" className={style.input} type="password" id="pass" value={pass}
                    onChange={(e) => setPass(e.target.value)} required="required" ></input>
                <br />
                <button className={style.button}
                    onClick={

                        async () => {
                            if (!email || !pass) {
                                Swal.fire({
                                    title: "Error",
                                    text: "กรุณาใส่ Email และ Password",
                                    icon: "error",
                                    showCancelButton: false,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",

                                })
                            } else {
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "คุณต้องการสมัครด้วย  " + email + "  ใช่หรือไม่ ? ",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",

                                }).then(async (result) => {
                                    if (result.isConfirmed) {
                                        await firebase.auth().createUserWithEmailAndPassword(email, pass)
                                            .then(async () => {
                                                await Swal.fire({
                                                    title: "Save!",
                                                    text: "บัญชี " + email + "  ถูกบันทึกแล้ว !",
                                                    icon: "success",
                                                    timer: 2000,
                                                    showConfirmButton: false
                                                });
                                                window.location.href = "/private"
                                            })
                                    }
                                })
                                    .catch(function (error) {
                                        Swal.fire({
                                            title: "Error",
                                            text: "เกิดข้อผิดพลาดกรุณาใช้บัญชีอื่น",
                                            icon: "error",
                                            showCancelButton: false,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",

                                        })
                                    }
                                    )
                            }
                        }
                    }>Register</button>
            </div>
        </div>
    )
}