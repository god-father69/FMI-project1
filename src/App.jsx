import { useState } from 'react'
import ScavHuntLogin from './components/ScavHuntLogin'
import ScavHuntMain from './components/ScavHuntMain'
import ScavHuntUpload from './components/ScavHuntUpload'
import CustomButton from './assets/Custombutton'
import UploadButton from './assets/UploadButton'
import upload from './assets/upload.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CustomButton txt="LOGIN"/> */}
      {/* <UploadButton backgroundImage={upload}/> */}
      {/* <ScavHuntLogin/> */}
      {/* <ScavHuntMain />   */}
      <ScavHuntUpload />
    </>
  )
}

export default App
