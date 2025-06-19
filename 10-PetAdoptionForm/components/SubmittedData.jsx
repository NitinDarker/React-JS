export default function SubmittedData ({ details }) {
  return (
    <>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-200'>
          <thead className='text-xs uppercase bg-gray-700 text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Owner Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Pet Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Pet type
              </th>
              <th scope='col' className='px-6 py-3'>
                Breed
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b bg-gray-800 border-gray-700'>
              {Object.values(details).map((e, index) => (
                <td key={index} className='px-6 py-4'>
                  {e}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
