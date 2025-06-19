import { useState } from 'react'
import InputForm from '../components/InputForm'
import SubmittedData from '../components/SubmittedData'

function App () {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <>
      <div className='bg-black text-white h-dvh flex flex-col items-center'>
        <h1>Pet Adoption Form</h1>
        {isSubmitted ? <SubmittedData /> : <InputForm setIsSubmitted={setIsSubmitted} />}
      </div>
    </>
  )
}

export default App
