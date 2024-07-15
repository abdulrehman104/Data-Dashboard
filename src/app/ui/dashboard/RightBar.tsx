import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <>
      <div className=" fixed">
        <div className="flex flex-col gap-5 mt-20  ">


         {/* Right Bar Card 1 */}
          <div className="flex flex-col gap-y-4 bg-soft rounded-xl w-80 p-4">
            <span className="text-[16px] font-medium">🔥 Available Now</span>
            <span className="text-[20px] font-medium">How to use the new version of the admin dashboard?</span>
            <span className="text-[12px] text-soft">Takes 4 minutes to learn</span>
            <span className="text-[12px] text-soft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </span>

            <button className="flex items-center gap-x-2 bg-[#5d57c9] text-white p-3 w-[50%] rounded-xl">
                <MdPlayCircleFilled size={20}/>
                Watch
            </button>
          </div>


          {/* Right Bar Card 2 */}
          <div className="flex flex-col gap-y-4 bg-soft rounded-xl w-80 p-4">
            <span className="text-[16px] font-medium">🚀 Coming Soon</span>
            <span className="text-[20px] font-medium">
              New server actions are available, partial pre-rendering is coming
              up!
            </span>
            <span className="text-[12px] text-soft">Boost your productivity</span>
            <span className="text-[12px] text-soft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </span>

            <button className="flex items-center gap-x-2 bg-[#5d57c9] text-white p-3 w-[50%] rounded-xl">
              <MdReadMore size={20}/>
              Learn
            </button>


          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
