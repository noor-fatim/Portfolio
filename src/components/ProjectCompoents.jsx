const ProjectComponents = ({ name, content, img, link }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div className="project-content">
        <div className="project-title">
          <p>{content}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Github Link
          </a>
        </div>
        <div className="project-img">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};
export default ProjectComponents;
