import React, { useState } from 'react'
import './Modal.css';

const Modal = ({categoryId ,onClose,onSave}) => {
const [widgetName ,setWidgetName] =useState("");
const [widgetText ,setwidgetText] =useState("");

    console.log(categoryId,'modal')
       const addWidget =()=>{
        onSave(categoryId,{name: widgetName,text:widgetText})
        onClose();
       }

  return (
    <div className='modal'>
    <div className='modal-content'>
        <div className=" modal-header">
    <h1>Add Widget</h1>
    </div>
    <div className="modal-body">
    <input type='text'   placeholder="Widget Name"    value={widgetName}  onChange={ (e)=>setWidgetName(e.target.value)}/>
    <textarea      placeholder="Widget Text"     value={widgetText}   onChange={(e)=>setwidgetText(e.target.value)}/>
    <div className="modal-footer">
    <button   onClick={addWidget}>Save</button>
    <button  onClick={onClose}>cancel</button>
    </div>
    </div>

    </div>


    </div>
  )
}

export default Modal