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
        onContentClear={() => setStack('')}
        onDelete={() => 
          {
            const newStack = stack.substring(0, stack.length - 1)
            setStack(newStack)
          }
        }
      />
      <MathOperations 
        onClickOperation={ operation => setStack(`${stack}${operation}`)} 
        
        onClickEqual={ equal => setStack(`${stack}${equal}`)}
      />
    </main>
  )
}

export default App
