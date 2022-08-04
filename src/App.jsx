import React, { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'


const App = () => {
  const[stack, setStack] = useState('')
  return (
    <main className='react-calculator'>
      <Result value={ stack }/>
      <Numbers 
        onClickNumber={number => 
          setStack(`${stack}${number}`)
        }
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
