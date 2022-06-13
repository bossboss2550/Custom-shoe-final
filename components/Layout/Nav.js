import style from './Nav.module.css'
import { useUser } from '../../auth/useUser';
import 'firebase/auth';
import Link from 'next/link'
import AccountMenu from './Accmenu';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

function Nav() {
    const { user, logout } = useUser();
    if (!user) {
        return (
            <div>
                <nav className={style.Nav} >
                    <div className={style.Logo} href="/">
                        <Link href='/'>
                            <a>SHOP&CUSTOM</a>
                        </Link></div>
                    <div className={style.Login}>
                        <Link href='/signin'>
                            <a>LOGIN</a>
                        </Link></div>
                </nav>
            </div>
        )
    } else if (user) {
        return (
            <div>
                <nav className={style.Nav} >
                    <div className={style.Logo} >
                        <Link href='/'><a>SHOP&CUSTOM</a></Link>
                    </div>
                    <div className={style.Logout} >
                        {/* <Link href='/'><a onClick={() => logout()}>LOGOUT</a></Link> */}
                        <AccountMenu />

                    </div>
                </nav>
            </div>
        )
    }
}


export default Nav;
