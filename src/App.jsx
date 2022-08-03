import React from 'react'
import './App.css'
import Button from './components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'

const App = () => {
  const clickHandlerFunction = text => console.log(text);
  
  return (
    <main className='react-calculator'>
      <Result value={'0'}/>
      <div className="numbers">
        <Button text={'1'} clickHandler={ clickHandlerFunction }/>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <Functions 
        onContentClear={() => console.log('content Clear')}
        onDelete={() => console.log('Delete')}
      />
      <MathOperations 
        onClickOperation={ operation => 
          console.log('operation:' , operation) } 
        
        onClickEqual={ equal =>
          console.log('equal', equal)}
      />
    </main>
  )
}

export default App
