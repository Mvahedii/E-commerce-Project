import React from 'react'

import { Route } from 'react-router-dom'

import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview'
import CategoryPage from '../../Pages/Category/Category'

const Shop = ({ match }) => {

    console.log(match)
    return (
        <div>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )
}

export default Shop;