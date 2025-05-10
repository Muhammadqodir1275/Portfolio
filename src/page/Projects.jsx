import React from 'react'
import '../style/Projects.css'
import xotira from '../img/xotiraoyini.jpg'
import velosiped from '../img/velosiped.webp'
import kopyuter from '../img/kampyuter.jpg'
import list from '../img/todolist.jpg'
import mode from '../img/darkmode.png'
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "flappy Bird",
            description: "Interaktiv bloklar bilan ishlash va vizual interfeys yaratish uchun platforma.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oQ3DO8uqV-wK9DJmLdHNqiod2HqjfZrTdQ&s",
            url: "https://mega-block.vercel.app/",
        },
        {
            id: 2,
            title: "Xotira O‘yini",
            description: "Eslab qolish va diqqatni jamlashga yordam beruvchi interaktiv o‘yin.",
            image: xotira,
            url: "https://xotira-o-yini.vercel.app/",
        },
        {
            id: 3,
            title: "Ride Ready",
            description: "Sayohatchilar va haydovchilar uchun maxsus xizmatlar taqdim etuvchi platforma.",
            image: velosiped,
            url: "https://ride-ready-zeta.vercel.app/",
        },
        {
            id: 4,
            title: "Komp’yuterlar",
            description: "Komp’yuterlar haqida to‘liq ma’lumot beruvchi veb-sayt.",
            image: kopyuter,
            url: "https://kampyuterlar.vercel.app/",
        },
        {
            id: 5,
            title: "To-do List",
            description: "Vazifalarni boshqarish va kunlik rejalashtirish uchun ilova.",
            image: list,
            url: "https://todolist-green-eight-76.vercel.app/",
        },
        {
            id: 6,
            title: "Dak Mode",
            description: "Tungi rejimli zamonaviy dizayn bilan jihozlangan chat ilovasi.",
            image: mode,
            url: "https://dak-mode.vercel.app/",
        },
    ];

    return (
        <div className='Project' id='projects'>
            <div className="lohyihalr">
            <div className="for">
                <h1>Men Yaratgan Loyihalar</h1>
                <p>Hozirgacha yaratgan ishlanmalarim</p>
            </div>
            </div>
            <div className="Project_cards">
                {projects.map((project) => (
                    <div className="card" key={project.id}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button onClick={() => window.location.href = project.url}>Ko`rish</button>
                    </div>
                ))}
            </div>
            <div className="pavangar">
                <div className="vies">
                    <h1>{'{ 007 }'}</h1>
                    <h1>pavanmg</h1>
                </div>
                <div className="pre">
                    <p>+998 90 123 45 67</p>
                    <p>muhammadqodir@gmail.com</p>
                    <div className="icon">
                    <i className="fa-brands fa-github" style={{color: '#fff'}}></i>
                    <i className="fa-brands fa-linkedin" style={{color: '#fff'}}></i>
                    <i className="fa-brands fa-instagram" style={{color: '#fff'}}></i>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;
