import Pagenation from "@/app/ui/dashboard/Pagenation";
import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="w-full bg-soft rounded-xl my-6 p-4">
      <Search placeholder="Find a user here...." link='product/add' />

      <table className="w-full">
        <thead>
          <tr className="p-4">
            <td className="p-4">Name</td>
            <td className="p-4">Description</td>
            <td className="p-4">Price At</td>
            <td className="p-4">Created at</td>
            <td className="p-4">stock</td>
            <td className="p-4">Action</td>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td className="p-4 flex items-center gap-x-2">
              <Image
                src="/user.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              AbdulRehman
            </td>
            <td className="p-4">Lorem ipsum dolor sit amet.</td>
            <td className="p-4">$2000</td>
            <td className="p-4">April-4-2024</td>
            <td className="p-4">30</td>
            <td className="p-4">
              <div className="flex gap-x-2 ">
                <Link href="product/id">
                  <button className="px-2 py-1 border-none cursor-pointer rounded-md bg-[#067F7B]">
                    View
                  </button>
                </Link>
                <button className="px-2 py-1 border-none cursor-pointer rounded-md bg-[#D1163D]">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagenation />
    </div>
  );
};

export default Product;
