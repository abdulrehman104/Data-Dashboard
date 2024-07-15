"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



const MenuLink = ({ items }: any) => {
  //  Using the usePathName function, we obtain our route. If we navigate to the Dashboard, it will return the path for the Dashboard. Similarly, if we navigate to the User page, it will return the path for the User page.
  const pathName = usePathname();
   
    return (
     <Link
      href={items.path}
      className={`flex items-center gap-[10px] px-6 py-4 my-[5px] rounded-xl cursor-pointer hover:bg-gray-500  
      ${pathName == items.path && "bg-gray-500"}`} // Condition for pathName active.
    >
        
      {items.icon}
      {items.title}
    </Link>
  );
};

export default MenuLink;
