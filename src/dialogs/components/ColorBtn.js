import React from 'react';
import "./clrbtn.css";
import {Button} from '@material-ui/core';

function ColorBtn(props) {
    return (
        <Button
        variant="contained"
        onClick={()=>props.sendclr(props.clr)}  
        className="colorbtn"
        style={{backgroundColor: props.clr}} 
        />
    );
}

export default ColorBtn;