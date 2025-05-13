import '../style/Projects.css'
import xotira from '../img/xotiraoyini.jpg'
import velosiped from '../img/velosiped.webp'
import kopyuter from '../img/kampyuter.jpg'
import list from '../img/todolist.jpg'
import mode from '../img/darkmode.png'
import { Link } from 'react-router-dom'
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
                </div>
            </div>
            <div className="Project_cards">
                {projects.map((project) => (
                    <div className="card" key={project.id}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="btn-danger">
                            <button onClick={() => window.open(project.url, 'newWindow')}>Ko`rish
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.770577 1.60785C0.770756 1.33366 0.884719 1.07075 1.08744 0.876871C1.29015 0.682991 1.56505 0.573995 1.85173 0.573824L10.5214 0.573825C10.808 0.573996 11.0829 0.682992 11.2857 0.876873C11.4884 1.07075 11.6023 1.33366 11.6025 1.60785L11.6025 9.89958C11.5925 10.1675 11.4742 10.4213 11.2726 10.6076C11.071 10.7939 10.8017 10.8981 10.5214 10.8985C10.241 10.8981 9.97176 10.7939 9.77014 10.6076C9.56852 10.4213 9.45026 10.1675 9.44021 9.89958L9.44021 4.10512L1.85173 11.3628C1.64885 11.5569 1.37368 11.6659 1.08676 11.6659C0.799846 11.6659 0.524678 11.5569 0.321797 11.3628C0.118914 11.1688 0.00493742 10.9056 0.00493742 10.6312C0.00493707 10.3568 0.118914 10.0936 0.321796 9.89958L7.91027 2.64188L1.85173 2.64188C1.56505 2.64171 1.29015 2.53271 1.08744 2.33883C0.88472 2.14495 0.770756 1.88204 0.770577 1.60785Z" fill="white" />
                                </svg>
                            </button>
                        </div>

                    </div>
                ))}
            </div>


            <footer className="footer" id='footer'>
                <div className="footer-container">

                    <div className="footer-section">
                        <h3>Men haqimda</h3>
                        <ul>
                            <li>Men chiroyli va funksional vebsaytlar yaratishga qiziqqan front-end dasturchiman.</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Men bilan bog‘lanish</h3>
                        <ul>
                            <li><i className="fa-solid fa-phone"></i> +998 90 123 45 67</li>
                            <li><i className="fa-solid fa-envelope"></i> Muhammadqodir@gmail.com</li>
                            <li><i className="fa-solid fa-location-dot"></i> O‘zbekiston, Andijon</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Ijtimoiy tarmoqlar</h3>
                        <div className="footer-social">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/?locale=ru_RU">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/boruto_uzbektilida/?next=%2F">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://t.me/Muhammadqodir1275">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                            <a href="https://github.com/Muhammadqodir1275">
                                <i className="fa-brands fa-github" style={{ color: '#fff' }}></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Barcha huquqlar himoyalangan</p>
                </div>
            </footer>


        </div>
    );
}

export default Projects;
