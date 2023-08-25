import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScavHuntLogin from './components/ScavHuntLogin'
import CustomButton from './assets/Custombutton'
import UploadButton from './assets/UploadButton'
import upload from './assets/upload.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CustomButton txt="LOGIN"/> */}
      <UploadButton backgroundImage={upload}/>
    </>
  )
}

export default App
