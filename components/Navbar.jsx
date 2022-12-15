import React from 'react'

function Navbar() {
  return (
    <nav>
  
        <img src="..\images\Airbnb.png" className="airbnb--logo h-full" />
        <ul className="flex flex-row text-white ml-auto">
          <li>
            <a
              className="p-2 uppercase text-xs font-bold text-white-500 tracking-widest hover:text-red hover:underline decoration-2 underline-offset-8 decoration-red-300"
              href=""
            >
              About
            </a>
          </li>
          <li>
            <a
              className="p-2 uppercase text-xs font-bold text-white-500 tracking-widest hover:text-red hover:underline decoration-2 underline-offset-8 decoration-red-300"
              href=""
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="p-2 uppercase text-xs font-bold text-white-500 tracking-widest hover:text-red hover:underline decoration-2 underline-offset-8 decoration-red-300"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
      
    </nav>
  );
}

export default Navbar