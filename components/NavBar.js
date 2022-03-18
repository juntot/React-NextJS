import Link from 'next/link'
const NavBar = () => {
  return ( 
    <nav>
      <ul>
        
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </ul>
    </nav>
   );
}
 
export default NavBar;