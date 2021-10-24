
import styles from '../styles/Home.module.css'
import GetData from '../components/Getdata'; ''
import Readdata from '../components/Readdata';
import { useUser } from '../auth/useUser'
import 'firebase/app'
import ProfileCard from '../components/Profilecard';
import style from "./register.module.css";
import Variants from '../components/Varient';
export default function Profile() {

  const { user, logout } = useUser()
  console.log(user)
  if (user) {
    
    return (
        <div className={style.containerpro}>
          
        <ProfileCard/>
         
      </div>
      
    )
    
  }

  else return (
  <>
  <main className={style.containerpro}>
    
    <Variants/>
  </main>
  </>
)
  }