import React from "react";
import { useState, useEffect } from "react";

const Countdown = ({duration}) =>{
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    return (
        <div style={{color: "#000000ff"}}>{time}</div>
    )
}

export default Countdown