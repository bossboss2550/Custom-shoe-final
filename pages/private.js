import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';
// import style from './Css/Nav.module.css';
import Getdata from '../components/Getdata';

const Private = () => {
  const { user, logout } = useUser();

  return (
    <div >
      <div col='5px'>{

        <Getdata />

      }</div>
    </div>

  )
}


export default withAuth(Private);