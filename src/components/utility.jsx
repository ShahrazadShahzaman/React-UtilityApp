import { useState } from "react"
import "./utility.css";

const Utility =()=>{
    const [Text,setText ] = useState();
    const [Output,setOutput ] = useState();

const toUpperCase=()=>{
setOutput(Text.toUpperCase());
};
const toLowerCase=()=>{
    setOutput(Text.toLowerCase());
};
const toCapitalize=()=>{
    const words = Text.split("");
    const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    setOutput(capitalizedWords.join());
};
const Reset=()=>{
    setText("");
    setOutput("");   
};
    return (
        <div >
            <form className="text">
                <label className="heading" htmlFor="textarea">Text</label>
                <input id="textarea" name="text" placeholder="Enter the Text" value={Text} onChange={(e)=> setText(e.target.value)}></input>
            </form>
           <div className="btns">
            <button className="uppercase" onClick={toUpperCase}>UpperCase</button>
            <button className="lowercase" onClick={toLowerCase}>LowerCase</button>
            <button className="capital" onClick={toCapitalize}>Capitilize</button>
            <button className="reset" onClick={Reset}>Reset</button>
           </div>
          <div className="output">
            <h2>Output</h2>
            <p>{Output}</p>
          </div>
        </div>
    );
};
export default Utility;