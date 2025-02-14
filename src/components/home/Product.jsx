
const Product = ({product}) => {
    const {id,images,price,title,description} = product
    console.log(product)
  return (
    <div className="w-[260px] h-[330px] shadow-purple-400 shadow-2xl rounded-[10px] m-3">
      <img className="h-[260px] rounded-t-xl object-cover" src={images[1]}/>
      <div>
        <p>{title}</p>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Product
