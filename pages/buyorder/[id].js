
import style from "../register.module.css"
import BuyOrder from "../../components/Order";
import { useRouter } from "next/router";
const UserIdbuy = () => {
    const router = useRouter()
    const { id } = router.query
    return <>
        <div >
            <div>
                <BuyOrder id={id} />
            </div>
        </div>
    </>
}
export default UserIdbuy