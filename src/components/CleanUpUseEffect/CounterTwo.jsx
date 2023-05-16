import React, { useState, useEffect } from 'react'

function CounterTwo() {

    const [count, setCount] = useState(0)

    let updateCount = () => {
        setCount(count + 1)
        console.log("counter Two Updated");

    }
    useEffect(() => {
        let Interval;
        Interval = setInterval(updateCount, 1000)

        //   return () => {
        //    clearInterval(Interval)
        //   }
    })



    return (
        <div>
            <h1>CounterTwo</h1>
            <h3>{count}</h3>
        </div>
    )
}

export default CounterTwo





