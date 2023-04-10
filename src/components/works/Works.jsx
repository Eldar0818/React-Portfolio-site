import './style.css'

import News from '../../assets/img/work-news.png'
import Shop from '../../assets/img/work-shop.jpg'
import Admin from '../../assets/img/work-admin.webp'
import Register from '../../assets/img/work-register.png'

const Works = ({ setClickProjet }) => {

    const projectLinks = []

    const worksList = [
        {id: 1, title: "Local News Website", icon: News},
        {id: 2, title: "Online Shop", icon: Shop},
        {id: 3, title: "Dynamic Business Admin Panel", icon: Admin},
        {id: 4, title: "Customer Regsiter Sytem", icon: Register},
    ]

    const checkProject = () => {
        if(projectLinks.length < 1){
            setClickProjet(true)
            setTimeout(() => {
                setClickProjet(false)
            }, 4000)
        }
    }

  return (
    <section className='works' id='works'>
         <header className="works-header">
            <h1>Work Models</h1>
            <div className="works-underline"></div>
        </header>
        <div className="works-list">
            {worksList.map(item => (
                <div 
                    key={item.id} 
                    className='work-box'
                    onClick={checkProject}
                >
                    <img src={item.icon} alt="poster" />
                    <div className='work-info'>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Works