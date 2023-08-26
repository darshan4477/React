import React, { useEffect, useState } from "react";

export default function Effect(){
    const [count , setCount] = useState(0);
    const [b,setB]=useState(0);
    useEffect(()=>{
        console.log("Khushal");
    },[count])
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <h1>{b}</h1>
        <button onClick={()=>{setB(b+1)}}>Increase B</button>
        </>
    );
}