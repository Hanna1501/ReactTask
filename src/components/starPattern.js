import React from "react";
function StarPattern(props) {
    const{
        rows
    }=props;
    const pattern =[];
    for (let i = 1; i <= rows; i++) {
        const row=[];
        for (let j = 1; j <= i; j++) {
        //    document.write(j)
            row.push('* ')     
        }
        //console.log(row)
        pattern.push(row);
        //console.log(pattern)
     }
     return pattern.map((row, rowIndex)=>(
        <div key={rowIndex}>
            <span>{row}</span>
        </div>
            // {row.map((col, colIndex)=>(
            //     <span key={colIndex}>{col}</span>
            // ))}
     ));
};
export default StarPattern;