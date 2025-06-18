import { useState } from "react"

export default function InputForm () {
  const [details, setDetails] = useState({
    ownerName: '',
    petName: '',
    petType: '',
    breed: '',
    email: '',
    phone: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(details);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-2xl border-2 border-gray-400 rounded-lg">
        <DetailsInput setDetails={setDetails} name='petName' label='Pet Name:' placeholder='Simba'/>
        <DetailsInput setDetails={setDetails} name='petType' label='Pet Type:' placeholder='Dog'/>
        <DetailsInput setDetails={setDetails} name='breed' label='Breed:' placeholder='German Shepard'/>
        <DetailsInput setDetails={setDetails} name='ownerName' label='Your name:' placeholder='Enter your name'/>
        <DetailsInput setDetails={setDetails} name='email' label='Email:' placeholder='Enter your email'/>
        <DetailsInput setDetails={setDetails} name='phone' label='Phone No.:' placeholder='Phone No.'/>
      
        <button type="submit" className="bg-blue-600 text-white px-5 py-2.5 m-2 rounded-3xl cursor-pointer hover:bg-blue-800">Submit</button>
      </form>
    </>
  )
}


function DetailsInput({name, label, placeholder, setDetails}) {
  function handleChange(e) {
    const val = e.target.value
    setDetails(details => ({
      ...details,
      [name]: val,
    }))
  }

  return(
    <>
      <div className="m-2">
        <label htmlFor={name} className="block m-2 ml-0.5 text-sm w-xl">{label}</label>
        <input type='text' onChange={handleChange} placeholder={placeholder} id={name} className="text-sm rounded-lg w-xl p-2.5 bg-gray-700 border border-gray-500 border-solid placeholder-gray-400 text-white required"/>  
      </div>
    </>
  )
}