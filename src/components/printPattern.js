import React, { useState } from "react";
import NumberPattern from './numberPattern';
import StarPattern from "./starPattern";
import './printPattern.css';

function PrintPattern() {
    const [rows, setRows]=useState();
    const inputChange=(evt)=>{
        const inputValue=evt.target.value;
        setRows(isNaN(inputValue)?0:inputValue);
    };
    return(
        <div> 
            <div>
                <label>Number of Rows</label>
                <input type="text" value={rows} onChange={inputChange}/>
            </div>  
            <div className="pattern">
                <NumberPattern rows={rows}/>
            </div>
            <div className="pattern">    
                <StarPattern rows={rows}/>
            </div> 
        </div>
    ) 
};
export default PrintPattern;

