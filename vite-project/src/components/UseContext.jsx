import React from "react";
import { useContext } from "react";
import { useState} from "react"
import { ToggleTheme } from "../App";
import '../App.css';
export default function UseContext(){
  const theme = useContext(ToggleTheme);
  const [show, setShow] = useState(false);
  const [like,setLike]=useState(0)
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }
  const handleContext=()=>{
    alert("Context Button Clicked")
    setShow(!show)
  }
  return(
    <div style={themeStyle}>
        <div className="context">
            {show?<Content/>:null}
            <button onClick={handleContext}>context</button>
        </div>
        <div className="display">
            {like}
        </div>
        <button onClick={()=>setLike(like=>like+1)}>Like</button>
    </div>
  )
}
function Content(){
        return(
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages.
            </div>
        )
    
 }