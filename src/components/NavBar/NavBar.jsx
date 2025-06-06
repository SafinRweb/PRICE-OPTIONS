import { useState } from 'react';
import Link from '../Link/Link.jsx';
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
    const [open, setopen]= useState(false);
    const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Dashboard", path: "/dashboard" }
];

    return (
        <nav className='p-6' >
            <div className='md:hidden' onClick={() => setopen(!open)}>
                {
                    open === true ? 
                    <RxCross1 className='text-2xl font-bold' /> : 
                    <MdMenu className='text-2xl' />
                }
            </div>
            <ul className={`md:flex absolute px-6
            duration-500 ease-in-out md:static
            ${open ? 'top-12' : '-top-60'}`}> 
            {       
                routes.map(route => (
                    <Link  key={route.id} route={route}></Link>
                ))
            }
            </ul>
        </nav>
    );
};

export default NavBar;