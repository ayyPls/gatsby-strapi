import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"

const IndexPage = () => {
  const {allStrapiEgor} = useStaticQuery(graphql`
  query MyQuery {
    allStrapiEgor {
      nodes {
        full_name
        description
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
  
  `)

  return (
    < div >
      <h1>{allStrapiEgor.nodes[0].full_name}</h1>
      <p>
        {allStrapiEgor.nodes[0].description}
      </p>
      <img src={allStrapiEgor.nodes[0].image.localFile.publicURL} />
      <br />
      <Link to="/about">to about</Link>
    </div >
  )
}

export default IndexPage
