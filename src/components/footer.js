import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faTelegram } from "@fortawesome/free-brands-svg-icons"
import { library, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false



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
        <FontAwesomeIcon icon={faFacebook  } size="2x" />
        </a>
        </li>
        <li><a 
    href="https://www.twitter.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="twitter">
        <FontAwesomeIcon icon={faTwitter } size="2x" />
        </a>
        </li>
        <li><a 
    href="https://www.telegram.org" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="telegram">
        <FontAwesomeIcon icon={faTelegram } size="2x" />
        </a>
        </li>
    </ul>

            </div>
            <p className="text-center"> Created by {data.site.siteMetadata.author} &copy; 2020</p>
        </footer>

    )
}

export default Footer