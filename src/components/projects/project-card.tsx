import type {IProject} from "../../constants/projects.ts";
import ProjectCardTechnologies from "./project-card-technologies.tsx";
import ProjectCardGithub from "./project-card-github.tsx";
import ProjectCardDemo from "./project-card-demo.tsx";
import ProjectCardPhotos from "./project-card-photos.tsx";

interface Props {
    project: IProject;
}

const ProjectCard = ({project}: Props) => {
    return (
        <div className={"flex flex-col gap-3"}>
            <p className={"text-4xl font-bold"}>{project.title}</p>
            <div className={"flex gap-2"}>
                <ProjectCardDemo demoUrl={project.demoUrl}/>
                <ProjectCardGithub githubs={project.githubs}/>
            </div>
            <ProjectCardPhotos photos={project.photos}/>
            <p className={"tracking-wider max-w-[70rem]"}>{project.description}</p>
            <ProjectCardTechnologies technologies={project.technologies}/>
        </div>
    );
};

export default ProjectCard;