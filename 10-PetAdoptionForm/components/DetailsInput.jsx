export default function DetailsInput ({ name, label, placeholder, setDetails }) {
  function handleChange (e) {
    const val = e.target.value
    setDetails(details => ({
      ...details,
      [name]: val
    }))
  }

  return (
    <>
      <div className='m-2'>
        <label htmlFor={name} className='block m-2 ml-0.5 text-sm w-xl'>
          {label}
        </label>
        <input
          type='text'
          onChange={handleChange}
          placeholder={placeholder}
          id={name}
          className='text-sm rounded-lg w-xl p-2.5 bg-gray-700 border border-gray-500 border-solid placeholder-gray-400 text-white required'
        />
      </div>
    </>
  )
}
