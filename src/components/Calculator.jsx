import Button from '@mui/material/Button';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import './Calculator.css'

export function Calculator()
 {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const calculator = {
    inputNum: (e) => {
      let input = e.target.value
      num === 0 ? setNum(input) : setNum(num + input)
    },

    operatorHandle: (e) => {
      let operatorInput = e.target.value
      setOperator(operatorInput)
      setOldNum(num)
      setNum(0)
    },

    clear: () => {
      setNum(0)
    },

    changeSign: () => {
      num > 0 ? setNum(-num) : setNum(Math.abs(num))
    },

    porcentage: () => {
      setNum(num/100)
    },

    calculate: () => {
      switch (operator) {
        case "/":
          setNum(oldNum / num)
          break;

        case "*":
          setNum(oldNum*num)
          break;

        case "+":
          setNum(parseFloat(oldNum) + parseFloat(num))
          break;
      
        case "-":
          setNum(oldNum - num)
          break;
      }
    }
  }

  return (
    <>
    <Box m={5} />
    <div className='container'>
    <div className="result">
      <h1 id='result'>{num}</h1>
    </div>
      <div className='wrapper'>
        <button onClick={calculator.clear}>AC</button>
        <button onClick={calculator.changeSign}>+/-</button>
        <button onClick={calculator.porcentage}>%</button>
        <button className='orange' onClick={calculator.operatorHandle} value={"/"}>/</button>
        <button className='number gray' onClick={calculator.inputNum} value={7}>7</button>
        <button className='number gray' onClick={calculator.inputNum} value={8}>8</button>
        <button className='number gray' onClick={calculator.inputNum} value={9}>9</button>
        <button className='orange' onClick={calculator.operatorHandle} value={"*"}>X</button>
        <button className='number gray' onClick={calculator.inputNum} value={4}>4</button>
        <button className='number gray' onClick={calculator.inputNum} value={5}>5</button>
        <button className='number gray' onClick={calculator.inputNum} value={6}>6</button>
        <button className='orange' onClick={calculator.operatorHandle} value={"-"}>-</button>
        <button className='number gray' onClick={calculator.inputNum} value={1}>1</button>
        <button className='number gray' onClick={calculator.inputNum} value={2}>2</button>
        <button className='number gray' onClick={calculator.inputNum} value={3}>3</button>
        <button className='orange' onClick={calculator.operatorHandle} value={"+"}>+</button>
        <button className='number gray' onClick={calculator.inputNum} value={0}>0</button>
        <button className='gray' onClick={calculator.inputNum} value={"."}>.</button>
        <button onClick={calculator.calculate}>=</button>
      </div>
    </div>
    </>
  )
}
