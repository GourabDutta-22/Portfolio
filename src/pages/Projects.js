import ProjectCard from "../components/ProjectCard.js";
import '../styles/Projects.css';

const projectList = [
  {
    name: "Wanderlust",
    description:
      "Wanderlust is a full-stack travel web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to explore destinations, manage bookings, and create custom trip plans — all using locally managed data without any third-party API integrations. The project focuses on core backend and frontend functionality, user experience, and clean UI/UX design. It also includes authentication, admin controls, and interactive user features like reviews and ratings.",
    github: "https://github.com/GourabDutta-22/WanderLust_Web_Application",
    live: "https://wanderlust-web-application-k41c.onrender.com/listings",
  },
  {
    name: "Weather App",
    description:
      "The Weather App is a responsive React.js application that allows users to search for any city and view the current weather conditions. It fetches real-time weather data using the OpenWeatherMap API and displays temperature, humidity, weather status, and location details. This project demonstrates the use of React hooks (useState, useEffect), conditional rendering, and API integration. The UI is clean, simple, and user-friendly.",
    github: "https://github.com/GourabDutta-22/Weather_Web_App",
    live: "https://weather-web-app-e71a.onrender.com",
  }
];

const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projectList.map((proj, i) => (
        <ProjectCard key={i} project={proj} />
      ))}
    </div>
  </section>
);

export default Projects;
