const ProjectCard = ({ project }) => (
    <div class="project-card">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.github} target="_blank">Github</a>
        <a href={project.live} target="_blank">Live</a>
    </div>
);

export default ProjectCard;