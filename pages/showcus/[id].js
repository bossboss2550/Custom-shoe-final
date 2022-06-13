
import style from "../register.module.css"
import Custom from "../../components/ShowOrder";
import { useRouter } from "next/router";
const UserId = () => {
    const router = useRouter()
    const { id } = router.query
    return <>
        <div className={style.container2}>
            <div className={style.loginbox3}>
                <Custom id={id} />
            </div>
        </div>
    </>
}
export default UserId