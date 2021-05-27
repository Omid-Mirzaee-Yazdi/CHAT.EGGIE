import React from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import ColorBtn from "./components/ColorBtn";
import "./color.css";

function Color(props) {

    //funcion to  compute random hex color code
    const randomclr=()=>{
        let result           = '#';
        const characters       = '2a90561b1c370d1480ef';
        const charactersLength = characters.length;
        for ( let i = 0; i < 6; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
            // Math.random returns a float between 0-1, floo(rmultiplied by length of charchacterset) returns a nuber between 0-length  
        }
        return result;
    }

    var btns = []; //to construct set of 8 clr ctn
    for (var i = 0; i < 8; i++) {
        btns.push(<ColorBtn key={i} sendclr={props.setstate} clr={randomclr()}/>);
    }

    
    return (
        <Card className='maincard clrslc' variant="outlined">
            <CardContent>
            <Typography variant="h5" component="h2">
                Pick your color
            </Typography>
            <Typography color="textSecondary">
                This will be your ONLY identifier!
                <br/>It's better to choose a light color
            </Typography>
                <br />
                {btns}
            </CardContent>
        </Card>

    )
}

export default Color