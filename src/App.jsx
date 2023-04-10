import { useState } from "react";
import MenuCard from "./components/menucard/MenuCard";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Modal from "./components/modal/Modal";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {

  const [menuClick, setMenuClick] = useState(false)
  window.addEventListener('resize', () => { if(window.innerWidth > 628) setMenuClick(false)  })
  const [clickProject, setClickProjet] = useState(false)

  return (
    <main>
      <Navbar setMenuClick={setMenuClick} />
      <MenuCard 
        menuClick={menuClick}
        setMenuClick={setMenuClick}
      />
      <Banner/>
      <Skills/>
      <Works 
        setClickProjet={setClickProjet}
      />
      <Contact/>
      <Footer/>
      {clickProject ? 
        <Modal
          msg="Projects temporarily inaccessible..."
        />
        :
        ""
      }
    </main>
  )
}