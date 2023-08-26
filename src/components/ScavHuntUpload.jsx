import './css/ScavHuntUpload.css'
import Fingerprint from '../assets/fingerprint.svg'
import Question from '../assets/question.svg'
import Notes from '../assets/notes.svg'
import Upload from '../assets/upload.svg'
import Reload from '../assets/reload.svg'

function ScavHuntUpload({summary}) {
  return (
    <div className="main-container">
        <div className="main-header">
            <div className="main-header-left">
                <img src={Fingerprint} alt="fingerprint-logo" className="fingerprint"/>
            </div>
            <div className="main-header-right">
                <div className='main-header-right-top'>
                    <p>TEAM 01</p>
                </div>
                <div className='main-header-right-bottom'>
                    <div className='custom-button notes-button'>
                        <img src = {Notes} alt="notes-logo" className="notes"/>
                    </div>
                    <div className='custom-button question-button'>
                        <img src = {Question} alt="question-logo" className="question"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-body">
            <div className='upload-logo'>
                <img src = {Upload} alt="upload-logo" className="upload"/>  
            </div>
            <span>Upload an asset for objective one. </span>
            <input id="browse" type='file' style={{display: "none"}} />
            <label htmlFor="browse" id='custom-file-upload'>
                <div className='browse-button'>
                    BROWSE
                </div>
            </label>
            <div className='assets-box'>
                Uploaded assets
            </div>
            <div className='custom-button reload-button'>
                <img src = {Reload} alt="reload-logo" className="reload"/>
            </div>
        </div>
    </div>
  )
}

export default ScavHuntUpload