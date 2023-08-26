import './css/ScavHuntMain.css'
import Objective from './Objective'
import Fingerprint from '../assets/fingerprint.svg'
import Question from '../assets/question.svg'
import Notes from '../assets/notes.svg'

function ScavHuntMain() {
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