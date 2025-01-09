/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
       Virginia Tech Hispanic and Latinx Caucus | Contact: vmontes@vt.edu 
      </p>
    </div>
  </footer>
)

export default Footer
