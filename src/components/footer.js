import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook  } from "@fortawesome/free-brands-svg-icons"
import { faTwitter  } from "@fortawesome/free-brands-svg-icons"


const Footer = () =>{
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    `)

    return (
        <footer className={footerStyles.siteFooter}>
            <p className="text-center">Folow us on social media</p>
            <div className="footer-social-links">
<ul className="social-links-list">
    <li><a 
    href="https://www.facebook.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="facebook">
        <FontAwesomeIcon icon={faFacebook } />
        </a>
        </li>
     

</ul>

            </div>
            <p className="text-center"> Created by{data.site.siteMetadata.author} &copy; 2020</p>
        </footer>

    )
}

export default Footer