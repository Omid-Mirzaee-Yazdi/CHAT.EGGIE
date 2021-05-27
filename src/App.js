import React, {useState} from 'react';
import './App.css';
import Pointer from './dialogs/pointer';
import Color from './dialogs/color';
import ChatRoom from './dialogs/ChatRoom';


function App() {
  //states
  const[clr,setclr]=useState('');
  const[pointer,setpointer]=useState('');
  
  //methods
  let currdialog=null; //dialog to show
  
  // show pointer dialog
  if(pointer===""){
    currdialog=(
      <Pointer setstate={(pointerchosen)=>setpointer(pointerchosen)}/>
    );
  }
  //color picking dialog
  else if(clr===""){
    currdialog=(
      <Color pointer={pointer} setstate={(colorchosen)=>setclr(colorchosen)}/>
    );
  }
  // all set, show chatroom 
  else if(pointer!=="" && clr!==""){
    currdialog=(
      <ChatRoom clearclr={()=>setclr("")} clearpointer={()=>setpointer("")} pointer={pointer} clr={clr}/>
    );
  }
  //something is wrong but I dont know what and why!
  else{
    currdialog=(
      <div>
        <h1>security issue detected</h1>
        <h3>please close the window</h3>
      </div>
    )
  }

// return current dialog that's set before
  return (
    <div className="App">
        {currdialog}
    </div>
  );
}
export default App;