import React, {useEffect} from 'react'
import Cart from '../cart/cart.component'

import {countPerPage, goodsFiltered, loadData, receivedProducts} from '../../redux/products/productsSlice'
import {useDispatch, useSelector} from 'react-redux'

import {useGetProductsQuery} from '../../services/productsApi'
import Loader from '../loader/loader.component'
import './product-list.styles.scss'

const ProductList = () => {

    const { data = [], isLoading } = useGetProductsQuery()
    const dispatch = useDispatch()

    const products = useSelector(goodsFiltered)

    useEffect(() => {
        dispatch(receivedProducts(data))
        dispatch(loadData({count: 24}))
    }, [data])


    if (isLoading) return <Loader/>

    return (
        <div className="catalog__cart-container">
            <div className="products__cart cart">
                <div className="cart__container">
                    {
                        products && Object.values(products).map((item) => (
                        <Cart key={item.id} item={item}/>))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList
