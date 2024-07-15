import Image from "next/image";

const View = () => {
  return (
    <div className="flex w-full justify-between mt-4">
      <div className="w-[20%] bg-soft rounded-xl p-4 text-soft font-bold ">
        <div className="mb-4">
          <Image
            src="/user.png"
            alt="Image"
            width={300}
            height={400}
            className="rounded-xl"
          />
        </div>
        AbdulRehman
      </div>
      <div className="w-[75%] bg-soft rounded-xl p-4">
        <form action="" className="flex flex-col gap-2">
          <label>Userame</label>
          <input
            type="text"
            name="username"
            placeholder="AbdulRehman"
            className="input2"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="abdul@1234"
            className="input2"
          />
          <label>Passoward</label>
          <input
            type="Passoward"
            name="Passoward"
            placeholder="Passoward"
            className="input2"
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="12345"
            className="input2"
          />
          <label>Adress</label>
          <textarea
            name="username"
            placeholder="Pakistan"
            className="input2"
          ></textarea>
          <label>isAdmin</label>
          <select name="isAdmin" id="" className="input2">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>isActive</label>
          <select name="isActive" id="" className="input2">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button className="w-full p-4 bg-teal-700 rounded-xl">Update</button>
        </form>
      </div>
    </div>
  );
};

export default View;
