import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/contact'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-400 text-2xl p-5'>
      <h2>Diyaa</h2>
      <div className='flex gap-8'></div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/courses'>Courses</Link>
    </div>
  )
}

export default Navbar
