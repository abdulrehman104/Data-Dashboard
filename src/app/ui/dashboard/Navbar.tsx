'use client'

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

  
const Navbar = () => {
  const pathName = usePathname()
  

  return (

    // Navbar
    <nav className="p-4 bg-soft rounded-xl flex justify-between items-center">

      {/* Route Name  */}
      <div className="text-soft font-bold capitalize">{ pathName.split('/').pop()}</div>

      
      {/* Search bar and Icons */}
      <div className="flex items-center gap-4">

        
        {/* Our Search Bar */}
        <div className="flex items-center bg-gray-500 p-2 gap-x-2 rounded-lg">
          <MdSearch />
          <input type="text" placeholder="Search..."  className="bg-transparent outline-none " />
        </div>

        
        {/* Our Icons */}
        <div className="flex gap-4">
        <MdOutlineChat size={20} />
        <MdNotifications size={20} />
        <MdPublic size={20} />
        </div>


      </div>

    </nav>
  )
}

export default Navbar