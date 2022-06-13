
import styles from '../styles/Home.module.css'
import GetData from '../components/Getdata'; ''
import Readdata from '../components/Readdata';
import { useUser } from '../auth/useUser'
import 'firebase/app'
import ProfileCard from '../components/Profilecard';
import style from "./register.module.css";
import Variants from '../components/Varient';
import Gridshoe from '../components/ShowuCus';
import Adminshow from '../components/Adminshow';

export default function Profile() {

  const { user, logout } = useUser()

  if (user) {
    if (user.email == "bossadmin1@mail.com") {
      return (
        < div >

          <Adminshow />

        </div >

      )
    } else return (
      < div >

        <Gridshoe />

      </div >

    )

  } else return (
    <div></div>
  )

}