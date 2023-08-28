import React,{useState} from 'react'
import ObjectiveBox from "./ObjectiveBox";
import "./css/renderObjBox.css"


function renderObjBox(props) {
    const items = [] 
    for(let i=0;i< props.count ; i++){
        items.push(<ObjectiveBox count={i+1}/>)
    }

  return (
    <>
    <div>
    {/* <hr style={{border : "1px solid  #fff" , margin : "20px" , position : "absolute" , left :"0" , right:"0" , top:"44vh" }}/> */}
    </div>
      <div className='setOfObjectiveBox'>
        <ul>{items}</ul>
      </div>
    </>
  )
}

export default renderObjBox
