
import styles from '../styles/Home.module.css'
import GetData from '../components/Getdata'; ''
import Readdata from '../components/Readdata';
import { useUser } from '../auth/useUser'
import 'firebase/app'
import MultiActionAreaCard from '../components/shoelist'
import Gridshoe from '../components/shoegrid';
import {useRouter} from 'next/router';
import Link from 'next/link'
import shoeinfo from './api/shoedata';

export default function Index() {
  const { user, logout } = useUser()
  console.log(user)

 

  if (user) {
    
    return (
      <div >
         <Gridshoe/>
            {/* <h3>{user.Name}</h3>
            <h3>{user.email}</h3> */}
            {/* <GetData /> */}
            {/* <Readdata/> */}
            
         
      </div>
      
    )
    
  }

  else return (
  <>
  <main >
  <Gridshoe/>
    {/* <GetData />
    <Readdata/> */}
    
  </main>
  </>
)
  }