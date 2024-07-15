import Footer from "../ui/dashboard/Footer";
import Navbar from "../ui/dashboard/Navbar";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // Main Div
    <div className="flex w-full ">

      
      {/* Side Bar */}
      <div className="w-[18%] bg-soft p-5 min-h-screen">
        <Sidebar />
      </div>

      
      {/* Navbar & Children  */}
      <div className="w-[82%] p-5">
        <Navbar />
        {children}
        <Footer />
      </div>

      
      

    </div>
  );
};

export default layout;
