import React from "react"
import { Link } from "gatsby"
import Head from '../components/head'




import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
  
    <SEO title="Home" />
   <Head />
    <p>Welcome to Unimus site.</p>
    <li>Network Automation</li>
    <li>Configuration Backup</li>
    <li>Change Management</li>
    <p>Unimus makes Network Automation and Configuration Management easy. We air to make
      automation, disaster recovery, change management and configution auditing and affordable
      for a new network of any size.</p>

      <button> Get started using Unimus </button>
    
    

    </Layout>

)
  }

export default IndexPage
