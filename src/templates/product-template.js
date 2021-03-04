import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from "../../src/components/Layout"
import Image from 'gatsby-image'


const productTemplate = ({ data:{product:{name,price,image:{fluid},description:{description}}} }) => {
    return (
        <Layout>
          <div>&#65124; <Link to="/products"> Back to Products</Link></div>
          <h1>{name}</h1>
          <div className="single-product">
            <div>
              <Image fluid={fluid} alt={name} />
            </div>
            <div>
              <h2>{name}
              <span id="price">${price}</span></h2>
              <p>{description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </Layout>
    )
}

export const query = graphql`
  query GetProduct($slug: String) {
  product: contentfulProduct(slug: {eq: $slug}) {
    id
    name
    price
    description {
      description
    }
    image {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`

export default productTemplate
