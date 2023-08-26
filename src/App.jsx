import { useState } from 'react'
import ScavHuntLogin from './components/ScavHuntLogin'
import InstructorParent from './components/InstructorParent'
import ScavHuntMain from './components/ScavHuntMain'
import ScavHuntUpload from './components/ScavHuntUpload'
import CustomButton from './assets/Custombutton'
import UploadButton from './assets/UploadButton'
import upload from './assets/upload.svg'
import SetObjective from './components/SetObjective'
import ObjectiveBox1 from './components/progress/ObjectiveBox1'
import OverallProg from './components/progress/OverallProg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <InstructorParent/> */}
      {/* <CustomButton txt="LOGIN"/> */}
      {/* <UploadButton backgroundImage={upload}/> */}
      {/* <ScavHuntLogin/> */}
      {/* <ScavHuntMain />   */}
      {/* <ScavHuntUpload /> */}
      {/* <ScavHuntLogin/> */}
      {/* <SetObjective/> */}
      {/* <ObjectiveBox1/> */}
      {/* <OverallProg/> */}
    </>
  )
}

export default App
