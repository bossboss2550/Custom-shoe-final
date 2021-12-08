import styles from '../styles/Home.module.css'

import 'firebase/app'
import style from "./register.module.css";
import Shoemodel from '../components/shoesmodel';

export default function Show() {

    return (
        <div className={style.container2}>
            <div className={style.loginbox3}>
           <Shoemodel/>
        </div>
        </div>
      
    )

  }