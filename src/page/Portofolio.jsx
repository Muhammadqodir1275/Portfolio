import React from 'react'
import img2 from '../img/img2.webp'
import user from '../img/user.png'
import '../style/Portofolio.css'
import Projects from './Projects'
import { Link } from 'react-router-dom'
import Box from './Box'
const Portofolio = () => {


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div className='portofolio'>
            <nav>
                <div className="nav">
                    <div className="navbar">
                        <div className="navbar-logo">
                            <h1>Muhammadqodir
                                {/* {'{ 007 }'} */}
                                </h1>
                            {/* <h1>pavanmg</h1> */}
                        </div>
                        <div className="navbar-menu">
                            <ul>
                                <li><a href="#projects" onClick={() => scrollToSection('projects')}>Loyihalarim</a></li>
                                <li><a href="#stack-title">Men nima bilan ishlayman</a></li>
                                <li><a href="#footer">Aloqa</a></li>
                                <li><Link to={'/contact'}>Bog'lanish</Link></li>
                            </ul>
                        </div>
                        <Box />
                    </div>
                </div>
            </nav>
            <div className="mulomot">
                <div className="portolio-logo">
                    <img src={user} alt="gambar" />
                </div>
                <div className="my-portofolio">
                    <h1>
                        Salom 👋
                        Mening ismim Muhammadqodir
                        Men veb
                            dasturlar yarataman
                    </h1>
                    <p>Men frontend dasturchiman, HTML, CSS, React.js va React Context API kabi texnologiyalarni o‘rganmoqdaman. Mening maqsadim foydalanuvchi tajribasini yaxshilash uchun chiroyli va interaktiv veb-saytlar yaratish. SASS, Swiper kutubxonasi va React bilan ishlashda tajriba orttirishga harakat qilmoqdaman.</p>
                </div>
            </div>
            <div className="teach" id='stack-title'>
                <div className="stack">
                    <h2>Men bilan ishlaydigan texnologiyalar</h2>
                </div>
                <div className="stact-logo">
                    <div className="card-logo">
                        <i className="fa-brands fa-js" style={{ color: '#f1c40f' }}></i>
                    </div>
                    <div className="card-logo">
                        <i className="fa-brands fa-css3-alt" style={{ color: '#2980b9' }}></i>
                    </div>
                    <div className="card-logo">
                        <i className="fa-brands fa-html5" style={{ color: '#e74c3c' }}></i>
                    </div>
                    <div className="card-logo">
                        <i className="fa-brands fa-react" style={{ color: '#3498db' }}></i>
                    </div>
                    <div className="card-logo">
                        <i className="fa-brands fa-sass" style={{ color: '#9b59b6' }}></i>
                    </div>
                    <div className="card-logo">
                        <i className="fa-brands fa-git-alt" style={{ color: '#CF4732' }}></i>
                    </div>
                    <div className="card-logo">
                        <i className="fa-brands fa-github" style={{ color: '#fff' }}></i>
                    </div>
                    <div className="card-logo">
                        <i className="fa-brands fa-bootstrap" style={{ background: '#7512F3', color: '#fff' }}></i>
                    </div>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Portofolio