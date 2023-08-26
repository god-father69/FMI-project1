import { useState } from 'react'
import ScavHuntLogin from './components/ScavHuntLogin'
import InstructorParent from './components/InstructorParent'
import ScavHuntMain from './components/ScavHuntMain'
import ScavHuntUpload from './components/ScavHuntUpload'
import CustomButton from './assets/Custombutton'
import UploadButton from './assets/UploadButton'
import upload from './assets/upload.svg'
import ProgIndex from './components/progress/ProgIndex'
import ObjectiveBox from './components/progress/ObjectiveBox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <InstructorParent/> */}
    {/* <ScavHuntLogin/> */}
    {/* <ProgIndex/> */}
    {/* <ObjectiveBox/> */}
      {/* <CustomButton txt="LOGIN"/> */}
      {/* <UploadButton backgroundImage={upload}/> */}
      <ScavHuntLogin/>
      {/* <ScavHuntMain />   */}
      {/* <ScavHuntUpload /> */}
    </>
  )
}

export default App
