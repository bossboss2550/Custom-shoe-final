import style from './Nav.module.css'
import { useUser } from '../../auth/useUser';
import 'firebase/auth';
import Link from 'next/link'
import AccountMenu from './Accmenu';

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
            <nav className={style.Nav} >
                <div className={style.Logo} >
                    <Link href='/'><a>SHOP&CUSTOM</a></Link>
                </div>
                <div className={style.Logout} >
                    {/* <Link href='/'><a onClick={() => logout()}>LOGOUT</a></Link> */}
                    <AccountMenu/>
                </div>
            </nav>
        )
    }
}


export default Nav;
