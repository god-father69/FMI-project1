import styles from './css/ScavHuntUpload.module.css'
import Fingerprint from '../assets/fingerprint.svg'
import Question from '../assets/question.svg'
import Notes from '../assets/notes.svg'
import Upload from '../assets/upload.svg'
import Reload from '../assets/reload.svg'

function ScavHuntUpload() {
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
                    <div className={styles.customButton}>
                        <img src = {Notes} alt="notes-logo" />
                    </div>
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
            <input id="browse" type='file' style={{display: "none"}} />
            <label htmlFor="browse" >
                <div className={styles.browseButton}>
                    BROWSE
                </div>
            </label>
            <div className={styles.assetsBox}>
                Uploaded assets
            </div>
            <div className={styles.reloadButton} onClick={() => window.location.reload()}>
                <img src = {Reload} alt="reload-logo" className={styles.reloadButtonImg}/>
            </div>
        </div>
    </div>
  )
}

export default ScavHuntUpload