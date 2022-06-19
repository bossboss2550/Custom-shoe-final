
import styles from '../styles/Home.module.css'
import GetData from '../components/Getdata'; ''
import Readdata from '../components/Readdata';
import { useUser } from '../auth/useUser'
import 'firebase/app'
import ProfileCard from '../components/Profilecard';
import style from "./register.module.css";
import Variants from '../components/Varient';
import Ordershow from '../components/Ordershow';
import Evaluateshow from '../components/Evaluate';

export default function Profile() {

    const { user, logout } = useUser()

    if (user) {
        if (user.email == "admin@admin.com") {
            return (
                < div >

                    <Evaluateshow />

                </div >

            )
        } else return (
            < div >
            </div >

        )

    } else return (
        <div></div>
    )

}