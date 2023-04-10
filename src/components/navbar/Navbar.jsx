import "./style.css"
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from '../../assets/img/portfolio-icon.png'

const Navbar = ({ setMenuClick }) => {
  return (
    <div className="navbar">
          <a href="#" className="logo-link">EDR_DEV.</a>

        <div className="navlinks">
            <a href="#banner">About</a>
            <a href="#skills">Skills</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
            <div className="cv-provider">
                <a href="/ResumeYalkiun.pdf" download>Resume</a>
            </div>
        </div>
        <AiOutlineMenu
         className="menu-icon" 
         onClick={() => setMenuClick(true)}
         />
    </div>
  )
}

export default Navbar