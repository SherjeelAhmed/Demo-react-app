// import React,{useState} from 'react';
// import './Room.css';

// function Room() {
//     // const state = useState(true);
//     // console.log("state = ",state);
//     // setting initial value by assigning to useState
//     let [isLit,setLit] = useState(true);
//     let [temp,settemp] = useState(0);
//     let [Celsius,Fahrenheit] = useState(temp);

//     function updateLit(){
//         console.log("button clicked");
//         setLit(!isLit);
//         // isLit = !isLit;
//     }

//     // ( C * 9/5 ) + 32 = F       C->F
//     function convert(){
//         var x = parseInt(temp,10);
//         var y = (x * (9/5)) + 32;
//         Fahrenheit(y); 
//     }
    
//     // function updateage(){
//     //     console.log("button clicked");
//     //     setage(++age);
//     // }

//     // Arrow function:
//     // const updateage = ()=>{
//     //     console.log("button clicked");
//     //     setage(++age);
//     // }

//     return (
//     // <div>This is room component lit = {JSON.stringify(isLit)}</div>
//     // if condition is true then lit else dark will be printed
//     <div className={`room ${isLit ? 'Lit': 'Dark'}`}> 
//         <strong>
//         The Room Is {isLit ? 'Lit' : 'Dark'}
//         </strong>
//         <br/>
//         <br/>
//         <button onClick={updateLit}><h3>Toggle Light</h3></button>    
//         <button onClick={()=>setLit(true)}><h3>Turn Light On</h3></button>
//         <button onClick={()=>setLit(false)}><h3>Turn Light Off</h3></button>
//         <br/>
//         <strong>Temperature = {temp} Celsius </strong>
//         <br/>
//         <button onClick={()=>{
//                                 // console.log("button clicked");
//                                 settemp(++temp);
//                               }
//                         }>
//                 <h3>Increase temp</h3>
//         </button>
//         <button onClick={()=>{settemp(--temp);}}>
//             <h3>decrease temp</h3>
//         </button>
//         <h5>Temperature = {Celsius} Fahrenheit</h5>
//         <button onClick={convert}><h3>C to F</h3></button>
//     </div>
//     );
// }

// export default Room;

import React,{useState} from 'react';
import './Room.css';

function Room() {
  
    let [isLit,setLit] = useState(true);
    let [temp,settemp] = useState(20);
    let [Celsius,Fahrenheit] = useState(temp);

    function updateLit(){
        setLit(!isLit);
    }

    function inctemp(){
        settemp(++temp);
    }

    function dectemp(){
        settemp(--temp);
    }

    function convert(){
        var x = parseInt(temp,10);
        var y = (x * (9/5)) + 32;
        Fahrenheit(y)
    }

    return (
    <div className={`room ${isLit ? 'Lit': 'Dark'}`}>
      <b>This Room Is {isLit ? 'Lit' : 'Dark'}</b>
      <br/>
      <button onClick={updateLit}><b><h3>Toggle Light</h3></b></button>
      <button onClick={()=>setLit(true)}><b><h3>Turn Light On</h3></b></button>
      <button onClick={()=>setLit(false)}><b><h3>Turn Light Off</h3></b></button>
      <br/>
      <b>Temperature = {temp} Celsius</b>
      <br/>
      <button onClick={inctemp}><b><h3>Inc temp</h3></b></button>
      <button onClick={dectemp}><b><h3>dec temp</h3></b></button>
      <br/>
      <b>Temperature = {Celsius} Fahrenheit</b>
      <br/>
      <button onClick={convert}><b><h3>Convert to Fahrenheit</h3></b></button>
    </div>
  );
}

export default Room;
