import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <ul>
                <Link to='/'>
                    <li></li>
                </Link>
                <Link to='/clicker'>
                    <li>Clicker</li>
                </Link>
                <Link to='/basic-clock'>
                   <li>Basic clock</li>
                </Link>
                <Link to='/basic-timer'>
                   <li>Basic Timer</li>
                </Link>
                <li>Advanced Timer</li>
                <li>Movie cards</li>
            </ul> 
        </div>
    )
}

export default Navbar;
