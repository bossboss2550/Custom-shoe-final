import { useState } from "react";
import initFirebase from "../config";
import firebase from "firebase/app";
import 'firebase/auth';
import style from "./register.module.css";

export default function Login() {
    initFirebase();
    const[email , setEmail] = useState("");
    const[pass, setPass] = useState("");
    
    
    

    return(
        
        <div className={style.container}>
            <div className={style.loginbox}>
            <label>
                Register
            </label>
            <br></br>
            <div className={style.loginbox2}>
            <input placeholder="Email" className={style.input} type="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)} required="required" ></input>
             <br></br>
            <input placeholder="Password"  className={style.input} type="password" id="pass" value={pass}
            onChange={(e) => setPass(e.target.value)} required="required" ></input>
            </div>
            <button className={style.button} 
            onClick = {
                
                async () => {
                    if(!email || !pass) {
                        alert ('คุณยังไม่ได้กรอก Email หรือ Password')
                    } else {
                        await firebase.auth().createUserWithEmailAndPassword(email,pass)
                        .then(function() {
                            // alert("สร้างบัญชีเสร็จสิ้น !!")
                            window.location.href ="/private"
                        }).catch(function(error) {
                            alert("บัญชีนี้ถูกใช้ไปแล้วกรุณาเปลี่ยน Email !!") 
                        } 
                        )
                    }
                }
            }>Register</button>
        </div>
        </div>
    )
}