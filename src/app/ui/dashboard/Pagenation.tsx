

const Pagenation = () => {
  return (
      <div className="flex justify-between p-4">
          <button className="px-3 py-2 bg-white text-black rounded-xl cursor-not-allowed" disabled>Previous</button>
          <button className="px-3 py-2 bg-white text-black rounded-xl">Next</button>
    </div>
  )
}

export default Pagenation