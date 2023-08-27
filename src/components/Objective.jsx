import styles from './css/Objective.module.css'
import Upload from '../assets/upload.svg'
import Tick from '../assets/tick.svg'


// eslint-disable-next-line react/prop-types
function Objective({number, summary}) {

  return (
    <div className={styles.objective}> 
        <span className={styles.heading}>Objective {number}</span>
        <span className=''>{summary}</span>
        <textarea className={styles.objectiveTextarea}></textarea>
        <div className={styles.uploadContainer}>
            <div className={styles.uploadRow}>
                <input id={`file-upload${number}`} type='file' style={{display: "none"}} />
                <label htmlFor={`file-upload${number}`} >
                    <div className={styles.customButton}>
                        <img src = {Upload} alt="upload-logo"/>
                    </div>
                </label>
                <span>No assets uploaded</span>
            </div>
            <div className={styles.customButton}>
                <img src = {Tick} alt="tick-logo"/>
            </div>
        </div>
    </div>
  )
}

export default Objective;