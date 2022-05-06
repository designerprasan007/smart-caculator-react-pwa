import React from 'react'
import './Operations.css'
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const Operations = ({handleOperation, handleNumbers, listening}) => {
  return (
    <>
        <div className='operationHeroDiv'>
            <button className='operatorBtn' onClick={handleOperation}>{listening ? <FaMicrophoneSlash /> : <FaMicrophone />} </button>
            <button className='operatorBtn' onClick={handleOperation}>CE</button>
            <button className='operatorBtn' onClick={handleOperation}>%</button>
            <button className='operatorBtn' onClick={handleOperation}>/</button>
        </div>
        <div className='operationHeroDiv'>
            <button className='operatorBtn' onClick={handleNumbers}>9</button>
            <button className='operatorBtn' onClick={handleNumbers}>8</button>
            <button className='operatorBtn' onClick={handleNumbers}>7</button>
            <button className='operatorBtn' onClick={handleOperation}>+</button>
        </div>
        <div className='operationHeroDiv'>
            <button className='operatorBtn' onClick={handleNumbers}>6</button>
            <button className='operatorBtn' onClick={handleNumbers}>5</button>
            <button className='operatorBtn' onClick={handleNumbers}>4</button>
            <button className='operatorBtn' onClick={handleOperation}>-</button>
        </div>
        <div className='operationHeroDiv'>
            <button className='operatorBtn' onClick={handleNumbers}>3</button>
            <button className='operatorBtn' onClick={handleNumbers}>2</button>
            <button className='operatorBtn' onClick={handleNumbers}>1</button>
            <button className='operatorBtn' onClick={handleOperation}>*</button>
        </div>
        <div className='operationHeroDiv'>
            <button className='operatorBtn' onClick={handleNumbers}>.</button>
            <button className='operatorBtn' onClick={handleNumbers}>0</button>
            <button className='operatorBtn' onClick={handleOperation}>AC</button>
            <button className='operatorBtn' onClick={handleOperation}>=</button>
        </div>
    </>
  )
}

export default Operations