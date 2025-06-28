import '../styles/Hero.css';
import profileImg from '../assets/photo.jpg';

const Hero = () => (
    <section id="home" className="hero">
        <div className="hero-container">
            <div className="hero-text">
                <h1>Hi, I'm Gourab Dutta</h1>
                <h3>Full Stack Developer • GenAI Enthusiast</h3>
                <p className="hero-tagline">I build scalable full-stack applications using the MERN stack and love solving real-world problems.</p>

                <a href="/resume.pdf" className="download-btn" download>📄 Download Resume</a>
            </div>
            <div className="hero-image">
                <img src={profileImg} alt="Gourab Dutta" />
            </div>
        </div>
    </section>


);

export default Hero;