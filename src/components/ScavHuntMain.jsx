import { Link } from 'react-router-dom'
import styles from './css/ScavHuntMain.module.css'
import Objective from './Objective'
import Fingerprint from '../assets/fingerprint.svg'
import Question from '../assets/question.svg'
import Notes from '../assets/notes.svg'

function ScavHuntMain() {
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
            <Objective 
                number='1'
                summary = 'This is objective one...'
            />

            <Objective
                number='2'
                summary = 'This is objective two...'
            />

            <Objective
                number='3'
                summary = 'This is objective three...'
            />
        </div>
    </div>
  )
}

export default ScavHuntMain