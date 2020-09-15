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
                <Link to='/fetch-data'>
                    <li>fetch Data</li>
                </Link>
                <Link to='/fetch-individual-data'>
                    <li>fetch individual data</li>
                </Link>
            </ul> 
        </div>
    )
}

export default Navbar;
