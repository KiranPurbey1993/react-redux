import React from 'react'
import  {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Product = () => {
  const products = useSelector((state)=>state.allProducts.products);
  console.log(products)
  // const {id, title } =products[0];
  // console.log(id, title)

  const renderList = products.map((product)=>{
    const {id, title, image, price, category} = product;
    return(
      <div className='four wide column ' key={id}>
        <Link to={`product/${id}`}>
            <div className='ui link cards'> 
              <div className='ui card'>
                <div className='ui small image'>
                  <img src={image} alt={title} />
                </div>
                <div className='ui content'>
                    <div className='header'>{title}</div>
                    <div className='meta price'>$ {price}</div>
                    <div className='meta '>{category}</div>
                </div>
              </div>
            
            </div>
        </Link>
        
    </div>
    )
  })
  return (
    <>{renderList}</>
  )
}

export default Product
