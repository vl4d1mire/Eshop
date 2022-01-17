import React from 'react'
import CatalogPage from './pages/catalog/catalog-page.component'
import CartPage from './pages/basket/basket-page.component'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/layout.component'
import ProductDetail from "./components/product-detail/product-detail.component"
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<CatalogPage/>}/>
                    <Route path={'cart'} element={<CartPage/>}/>
                    <Route path={'products'} element={<CatalogPage/>}>
                        <Route path={':productId'} element={<ProductDetail/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
