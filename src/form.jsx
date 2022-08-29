import react, { useEffect, useState } from "react";

const Form=()=>{
const[count,setCount]=useState(4);
function decrement(){
    setCount(prevCount=>prevCount -4)
}
function increment(){
setCount(prevCount=>prevCount +1)
}
useEffect(()=>{
    setTimeout(()=>{
        setCount(prevCount=>prevCount +1)
    },1000)
},[])
    return(
        <>

        <form action="">
            <input type="text" placeholder="name"></input>
        </form>

      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
        </>
    )


}
export default Form





