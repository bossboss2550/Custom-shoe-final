import styles from '../styles/Home.module.css'

import 'firebase/app'
import style from "./register.module.css";
import Custome from '../components/Customshoe';

export default function Custom() {

    return (
        <div className={style.container2}>
            <div className={style.loginbox3}>
                <Custome />
            </div>
        </div>

    )

}