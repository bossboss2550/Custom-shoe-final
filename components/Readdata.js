import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../auth/useUser'
import Button from 'react-bootstrap/Button'

const Readdata = () => {
    const { user } = useUser()
    const readData = () => {
        try {
            firebase
                .firestore()
                .collection('User')
                .doc(user.id)
                .onSnapshot(function (doc) {
                })
            // alert('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
        } catch (error) {
            console.log(error)
            alert(error)
        }

    }

    return (
        <div style={{
            margin: '5px 0',
            width: '90px'
        }}>
            <Button onClick={readData} style={{ width: '100%' }}>Read Data</Button>
        </div>
    )
}

export default Readdata