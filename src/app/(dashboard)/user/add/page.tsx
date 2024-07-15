const AddPage = () => {
  return (
    <div className="bg-soft p-4 my-4 rounded-xl">
      <form action="" className="flex flex-wrap justify-between gap-5">
        <input
          type="`text"
          placeholder="username"
          name="username"
          className="input1"
          required
        />
        <input
          type="`text"
          placeholder="email"
          name="email"
          className="input1"
          required
        />
        <input
          type="`text"
          placeholder="passoward"
          name="passoward"
          className="input1"
          required
        />
        <input
          type="`text"
          placeholder="phone"
          name="phone"
          className="input1"
        />
        <select name="cat" id="cat" className="input1">
          <option value="false" className="bg-transparent">
            IsAdmnin
          </option>
          <option value="true" className="bg-transparent">
            Yes
          </option>
          <option value="false" className="bg-transparent">
            No
          </option>
        </select>
        <select name="cat" id="cat" className="input1">
          <option value="false" className="bg-transparent">
            IsActive
          </option>
          <option value="true" className="bg-transparent">
            Yes
          </option>
          <option value="false" className="bg-transparent">
            No
          </option>
        </select>
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description..."
          className="w-full bg-transparent rounded-xl border"
        ></textarea>
        <button className="w-full p-5 bg-teal-600 rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default AddPage;
