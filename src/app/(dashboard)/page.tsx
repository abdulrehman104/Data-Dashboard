import Cards from "@/app/ui/dashboard/Cards";
import Chart from "@/app/ui/dashboard/Chart";
import RightBar from "@/app/ui/dashboard/RightBar";
import Transactions from "@/app/ui/dashboard/Transactions";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-[75%] flex flex-col mt-4 gap-5">
          <div className="flex justify-between gap-4 ">
            <Cards />
            <Cards />
            <Cards />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className="w-[25%] mt-4">
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
