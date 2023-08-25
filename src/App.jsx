import { useState } from 'react'
import ScavHuntLogin from './components/ScavHuntLogin'
import CustomButton from './assets/Custombutton'
import UploadButton from './assets/UploadButton'
import upload from './assets/upload.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CustomButton txt="LOGIN"/> */}
      {/* <UploadButton backgroundImage={upload}/> */}
      <ScavHuntLogin/>
    </>
  )
}

export default App
