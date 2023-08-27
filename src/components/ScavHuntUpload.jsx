import { useState } from 'react'
import styles from './css/ScavHuntUpload.module.css'
import Fingerprint from '../assets/fingerprint.svg'
import Question from '../assets/question.svg'
import Notes from '../assets/notes.svg'
import Upload from '../assets/upload.svg'
import Reload from '../assets/reload.svg'
import { Link } from 'react-router-dom'


function ScavHuntUpload() {
    const [files, setFiles] = useState([])
    const [fileNames, setFileNames] = useState([])  

    const handleReload = () => {
        setFileNames([]);
    }

    const handleUpload = (e) => {
        const files = e.target.files
        setFiles(files)
        const fileNames = []
        for (let i = 0; i < files.length; i++) {
            const fileName = files[i].name.split('.')[0]
            fileNames.push(<div style={{background:"#F3F3F3"}}>{fileName}</div>)
        }
        setFileNames(fileNames)
    }

  return (
    <div className={styles.mainContainer}>
        <div className={styles.mainHeader}>
            <div className={styles.mainHeaderLeft}>
                <img src={Fingerprint} alt="fingerprint-logo" className={styles.fingerprint} />
            </div>
            <div className={styles.mainHeaderRight}>
                <div className={styles.mainHeaderRightTop}>
                    <p>TEAM 01</p>
                </div>
                <div className={styles.mainHeaderRightBottom}>
                    <Link to="/notes" >
                        <div className={styles.customButton}>
                            <img src = {Notes} alt="notes-logo" />
                        </div>
                    </Link>
                    <div className={styles.customButton}>
                        <img src = {Question} alt="question-logo" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.mainBody}>
            <div className={styles.uploadLogo}>
                <img src = {Upload} alt="upload-logo" />  
            </div>
            <span>Upload an asset for objective one. </span>
            <input id="browse" type='file' multiple accept='application/pdf, image/png' style={{display: "none"}} onChange={handleUpload} />
            <label htmlFor="browse" >
                <div className={styles.browseButton}>
                    BROWSE
                </div>
            </label>
            <div className={styles.assetsBox}>
                Uploaded assets
                <div style={{display:"flex", flexDirection: "column"}}>
                    {  
                        fileNames
                    }
                </div>
            </div>
            <div className={styles.reloadButton} onClick={handleReload}>
                <img src = {Reload} alt="reload-logo" className={styles.reloadButtonImg}/>
            </div>
        </div>
    </div>
  )
}

export default ScavHuntUpload