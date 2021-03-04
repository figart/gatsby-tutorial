import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby' 
import { Link } from 'gatsby'
import styles from "../components/products.module.css"
import Image from 'gatsby-image'



const products = ({ data }) => {
  const {allContentfulProduct:{products}} = data
  // console.log(products)
  return (
    <Layout>
      <h1>Products</h1>
      <section className={styles.page}>
      {products.map((product) => {
        return (
          <article key={product.slug}>
            <Image fluid={product.image.fluid} alt={product.name}></Image>
            <h2>{product.name}<span>${product.price}</span></h2>
            
            <Link to={`/products/${product.slug}`}>More Details</Link>
          </article>
        )
      })}
      </section>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      products: nodes {
        slug
        name
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        description {description}
      }
    }
  }
`

export default products
