import TechnologyBadge from "./technology-badge.tsx";

interface Props {
    technologies: string[];
}

const ProjectCardTechnologies = ({technologies}: Props) => {
    return (
        <div className={"flex gap-2 flex-wrap max-w-[70rem]"}>
            {technologies.map((technology, index) => (
                <TechnologyBadge key={index} name={technology}/>
            ))}
        </div>
    );
};

export default ProjectCardTechnologies;