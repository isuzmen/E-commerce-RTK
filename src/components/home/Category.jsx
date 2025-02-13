import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../redux/categorySlice"
import MenuIcon from '@mui/icons-material/Menu';


const Category = () => {

   const dispatch = useDispatch()
   const {categories} = useSelector(state => state.categoriesReducer)
      
   useEffect(() => {
    dispatch(getCategories())
   },[dispatch])

  return (
      <div className="w-1/6 bg-white-200 p-4 rounded-md shadow-lg shadow-purple-300  flex items-center justify-start gap-4"> 
        <MenuIcon className="text-indigo-800 cursor-pointer" />
        <p>Categories</p>
      </div>
  )
}

export default Category
