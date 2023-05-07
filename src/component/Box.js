import React from 'react'
import { useState } from 'react'

const Box = () => {
    const [plus,setPlus] = useState(0);
    const Sum = () => {
        setPlus(plus + 1);
    }

  return (
    <div className='Box'>
        <div>Box:{plus}</div>
        <br/>
        <button onClick={Sum}>클릭 + </button>
    </div>
  )
}

export default Box