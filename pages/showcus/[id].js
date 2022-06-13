
import style from "../register.module.css"
import Custom from "../../components/ShowOrder";
import { useRouter } from "next/router";
const UserId = () => {
    const router = useRouter()
    const { id } = router.query
    return <>
        <div >
            <div>
                <Custom id={id} />
            </div>
        </div>
    </>
}
export default UserId