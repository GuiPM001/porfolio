import Link from './Link'

const Header = () => {
  return (
    <nav className='h-10 flex flex-row items-center justify-center gap-6 mb-20 md:mb-16'>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/projects'>projects</Link>
    </nav>
  )
}

export default Header