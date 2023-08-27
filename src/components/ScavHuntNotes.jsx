import { useState } from 'react'
import styles from './css/ScavHuntNotes.module.css'
import Fingerprint from '../assets/fingerprint.svg'
import Question from '../assets/question.svg'
import Notes from '../assets/notes.svg'
import Reload from '../assets/reload.svg'


function ScavHuntMain() {
    const [noteText, setNoteText] = useState('')

    const handleReload = () => {
        setNoteText('')
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
                    <div className={styles.customButton} style={{visibility: 'hidden'}}>
                        <img src = {Notes} alt="notes-logo" className={styles.customButtonImg} />
                    </div>
                    <div className={styles.customButton}>
                        <img src = {Question} alt="question-logo" className={styles.customButtonImg} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.mainBody}>
            <div className={styles.customButtonNotes} >
                <img src={Notes} alt="notes-logo" className={styles.notesImg} />
            </div>
            <span className={styles.heading}>Notes</span>
            <textarea className={styles.assetsBox}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            />
            <div className={styles.reloadButton} onClick={handleReload}>
                <img src = {Reload} alt="reload-logo" className={styles.reloadButtonImg}/>
            </div>
        </div>
    </div>
  )
}

export default ScavHuntMain