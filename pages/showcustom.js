import styles from '../styles/Home.module.css'

import 'firebase/app'
import style from "./register.module.css";
import Custome from '../components/Customshoe';
import Showcus from '../components/ShowOrder';

export default function Custom() {

    return (
        <div className={style.container2}>
            <div className={style.loginbox3}>
                <Showcus />
            </div>
        </div>
    )

}