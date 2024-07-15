import Pagenation from "@/app/ui/dashboard/Pagenation";
import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";

const User = () => {
  return (
    <div className="w-full bg-soft rounded-xl my-6 p-4">
      <Search placeholder="Find a user here...." link='user/add'/>

      <table className="w-full">
        <thead>
          <tr className="p-4">
            <td className="p-4">Name</td>
            <td className="p-4">Email</td>
            <td className="p-4">Created At</td>
            <td className="p-4">Role</td>
            <td className="p-4">Status</td>
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
            <td className="p-4">rehmanabdul008844@gmail.com</td>
            <td className="p-4">23-4-2024</td>
            <td className="p-4">Admin</td>
            <td className="p-4">Active</td>
            <td className="p-4">
              <div className="flex gap-x-2 ">
                <Link href="user/id">
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

export default User;

