import { useEffect } from "react";
import ProjectItem from "./ProjectItem";
import Details from "./Details";
import { ContextConsumer } from "../../Context/ContextConsumer";

export default function ProjectList() {

  const { Projects } = ContextConsumer();

  useEffect(() => {
    const projectItems = document.querySelectorAll(".project-item, .project-item-2");

    const observer = new IntersectionObserver(entries => {

      entries.forEach(
        ({ isIntersecting, target }) => {

          const title = target.querySelector('.title-project');
          const image_project = target.querySelector('.image_project')
          const subtitle_project = target.querySelector('.subtitle-project')
          const p = target.querySelector('p')
          const button = target.querySelector("button")
          const isProjectItem = target.classList.contains('project-item')

          if (isIntersecting) {
            target.style.background = "rgb(24, 24, 24)"
            title.style.opacity = 1
            title.style.transform = "translateY(0%)"
            image_project.style.opacity = 1;
            image_project.style.transform = "translateX(100%)";
            image_project.style.animation = `${isProjectItem ? "show_image_project_1" : "show_image_project_2"} 0.5s forwards`
            subtitle_project.style.transform = "scale(1)"
            p.style.opacity = 1;
            p.style.transform = "translateY(0%)"
            button.style.opacity = 1;
            button.style.transform = "translateY(0%)"
          } else {
            target.style.background = "transparent"
            title.style.opacity = 0
            title.style.transform = "translateY(-50%)"
            image_project.style.opacity = 0;
            image_project.style.transform = `${isProjectItem ? "translateX(-100%)" : "translateX(100%)"}`
            image_project.style.animation = '';
            subtitle_project.style.transform = "scale(0)"
            p.style.opacity = 0;
            p.style.transform = "translateY(20%)"
            button.style.opacity = 0;
            button.style.transform = "translateY(100%)"
          }
        },
        {
          root: null,
          rootMargin: '1px',
          threshold: 1
        }
      );
    });

    projectItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      projectItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
      <div className="proyectos">
        {
          Projects.map((project, index) => <ProjectItem key={project._id} Project={project} Index={index} />)
        }
      </div>
      <Details />
    </>
  )
}