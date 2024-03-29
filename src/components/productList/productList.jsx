import React from 'react'
import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className="pl">
       <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. Brought to you by Dixon Software Solutions</h1>
        <p className="pl-desc">
          This is a creative portfolio that your work has been waiting for.
          Functional Web services, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList