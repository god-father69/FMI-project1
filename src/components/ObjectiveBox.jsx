import React,{useState} from 'react'
import CustomButton from "../assets/Custombutton";
import tick from "../assets/tick.svg";
import './css/ObjectiveBox.css'


function ObjectiveBox(props) {
  const [text, setText] = useState("Initial text");
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSave = (event) => {
    // setText(event.target.value);
  };

  return (
    <>
      <div className="objectiveBoxCont">
        <div className="objHeading objectiveBoxInCont">
            <p className='objheadingtext'>Objective {props.count}</p>
        </div>
        <div className="objTextBox objectiveBoxInCont">
            {/* <textarea class="objtextboxArea"></textarea> */}
            {isEditing ? (
            <textarea
              className="objtextboxarea"
              value={text}
              onChange={handleChange}
            />
            ) : (
              <div className="objtextboxpreview">{text}</div>
          )}
        </div>
        <div className="objBtns objectiveBoxInCont">
              <div className="objbtn" onClick={handleEdit}>
                <CustomButton txt="EDIT" style={{width:"20vw" , margin:"10px" , fontSize: "20px"}}/>
              </div>
              <div className="objbtn" onClick={handleDelete}>
                <CustomButton txt="DELETE" style={{width:"20vw" , margin:"10px" , fontSize: "20px"}}/>

              </div>
              <div className="savebtnCont" onClick={handleSave}>
                {/* <CustomButton txt="DELETE" /> */}
                <button className="savebtn ">
                <img src={tick} alt="" style={{position:"absolute", top:"10px"}}></img>
                </button>

              </div>
        </div>
      </div>
    </>
  )
}

export default ObjectiveBox
