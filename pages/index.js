
import styles from '../styles/Home.module.css'
import GetData from '../components/Getdata'; ''
import Readdata from '../components/Readdata';
import { useUser } from '../auth/useUser'
import 'firebase/app'
export default function Index() {

  const { user, logout } = useUser()
  console.log(user)
  if (user) {
    
    return (
      <div className={styles.container}>
        
            <h3>{user.Name}</h3>
            <h3>{user.email}</h3>
            
            {/* <GetData /> */}
            <Readdata/>
            
            {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button onClick={() => logout()} style={{ width: '100px' }}>Log Out</button>
              
                <button variant="outline-secondary" style={{ width: '100px' }}>Code</button>
              
            </div> */}
         
      </div>
      
    )
    
  }

  else return (
  <>
  <main style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
    <h1></h1>
    {/* <GetData />
    <Readdata/> */}
    
  </main>
  </>
)
  }