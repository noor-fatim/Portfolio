import ProjectComponents from "./ProjectCompoents";

const Projects = () => {
  return (
    <div id="Projects" style={{ margin: "50px" }}>
      <h3>Projects</h3>
      <ProjectComponents
        name={"Todo list"}
        content={
          "This project is a simple and user-friendly web application built using HTML, CSS, JavaScript, and React. The app allows users to add and delete tasks, helping them manage their daily to-do lists. It uses React's state management to dynamically update the UI, providing a seamless and interactive experience. This project highlights my skills in component-based architecture, event handling, and efficient DOM manipulation."
        }
        img={"src/assets/ProjectTodo.jpg"}
      />

      <ProjectComponents
        name={"Web page"}
        content={
          "This web page, built with HTML, CSS, and JavaScript, showcases the details of a featured shoe. It includes an image, product name, description, and price, providing essential information in a clean layout."
        }
        img={"src/assets/projectPortfolio.png"}
      />

      <ProjectComponents
        name={"Contact Form"}
        content={
          "This project is a basic contact form created using HTML, CSS, JavaScript, and React. Users can fill in their name, email, and message, and upon clicking the submit button, the entered information is displayed at the bottom of the form. This interactive feature provides a straightforward way to see the submitted content without refreshing the page."
        }
        img={"src/assets/projectContactform.png"}
      />
    </div>
  );
};
export default Projects;
