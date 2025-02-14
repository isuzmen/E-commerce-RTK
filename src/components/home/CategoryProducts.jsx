
const Products = ({colorPage}) => {
  return (
    <div className={`w-9/12 h-full flex items-center justify-center p-4 rounded-md shadow-lg shadow-purple-300
    ${colorPage ? "bg-black text-purple-100" : "bg-purple-100 text-indigo-800"}
    `}>
      Products
    </div>
    
  );
};

export default Products;

