import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <ul>
                <Link to='/clicker'>
                    <li>Clicker</li>
                </Link>
                <li>Basic clock</li>
                <li>Basic Timer</li>
                <li>Advanced Timer</li>
                <li>Movie cards</li>
            </ul> 
        </div>
    )
}

export default Navbar;
