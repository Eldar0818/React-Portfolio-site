import "./style.css"

import HtmlIcon from '../../assets/img/html-icon.png'
import CssIcon from '../../assets/img/css-icon.png'
import JsIcon from '../../assets/img/js-icon.png'
import ReactIcon from '../../assets/img/react-icon.png'
import NodeIcon from '../../assets/img/node-icon.png'
import DbIcon from '../../assets/img/database-icon.png'

const Skills = () => {

    const skillList = [
        {id: 1, title: "Html5", icon: HtmlIcon},
        {id: 2, title: "CSS3", icon: CssIcon},
        {id: 3, title: "Javascript", icon: JsIcon},
        {id: 4, title: "React", icon: ReactIcon},
        {id: 5, title: "Node.js", icon: NodeIcon},
        {id: 6, title: "Sql/Nosql", icon: DbIcon},
    ]

  return (
    <section className="skills" id="skills">
        <header className="skills-header">
            <h1>What am I good at?</h1>
            <div className="skills-underline"></div>
        </header>
        <div className="skills-list">
            <div className="skill-list-container">
                {skillList.map(item => (
                    <div key={item.id} className="skill-box">
                        <img src={item.icon} alt="icon" />
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills