import React from "react"
import { Link,graphql, useStaticQuery } from "gatsby"
//import "./header.module.scss"

import headerStyles from "./header.module.scss"





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
  <header className={headerStyles.header}>
    <h1>
      <Link className={headerStyles.title}  to="/">
      {data.site.siteMetadata.title}
      </Link>
    </h1>
    <nav >
<ul className={headerStyles.navList}>
  <li>
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
  </li>
  
    <li>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/features">Features</Link>
    </li>
    <li>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/pricing">Pricing</Link>
    </li>
  
  <li>
    <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/resources">Resources</Link>
  </li>
  <li>
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/forum">Forum</Link>
  </li>
  <li>
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
  </li>
  <li>
    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/download">Download</Link>
  </li>
</ul>
    </nav>
  </header>

  )
}


export default Header
