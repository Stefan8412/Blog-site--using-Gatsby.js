import React from "react"
import { Link,graphql } from "gatsby"
import Head from '../components/head'
import Info from '../components/Home/Info'
import SEO from "../components/seo"
import Layout from "../components/layout"
import BackgroundSection from "../components/Global/BackgroundSection"



const IndexPage = ({data}) => 
   (
    <Layout>
      
     <Head title="Home"/>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Unimus" styleClass="background"/>
    <Info/>
</Layout>

)
  
  export const query =graphql`
{
  img:file(relativePath:{eq:"images/background.jpg"}) {
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage

