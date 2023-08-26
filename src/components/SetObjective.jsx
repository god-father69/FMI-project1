import React,{useState} from 'react'
import CustomButton from "../assets/Custombutton";
import UploadButton from "../assets/UploadButton";
import MinusButton from "../assets/minusButton";
import './css/SetObjective.css'
import plusbtn from '../assets/plus.svg'
import minusbtn from '../assets/minus.svg'
import upload from '../assets/upload.svg'


function SetObjective() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if(count<=0){
            setCount(0);
        }
        else{
            setCount(count - 1);

        }
    };
    var formattedCount = (count >= 0 ? '' : '-') + Math.abs(count).toString().padStart(2, '0');

  return (
    <>
      <div className="objContainer">
        <div className="innercont">
            <div className="btnContainer">
                <div className="statusbtn">
                    <CustomButton txt="Activate" style={{width:"35vw" , margin:"10px" , fontSize: "20px"}}/>
                </div>
                <div className="statusbtn">
                    <CustomButton txt="Deactivate" style={{width:"35vw" , margin:"10px" , fontSize: "20px"}}/>

                </div>
            </div>
        </div>
        <div className="innercont">
            <div className="subincont objtext">
                <p> How many objectives would you like to set?</p>
            </div>
            <div className="subincont plusicon" onClick={increment}>
                <button className="plusbtn">
                    +
                </button>
                {/* <UploadButton backgroundImage={plusbtn}/> */}
            </div>
            <div className="subincont countericon ">
                <div className="counter">
                {formattedCount}
                </div>
            </div>
            <div className="subincont minusicon" onClick={decrement}>
                <button className="minusbtn">
                    -
                </button>
                {/* <MinusButton backgroundImage={upload}/> */}
                {/* <button style={{ backgroundImage: {plusbtn}}}></button> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default SetObjective
