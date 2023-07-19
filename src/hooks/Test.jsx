import React from 'react'
import { testThunk,testThunk1 } from '../store/testSlice'
import { useDispatch ,useSelector} from 'react-redux'
const Test = () => {
  const num=useSelector((state)=>state.testSlice.num)
    const dispatch=useDispatch(8)

    function send(){
        dispatch(testThunk(2))
    }
    function send1(){
      dispatch(testThunk1(7))
  }
  return (
    <div>
        <button onClick={send}>call thunk</button><br />
        <button onClick={send1}>call thunk1111</button>
    </div>

  )
}

export default Test