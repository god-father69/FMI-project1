import React,{useState} from 'react'
import ObjectiveBox from "./ObjectiveBox";
import "./css/renderObjBox.css"


function renderObjBox(props) {
    const items = [] 
    for(let i=0;i< props.count ; i++){
        items.push(<ObjectiveBox/>)
    }

  return (
    <>
      <div className='setOfObjectiveBox'>
        <ul>{items}</ul>
      </div>
    </>
  )
}

export default renderObjBox
