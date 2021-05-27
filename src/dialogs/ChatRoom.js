import React,{useState, useEffect} from 'react'
import Message from './components/Message';
import { Button, FormControl, Card,TextField, CardContent, Typography } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';
import db from '../conn';
import "./chatroom.css";

function ChatRoom(props) {

    const[input, setInput]=useState('');
    const[msg, setmsg]=useState([]);

    //fetch data
    useEffect(() => { 
        db.collection(props.pointer).orderBy('timestamp','desc').onSnapshot(snapshot=>{
          setmsg(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
        })
      }, [])
    //send data
    const sendmsg = (event)=>{
        event.preventDefault();
        db.collection(props.pointer).add({
          message: input, 
          color: props.clr,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
      }
    
    return (
        <Card className='maincardchat' variant="outlined">
            <CardContent>
                <div>
                <Typography variant="h5" style={{textAlign:"left", marginLeft:"10px", marginTop:"-10px"}} component="h2">
                    {props.pointer}
                    <Button
                        variant="contained"
                        onClick={props.clearclr}  
                        type='submit'
                        className="chngbtns"
                    >Change color</Button>
                    <Button
                        variant="contained"
                        onClick={props.clearpointer}  
                        type='submit'
                        className="chngbtns"
                    >Change Room</Button>
                </Typography>
                <br />
                </div>

            
                    <div className="chatsec">
                        <FlipMove>
                            {
                            msg.map((arg)=>(
                                <Message key={arg.id} colormsg={arg.data.color} colorusr={props.clr} cont={arg.data.message} />
                            ))
                            }
                        </FlipMove>
                    </div>
                    <form>
                        <FormControl>
                            <div className="sbmtfld">
                                <TextField 
                                    id="outlined-basic" 
                                    className="inputpointer" 
                                    value={input} 
                                    onChange={event=>setInput(event.target.value)}  
                                    label="Message" 
                                    variant="outlined"
                                    size="small" />
                                <Button
                                    variant="contained"
                                    onClick={sendmsg}  
                                    disabled={!input} 
                                    type='submit'
                                    className="submitbtn"
                                ><Send/></Button>
                            </div>
                        </FormControl>
                    </form>
            </CardContent>

        </Card>
    )
}

export default ChatRoom
