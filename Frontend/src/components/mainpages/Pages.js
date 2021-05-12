import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'

// GlobalState
import {GlobalState} from '../../GlobalState'

// componentes
import NotFound from './utils/not_found/NotFound'
import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import DetailProduct from '../mainpages/detailProduct/DetailProduct'
import OrderHistory from '../mainpages/history/OrderHistory'
import OrderDetails from '../mainpages/history/OrderDetails'
import Categories from '../mainpages/categories/Categories'
import CreateProduct from './createProduct/CreateProduct'



function Pages() {

    // state para ver si esta loggeado y si es admin
    const state = useContext(GlobalState);
    const [isLogged] = state.UserAPI.isLogged;
    const [isAdmin] = state.UserAPI.isAdmin

    return (
        <Switch>
            {/* En el header con la etiqueta "Link" y con el "to="/login"" se linkea a este switch para que al presionar eso que habia dentro de la etiqueta link los redireccione a estos componentes segun necesitemos */}
            {/* El exact component se saca de las importaciones ahi se importa el componente a renderizar al presionar el Link que redirecciona a ese path */}

            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />
            <Route path="/cart" exact component={Cart} />

            {/* <Route path="*" exact component={NotFound} /> */}
        </Switch>
    )
}

export default Pages
