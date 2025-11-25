interface Props {
    descriptions: string[]
}

const ProjectCardDescriptions = ({descriptions}: Props) => {
    return (
        <ul className={"list-disc pl-8 tracking-wider max-w-[70rem]"}>
            {descriptions.map((description, index) => (
                <li key={index}>{description}</li>
            ))}
        </ul>
    )
}

export default ProjectCardDescriptions;