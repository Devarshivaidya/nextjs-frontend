import Link from 'next/link'
const Navbar =() =>{
    return(
        <nav className=" 1565c0 blue darken-3"> 
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/create'>Create New TODO</Link>
                    </li>
                    <li>
                        <Link href='/todo'>TODO List operation</Link>
                    </li>
                </ul>
            </nav>
   )
}
export default Navbar; 