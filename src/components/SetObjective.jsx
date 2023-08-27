import React,{useState} from 'react'
import CustomButton from "../assets/Custombutton";
import UploadButton from "../assets/UploadButton";
import MinusButton from "../assets/minusButton";
import './css/SetObjective.css'
import plusbtn from '../assets/plus.svg'
import minusbtn from '../assets/minus.svg'
import upload from '../assets/upload.svg'
import ObjectiveBox from "./ObjectiveBox";
import RenderObjBox from "./renderObjBox"


function SetObjective(props) {
    const {setobjCount,objCount}=props;
    const [count, setCount] = useState(objCount);
    const increment = () => {
        setCount(count + 1);
        setobjCount(count + 1);
    };

    const decrement = () => {
        if(count<=0){
            setCount(0);
            setobjCount(0);
        }
        else{
            setCount(count - 1);
            setobjCount(count - 1);

        }
    };
    var formattedCount = (count >= 0 ? '' : '-') + Math.abs(count).toString().padStart(2, '0');

  return (
    <>
    {/* <hr style={{border : "1.5px solid  #fff" , margin : "20px" , position : "absolute" , left :"0" , right:"0" , top:"18vh" }}/> */}
      <div className="objContainer">
        <div className="innercont1">
            <div className="btnContainer">
                <div className="statusbtn">
                    <CustomButton txt="Activate" style={{width:"30vw" , margin:"10px" , fontSize: "20px"}}/>
                </div>
                <div className="statusbtn">
                    <CustomButton txt="Deactivate" style={{width:"30vw" , margin:"10px" , fontSize: "20px"}}/>

                </div>
            </div>
        
        <div className="innercont">
            <div className="subincont objtext">
                <p> How many objectives would you like to set?</p>
            </div>
            <div className="subincont plusicon" onClick={increment}>
                <button className="plusbtn" style={{color:"white"}}>
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
                <button className="minusbtn" style={{color:"white"}}>
                    -
                </button>
                {/* <MinusButton backgroundImage={upload}/> */}
                {/* <button style={{ backgroundImage: {plusbtn}}}></button> */}
            </div>
            
        </div>
        </div>

      </div>
      <RenderObjBox count = {count}/>
     

    </>
  )
}

export default SetObjective
