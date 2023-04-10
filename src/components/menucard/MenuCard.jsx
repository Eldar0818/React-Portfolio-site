import './style.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiFillLinkedin, AiFillFacebook, 
    AiFillInstagram, AiOutlineGithub } from 'react-icons/ai'

const MenuCard = ({ menuClick, setMenuClick }) => {

    const linkItems = [
        {id: 1, path: "#banner", title: "About"},
        {id: 2, path: "#skills", title: "Skills"},
        {id: 3, path: "#works", title: "Works"},
        {id: 4, path: "#contact", title: "Contact"},
    ]

  return (
    <div className={menuClick ? 'menu-card active' : 'menu-card'}>
        <div className="close">
            <AiOutlineCloseCircle 
                className='close-icon'
                onClick={() => setMenuClick(false)}
            />
        </div>
        <div className="menu-links">
            {
                linkItems.map(item =>(
                    <a 
                        href={item.path} 
                        key={item.id}
                        onClick={() => setMenuClick(false)}
                    >
                        {item.title}
                    </a>
                ))
            }
            <div className='get-resume'>
                <a href="/ResumeYalkiun.pdf" download>Resume</a>
            </div>
        </div>
        <div className="menu-socials">
            <a href="https://github.com/Eldar0818" target='_blank'>
                <AiOutlineGithub className='menu-social-icons'/>
            </a>
            <a href="https://www.linkedin.com/in/yalikun-yilida-30877b210/" target='_blank'>
                <AiFillLinkedin className='menu-social-icons'/>
            </a>
            <a href="https://www.facebook.com/yalikun.yilida.1" target='_blank'>
                <AiFillFacebook className='menu-social-icons'/>
            </a>
            <a href="https://www.instagram.com/" target='_blank'>
                <AiFillInstagram className='menu-social-icons'/>
            </a>
        </div>

    </div>
  )
}

export default MenuCard