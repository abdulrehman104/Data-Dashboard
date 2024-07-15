import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";
import Image from "next/image";


// Inside our menuItems, we have stored all the data for our sidebar
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "user",
        path: "/user",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/product",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/rev",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/rep",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/setting",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];




const Sidebar = () => {
  return (
    <>
      {/* Side Bar Main Div */}
      <div className="sticky top-10"> 
        

        {/* User Div */}
        <div className="flex gap-3 items-center mb-5">
          <Image
            src="/user.png"
            alt="User"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-[500px]">AbdulRehman</span>
            <span className="text-[12px] text-soft">Administrater</span>
          </div>
        </div>


      {/* SIDEBAR DIV */}
        <ul >
          {/* The map function is specifically dedicated to our titles such as pages, analytics, and users. */}
          {menuItems.map(
            (cat) => (
              <>
                <span className="text-soft text-[13px] font-bold mx-[10px]" key={cat.title}>{cat.title}</span>
                
                {/* The map function is specifically dedicated to our List Items such dashboard users products and so on. */}
                {cat.list.map(
                  (items) =>  <MenuLink items={ items} key={items.title} /> 
                )}
              </>
            )
          )}
      </ul>
      

        {/* Logout Button  */}
      <button className="flex items-center gap-[10px] px-6 py-4 my-[5px] rounded-xl cursor-pointer w-full hover:bg-gray-500">
          <MdLogout />
          Logout
      </button>

      </div>
    </>
  );
};


export default Sidebar;


