
import { FaBan } from 'react-icons/fa'
import Alert from './components/ui/Alert/Alert'
import { LuBellRing } from 'react-icons/lu'
import { GiNotebook } from 'react-icons/gi'
import { IoIosWarning } from 'react-icons/io'
import { FaDiagramSuccessor } from 'react-icons/fa6'

function App() {
  return (
    <>
      <Alert
        type={"alert-default"}
        icon={<LuBellRing size={20} />}
        title={"upgrade your plan"}
      >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <a href="/"> Cumque</a>, quisquam asperiores saepe quos aperiam possimus placeat veritatis expedita natus esse. </p>
      </Alert>
      {/* __________________------------------------__________________________-------------------- */}
      <Alert
        type={"alert-info"}
        icon={<GiNotebook size={20} />}
        title={"note"}
        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, quisquam asperiores saepe quos aperiam possimus placeat veritatis expedita natus esse."}
      ></Alert>
      {/* __________________------------------------__________________________-------------------- */}
      <Alert
        type={"alert-error"}
        icon={<FaBan size={20} />}
        title={"something went wrong"}
        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, quisquam asperiores saepe quos aperiam possimus placeat veritatis expedita natus esse."}
      >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. quisquam asperiores saepe quos aperiam possimus placeat veritatis<a href="/"> Cumque</a>,  expedita natus esse. quisquam asperiores saepe quos aperiam possimus placeat  </p>
      </Alert>
      {/* __________________------------------------__________________________-------------------- */}
      <Alert
        type={"alert-warning"}
        icon={<FaDiagramSuccessor size={20} />}
        title={"your order has been successed"}
        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, quisquam asperiores saepe quos aperiam possimus placeat veritatis expedita natus esse."}
      ></Alert>
      {/* __________________------------------------__________________________-------------------- */}
      <Alert
        type={"alert-success"}
        icon={<IoIosWarning size={20} />}
        title={"tips & tricks"}
        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, quisquam asperiores saepe quos aperiam possimus placeat veritatis expedita natus esse."}
      ></Alert>
      {/* __________________------------------------__________________________-------------------- */}

    </>
  )
}

export default App
