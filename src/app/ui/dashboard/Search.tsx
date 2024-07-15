import Link from "next/link";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder , link}:any) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center bg-gray-500 p-2 gap-x-2 rounded-lg">
        <MdSearch />
        <input
          type="text"
          placeholder={ placeholder}
          className="bg-transparent outline-none "
        />
      </div>
      <div>
        <Link href={link}  className="p-4 bg-[#5C58C7] hover:bg-[#7975f3] rounded-xl">Add New</Link>
      </div>
    </div>
  );
};

export default Search;
