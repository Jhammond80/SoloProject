

import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Thought Vault</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/creategoal" className="text-white hover:text-gray-300">New Goal</Link>
                        </li>
                        <li>
                            <Link to="/createthought" className="text-white hover:text-gray-300">New Thought</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;


