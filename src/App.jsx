import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen justify-center items-center bg-red-50 '>
      <div className='bg-red-500 text-white rounded-xl h-1/5 w-3/2 text-center flex items-center justify-center flex-col p-5  text-2xl gap-5'>
         
        <h1 className='text-6xl'>
        Dead Hunt Project
        </h1>
        <h4 className='text-3xl'>let's start to Design</h4>
        </div> 
    </div>
  )
}

export default App
