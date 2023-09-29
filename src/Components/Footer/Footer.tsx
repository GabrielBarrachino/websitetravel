import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export function Footer() {
    return (
      <footer className="footer">
        <div className="secContainer container grid">
          <div className="logoDiv">
            <div className="footerLogo">
              <a href="#" className="logo flex">
                <h1 className="flex"><SiYourtraveldottv className='icon'/>
                Dot</h1>
              </a>
            </div>

            <div className="socials flex">
              <a href="">
                <ImFacebook className='icon'/>
              </a>
              <a href="">
                <BsTwitter className='icon'/>
              </a>
              <a href="">
                <AiFillInstagram className='icon'/>
              </a>
            </div>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>

            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Helpful Links</span>

            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel and Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Contact</span>

            <span className="phone">+55 11 91234-5678</span>
            <span className="email">exemple@gmail.com</span>
          </div>
        </div>
      </footer>
    )
  }
  