import './style.css'
import { AiFillLinkedin, AiFillFacebook, 
    AiFillInstagram, AiOutlineGithub } from 'react-icons/ai'
import Logo from '../../assets/img/portfolio-icon.png'

const Banner = () => {

  return (
    <section className='banner' id='banner'>
        <div className="banner-left">

            <div className="banner-icons">
                <div className="bn-icon-box">
                    <a href="https://github.com/Eldar0818" target='_blank'>
                        <AiOutlineGithub className='banner-icon first'/>
                    </a>
                </div>
                <div className="bn-icon-box">
                    <a href="https://www.linkedin.com/in/yalikun-yilida-30877b210/" target='_blank'>
                        <AiFillLinkedin className='banner-icon second'/>
                    </a>
                </div>
                <div className="bn-icon-box">
                    <a href="https://www.facebook.com/yalikun.yilida.1" target='_blank'>
                        <AiFillFacebook className='banner-icon third'/>
                    </a>
                </div>
                <div className="bn-icon-box">
                    <a href="https://www.instagram.com/" target='_blank'>
                        <AiFillInstagram className='banner-icon fourth'/>
                    </a>
                </div>
            </div>

        </div>
        <div className="banner-right">
            <article className='banner-content'>
                <img src={Logo} alt="logo" />
                <h1>Full Stack Web Developer</h1>
                <div className='banner-underline'></div>
                <h4>High level experience in front-end based web development with API integration, Fast delivery and producing quality services and works</h4>
                <p>Since beginning of my journey as front end developer, I've participated remote works for agencies, organisations and private people. At the same time I collaborated with many talented people successfully to create Website, SPA and PWA for both business and cunsumer use. I offer from wide range of Services, including design to create and fix.</p>
                <div className='banner-to-contact'>
                    <a href="#">Contatc me</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Banner