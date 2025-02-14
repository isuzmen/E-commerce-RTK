import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({colorPage}) => {

  const [selectedCategory, setSelectedCategory] = useState("")

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesReducer);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={`flex w-2/12 h-full items-center justify-evenly shadow-lg shadow-purple-300
    ${colorPage ? "bg-black text-purple-100" : "bg-purple-100 text-indigo-800" }
    `}>

      <select
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={`px-2 py-1 rounded-md 
        ${colorPage ? "bg-black text-purple-100" : "bg-purple-100 text-indigo-800"}  
        `}>
        
        <option value="" >Categories</option>
          {
            categories.length > 0 ? (
              categories?.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))
            ) : (
              <option>Loading</option>
            )
          }
      </select>
    </div>
  );
};

export default Category;

