
const Sorting = ({colorPage}) => {
  return (
    <div className="p-4 shadow-lg shadow-purple-300">
      <select name="" id="" className={`disabled 
        ${colorPage ? "bg-black" : "bg-white" }
        `}>
        <option value="Choose">Choose One</option>
        <option value="Decrement">Decrement</option>
        <option value="Increment">Increment</option>
      </select>
    </div>
  )
}

export default Sorting
