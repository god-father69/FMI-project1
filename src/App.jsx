/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScavHuntLogin from './components/ScavHuntLogin'
import InstructorParent from './components/InstructorParent'
import ScavHuntMain from './components/ScavHuntMain'
import ScavHuntUpload from './components/ScavHuntUpload'
import ScavHuntNotes from './components/ScavHuntNotes'
import CustomButton from './assets/Custombutton'
import UploadButton from './assets/UploadButton'
import SetObjective from './components/SetObjective'
import ObjectiveBox1 from './components/progress/ObjectiveBox1'
import OverallProg from './components/progress/OverallProg'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScavHuntLogin />} />
          <Route index element={<ScavHuntLogin />} />
          <Route path="/home" element={<ScavHuntMain />} />
          <Route path="/upload" element={<ScavHuntUpload />} />
          <Route path="/notes" element={<ScavHuntNotes />} />
          <Route path="/progress" element={<OverallProg />} />
          <Route path="*" element={<ScavHuntLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App