
import React, { useState } from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'

function Parent() {
  

  const [stop, setStop] = useState(false)
console.log("parent redered");
  return (
    <div>
      {stop ? <CounterTwo /> : <CounterOne />}
      {/* {stop && <CounterTwo /> }
      {!stop && <CounterOne /> } */}

      <button onClick={() => (setStop(!stop))} >{stop ? "counter One" : "counter Two"}</button>
    </div>
  )
}

export default Parent
























