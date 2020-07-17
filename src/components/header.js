import React from "react"

import { Link,graphql, useStaticQuery } from "gatsby"
//import "./header.module.scss"
import '@quasar/extras/ionicons-v4/ionicons-v4.css'


import headerStyles from "./header.module.scss"
import {Navbar,Form,FormControl,Button, Nav,NavDropdown} from 'react-bootstrap'







const Header = () => {
 
  const data = useStaticQuery(graphql`
  query {
   site {
     siteMetadata {
       title
     }
   }
    
  }
  `)
  return (
  <header className={headerStyles.header} >
   
    
    <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" >
    <Nav.Link as="li">
      <Navbar.Brand><Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to="/"> 
      {
    data.site.siteMetadata.title
      }
      <img
        src="src/images/logo.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt=""
      
      />
      </Link></Navbar.Brand>  </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
  <Nav.Link as="li">
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
  
  </Nav.Link>
  <Nav.Item as="li">
    <NavDropdown title="About"  id="collasible-nav-dropdown">
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"></Link>
      <NavDropdown.Item href="#action/2.1">Pricing</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.2">Features</NavDropdown.Item>
        </NavDropdown>
    </Nav.Item>
    
    <Nav.Link as="li">
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/resources">Resources</Link>
  </Nav.Link>
  <Nav.Link as="li">
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
  </Nav.Link>
  <Nav.Link as="li">
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/forum">Forum</Link>
  </Nav.Link>
  <Nav.Link as="li">
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/download">Download</Link>
  </Nav.Link>
     </Nav>
     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-secondary">Search</Button>
    </Form>
   
    </Navbar.Collapse>
    </Navbar>
   
   
  </header>

  )
}


export default Header


