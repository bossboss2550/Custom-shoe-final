import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';
// import style from './Css/Nav.module.css';
import Getdata from '../components/Getdata';

const Private = () => {
  const { user, logout } = useUser();
  console.log(user)
  return (
    <div >
      <div col='5px'>{
        // user?.email &&
        // <div>
        //   <div>Email: {user.email}</div>
        //   <button onClick={() => logout()}>Logout</button>
          <Getdata/>
          
        // </div> 
      }</div>
    </div>
    
  )
    }


export default withAuth(Private);