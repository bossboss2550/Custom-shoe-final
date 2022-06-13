
import { useUser } from '../auth/useUser'
import 'firebase/app'
import Gridshoe from '../components/shoegrid';
import 'firebase/storage'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

export default function Index() {
  const { user, logout } = useUser()

  if (user) {

    return (
      <div >
        <Gridshoe />
      </div>

    )

  }

  else return (
    <>
      <main >
        <Gridshoe />
      </main>
    </>
  )
}