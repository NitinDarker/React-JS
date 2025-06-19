import { useState } from 'react'
import DetailsInput from './DetailsInput'

export default function InputForm ({ setDetails, setIsSubmitted }) {

  function handleSubmit (e) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center w-2xl border-2 border-gray-400 rounded-lg'
      >
        <DetailsInput
          setDetails={setDetails}
          name='petName'
          label='Pet Name:'
          placeholder='Simba'
        />
        <DetailsInput
          setDetails={setDetails}
          name='petType'
          label='Pet Type:'
          placeholder='Dog'
        />
        <DetailsInput
          setDetails={setDetails}
          name='breed'
          label='Breed:'
          placeholder='German Shepard'
        />
        <DetailsInput
          setDetails={setDetails}
          name='ownerName'
          label='Your name:'
          placeholder='Enter your name'
        />
        <DetailsInput
          setDetails={setDetails}
          name='email'
          label='Email:'
          placeholder='Enter your email'
        />
        <DetailsInput
          setDetails={setDetails}
          name='phone'
          label='Phone No.:'
          placeholder='Phone No.'
        />

        <button
          type='submit'
          className='bg-blue-600 text-white px-5 py-2.5 m-2 rounded-3xl cursor-pointer hover:bg-blue-800'
        >
          Submit
        </button>
      </form>
    </>
  )
}