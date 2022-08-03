import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

const App = () => {
  const clickHandlerFunction = text => console.log(text);
  
  return (
    <main className='react-calculator'>
      <Result value={'0'}/>
      <Numbers 
        onClickNumber={number => console.log('you have clicked Number:', number)}
      />
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
