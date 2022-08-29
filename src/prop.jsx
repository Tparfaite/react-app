import react from "react";

const Props=(props)=>{

    const name=props.name;
    const color=props.color;

    return(
        <>
         <div>
            <h2>My name is {name}</h2>
            <p>My favourite color is {color}</p>
        </div>
        </>
       
    )
}

Props.defaultProps={
    name:"Parfaite",
    color:"darkgreen"
}

export default Props