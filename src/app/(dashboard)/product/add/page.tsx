const AddPage = () => {
  return (
    <div className="bg-soft p-4 my-4 rounded-xl">
      <form action="" className="flex flex-wrap justify-between gap-5">
        <input type="`text" placeholder="title" id="title" className="input1" />
        <select name="cat" id="cat" className="input1">
          <option value="general" className="bg-transparent">
            Chose a category
          </option>
          <option value="Kitchen" className="bg-transparent">
            Kitchen
          </option>
          <option value="Phone" className="bg-transparent">
            Phone
          </option>
          <option value="Computer" className="bg-transparent">
            Computer
          </option>
        </select>
        <input type="`text" placeholder="price" id="price" className="input1" />
        <input type="`text" placeholder="stock" id="stock" className="input1" />
        <input type="`text" placeholder="color" id="color" className="input1" />
        <input type="`text" placeholder="size" id="size" className="input1" />
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
