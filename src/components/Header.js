import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const location = useLocation();  // Hook to access the current location
    const navigate = useNavigate();  // Hook to navigate between routes
    // Function to determine if the current route matches the link
    function pathMatchRoute(route) {
        return route === location.pathname
            ? 'py-3 text-sm font-semibold text-gray-800 border-b-[3px] border-black'  // Active link styles
            : 'py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent';  // Inactive link styles
    }

    return (   
        <div className='sticky top-0 bg-white border-b z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img 
                        src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' 
                        alt='logo' 
                        className='h-6 cursor-pointer'
                        onClick={() => navigate('/')}
                    />
                </div>
                <div>
                    <ul className='flex space-x-4 py-4'>
                        <li>
                            <Link to="/" className={pathMatchRoute('/')} onClick={() => navigate('/')}>Home</Link>
                        </li>
                        <li>
                            <Link to="/offers" className={pathMatchRoute('/offers')} onClick={() => navigate('/offers')}>Offers</Link>
                        </li>
                        <li>
                            <Link to="/sign-in" className={pathMatchRoute('/sign-in')} onClick={() => navigate('/sign-in')}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
