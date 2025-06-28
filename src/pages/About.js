import '../styles/About.css';
import devActivity from '../assets/devActivity.svg';

const About = () => (
    <section id="about" className="about-section">
        <div className="about-container">
            <div className="about-image">
                <img src={devActivity} alt="Developer illustration" />
            </div>
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I'm Gourab Dutta — a Full Stack Developer passionate about solving problems with the MERN stack.
                </p>
                <p>
                    From writing clean backend APIs to crafting responsive user interfaces, I love building things that work and scale.
                </p>
                <div className="about-quote">
                    <blockquote>
                        “Programming isn't about what you know; it’s about what you can figure out.” — Chris Pine
                    </blockquote>
                </div>
            </div>
        </div>
    </section>

);

export default About;
