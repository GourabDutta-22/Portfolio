const ProjectCard = ({ project }) => (
    <div class="project-card">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.github} >Github</a>
        <a href={project.live} >Live</a>
    </div>
);

export default ProjectCard;