import { Link, Outlet } from 'react-router-dom'


const Contact = () => {
  return (
    <div className='p-6'>
      <h1>Contact</h1>
      <div className='flex items-end justify-between'>
        <Link to='phone'>Phone</Link>
        <Link to='mail'>Mail</Link>
      </div>
      <div>
    <Outlet/>
    </div>
    </div>
  )
}

export default Contact
