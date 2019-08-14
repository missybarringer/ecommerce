import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Product from "./product";

const PRODUCTS_QUERY = graphql `
query AllProducts {
    allStripeSku {
        edges {
            node {
            attributes {
                name
            }
            product {
                id
                name
            }
            id
            price
            }
        }
    }
    allStripeProduct {
        edges {
            node {
                name
                id
            }
        }
    }
}
`;
const Products = () => {
    return (
        <StaticQuery query = {PRODUCTS_QUERY} 
            render={({allStripeSku, allStripeProduct}) => {
                    return allStripeProduct.edges.map(product => (
                        <Product key={product.node} skus={allStripeSku.edges} product={product.node} />
                    ))
                }}
        />
    )
}

export default Products