const ProjectComponents = ({ name, content, img }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div className="project-content">
        <div className="project-title">
          <p>{content}</p>
        </div>
        <div className="project-img">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};
export default ProjectComponents;
