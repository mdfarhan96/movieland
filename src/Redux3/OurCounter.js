import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import{decrease,increase} from "./actions/counterAction"

const OurCounter = () => {

    const myState= useSelector{state=state.handleMyCounter}
    const dispatch= useDispatch()
  return ( 
    <div>
        <p> number: {myState}</p>
        <button onClick={()=>dispatch(increase)}>increse</button>
       <button onClick={()=>dispatch(decrease)}>decrease</button>
    </div>
  )
}

export default OurCounter