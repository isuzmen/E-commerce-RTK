import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProductDetail } from "../redux/productDetailSlice"
import Loading from "../components/Loading"
import DetailComp from "../components/detail/DetailComp"

const ProductDetail = ({colorPage}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {productDetail, productDetailStatus} = useSelector(state => state.productDetail)

    useEffect(()=> {
        dispatch(getProductDetail(id))
    },[dispatch, id])

    console.log(productDetail)
  return (
    <div>
        {
            productDetailStatus == "loading" ? <Loading/> : <DetailComp productDetail = {productDetail} colorPage={colorPage}/>

        }
    </div>
  )
}

export default ProductDetail
