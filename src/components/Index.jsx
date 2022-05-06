
import { useState } from 'react'
import Themes from './Themes/Themes'
import Results from './Results/Results'
import Operations from './Operations/Operations'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import './Index.css'

const Index = () => {
    const [typedNum, setTypedNum] = useState("0")
    const [result, setResult] = useState("")
    const [DWmode, SetDWMode] = useState(true);
    const [isRecording, setIsRecording] = useState(false)
    let operations = {
      "plus":"+",
      "minus":"-",
      "multiply":"*",
      "x":"*",
      "multiplied":"*",
      "multiply by":"*",
      "multiplied by":"*",
      "into":"*",
      "divide":"/",
      "divided":"/",
      "divide by":"/",
      "divided by":"/",
      "reminder":"%"
  }
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const DarkLighToggle =(e) =>{
        e === "DarkMode" ? SetDWMode(true) : SetDWMode(false)
    }
    const handleOperation = (e) =>{
      const operation = e.target.innerText;
      if(operation === undefined) {
        if (!browserSupportsSpeechRecognition) {
          alert("Browser doesn't support speech recognition.")
          return
        }
        if(!isRecording){
          setTypedNum('0')
          SpeechRecognition.startListening()
          setIsRecording(true)
        }
        if(isRecording){
          SpeechRecognition.stopListening()
          setIsRecording(false)
          var input = transcript;
          for(let property in operations){
              input = input.replace(property,operations[property]);
          }
          setTypedNum(typedNum.toString().replace(/^0+/, '') + input)
          resetTranscript()
        }
        return
      }
      if(operation === "CE"){
        let num = typedNum.toString().slice(0, -1);
        if(typedNum.toString().length === 1){
          setTypedNum('0')
          return
        }else{
          setTypedNum(num)
        }
        return
      }
      if(operation === "AC"){
        setTypedNum('0')
        setResult("")
        return
      }
      if(operation === "="){
        if(typedNum.toString().length > 1){
          // eslint-disable-next-line 
          setResult(eval(typedNum)) 
        }
      }
      else{
        setTypedNum(typedNum + operation)
      }
    }
    const handleNumbers = (e) =>{
        let number = e.target.innerText;
        setTypedNum(typedNum.toString().replace(/^0+/, '') + number)
    } 
  return (
      <div  className={DWmode ? 'dark-mode' : 'white-mode'}>
        <div className='CalcUpper'> 
          <Themes DWmode={DWmode} SetDWMode={SetDWMode} DarkLighToggle={DarkLighToggle} />
          <Results typedNum={typedNum} result={result} />
          <Operations handleOperation={handleOperation} handleNumbers={handleNumbers} listening={listening}/>
        </div>
      </div>
  )
}

export default Index