import {motion} from "motion/react";
import {PROJECTS} from "../constants/projects.ts";
import ProjectCard from "../components/projects/project-card.tsx";
import {useState} from "react";
import {ProjectType} from "../constants/project-type.ts";

const ProjectsPage = () => {
    const [projectType, setProjectType] = useState<string>(ProjectType.PROFESSIONAL);

    return (
        <motion.div
            className={"flex mt-8 pb-24 flex-col gap-12"}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}>
            <div className={"flex gap-8 justify-center"}>
                <button
                    onClick={() => setProjectType(ProjectType.PROFESSIONAL)}
                    className={
                        `cursor-pointer
                        ${projectType === ProjectType.PROFESSIONAL ? "font-semibold underline" : "opacity-75"}`
                    }
                >
                    Professional
                </button>
                <button
                    onClick={() => setProjectType(ProjectType.PERSONAL)}
                    className={
                        `cursor-pointer
                        ${projectType === ProjectType.PERSONAL ? "font-semibold underline" : "opacity-75"}`
                    }
                >
                    Personal
                </button>
            </div>
            <motion.div
                key={projectType}
                className={"flex flex-col gap-10"}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}>
                {PROJECTS
                    .filter(project => project.type === projectType)
                    .map((project) => (
                        <ProjectCard key={project.title} project={project}/>
                    ))}
            </motion.div>
        </motion.div>
    );
};

export default ProjectsPage;