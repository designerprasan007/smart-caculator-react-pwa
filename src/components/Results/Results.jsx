import React from 'react'
import './Results.css'
const Results = ({typedNum, result}) => {
  return (
    <div className='heroResultDiv'>
        <div className='subHeroResult'>
            <h1>{typedNum}</h1>
            <h1>{result}</h1>
        </div>
    </div>
  )
}

export default Results