import { MdSupervisedUserCircle } from "react-icons/md";

const Cards = () => {
  return (
    <div className="flex w-full gap-2 bg-soft p-4 rounded-xl ">
      <span className="mt-[3px]"><MdSupervisedUserCircle size={20}/></span>
      <div className="flex flex-col gap-4">
        <span className="text-[18px]">Total Users</span>
        <span className="text-[26px] font-bold">10.928</span>
        <span className="text-[14px] mb-4">
          <span className="text-lime-500">12%</span> More than previous week
        </span>
      </div>
    </div>
  );
};

export default Cards;
