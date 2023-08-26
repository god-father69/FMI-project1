// import { useState } from 'react'
import Upload from '../assets/upload.svg'
import Tick from '../assets/tick.svg'


function Objective({number, summary}) {

  return (
    <div className='objective'> 
        <span className='heading'>Objective {number}</span>
        <span className=''>{summary}</span>
        <textarea className='objective-textarea'></textarea>
        <div className='upload-container'>
            <div className='upload-row'>
                <input id={`file-upload${number}`} type='file' style={{display: "none"}} />
                <label htmlFor={`file-upload${number}`} id='custom-file-upload'>
                    <div className='custom-button'>
                        <img src = {Upload} alt="upload-logo" className="upload"/>
                    </div>
                </label>
                <span>No assets uploaded</span>
            </div>
            <div className='custom-button'>
                <img src = {Tick} alt="tick-logo" className="tick"/>
            </div>
        </div>
    </div>
  )
}

export default Objective