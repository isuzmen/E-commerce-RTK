import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductDetail } from "../redux/productDetailSlice"

const ProductDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {productDetail, productDetailStatus} = useSelector(state => state.productDetail)

    useEffect(()=> {
        dispatch(getProductDetail(id))
    },[dispatch, id])

    console.log(productDetail)
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
