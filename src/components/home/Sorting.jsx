const Sorting = ({ colorPage,setSort }) => {
  return (
    <div className={`w-2/12 h-full font-medium flex items-center justify-center p-4 rounded-md shadow-lg shadow-purple-300           
    ${colorPage ? "bg-black" : "bg-purple-100 "}
        `}>
      <select
        className={`w-full px-3 py-1 rounded-md 
        ${colorPage ? "bg-black text-purple-100" : "bg-purple-100 text-indigo-800"}  
        `}
        onChange={e => setSort(e.target.value)}
      >
        <option value="Choose">Choose One</option>
        <option value="Decrement">Decrement</option>
        <option value="Increment">Increment</option>
      </select>
    </div>
  );
};

export default Sorting;

