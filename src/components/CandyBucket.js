import React, { useState } from "react";
import handleRandomCandy from "./handleRandomCandy";

function CandyBucket(){
    const [candies, setCandies] = useState([])
    function handleClick(){
        setCandies(candies.concat(handleRandomCandy()))
        
    }
console.log(candies)
    return (
        <div className="bucket-container" onClick={handleClick}>
            <img className="bucket" src="https://i.imgur.com/3ZwfAoM.png"></img>
            {candies.map(candy=><img className="candy" key={candy.id} src={candy.image}/>)}
        </div>
    )
}

export default CandyBucket