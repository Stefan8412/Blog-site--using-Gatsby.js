import React from 'react'
import {Link } from "gatsby"

export default function Info() {
    return (
       <section className="py-5">
           <div className="container">
               <div className="row">
                   <div className="col-10 col-sm-8 mx-auto text-center">
                       <p className="lead text-muted mb-5">
                           <h1>Want to see everything Unimus can do?</h1>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus, eros vel scelerisque dapibus, augue neque molestie diam, vel scelerisque tellus nunc ut turpis. Maecenas at aliquet neque. Nam tempor porttitor quam consectetur pellentesque. Duis congue ante augue, sit amet hendrerit nisi dictum et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis maximus tellus augue, eu varius velit venenatis nec. Vestibulum in ultricies ipsum, ac ultrices orci. Nunc ac ex eu velit imperdiet consequat. Nulla sit amet ex in ex rhoncus lacinia a a magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce quis vulputate enim, tempus pretium lorem. Nunc scelerisque venenatis lacus, tempor congue augue pulvinar sit amet. In orci felis, pharetra nec velit sed, cursus accumsan enim. Integer quis urna interdum, facilisis ex vel, pharetra erat. Aliquam congue turpis nec tellus tincidunt, sed eleifend arcu gravida.

Nulla leo felis, eleifend ac purus eget, tristique tincidunt justo. Cras at nisl enim. Quisque maximus ipsum eget metus molestie ullamcorper. Curabitur ut mi eget arcu hendrerit consequat. Fusce at felis neque. Sed pretium diam ut mi ornare venenatis. Morbi auctor purus sed ipsum dictum, sit amet venenatis augue lobortis. In eros augue, semper ut magna eu, sodales tincidunt nunc. Praesent eget dignissim odio. Phasellus fermentum dignissim aliquet. Praesent varius mauris ut scelerisque elementum. Ut tristique pellentesque risus, a eleifend dui vulputate in.
                       </p>
                       <Link to="/features">
                           <button className="btn text-uppercase btn-primary">Features</button>
                       </Link>

                   </div>

               </div>

           </div>

       </section>
    )
}

