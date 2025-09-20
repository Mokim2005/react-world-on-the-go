
import { Suspense } from 'react'
import './App.css'
import Contries from './components/counties/Contries'

const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
  

function App() { 
  return (
    <>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Contries contriesPromise={contriesPromise}></Contries>
      </Suspense>
      <h1>React World on the go...</h1>
      
    </>
  )
}

export default App
