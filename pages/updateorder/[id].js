
import style from "../register.module.css"
import UpdateOrder from "../../components/UpdateOrder";
import { useRouter } from "next/router";
const UserId = () => {
    const router = useRouter()
    const { id } = router.query
    return <>
        <div >
            <div>
                <UpdateOrder id={id} />
            </div>
        </div>
    </>
}
export default UserId