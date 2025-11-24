import Signal from "../../assets/common/signal.png";

interface Props {
    demoUrl?: string;
}

const ProjectCardDemo = ({demoUrl}: Props) => {
    return (
        <>
            {demoUrl && (
                <a href={demoUrl} target={"_blank"} className={"flex items-center gap-2"}>
                    <img src={Signal} alt={Signal} className={"w-4 h-4"}/>
                    <p className={"font-semibold text-gray-600"}>Live Demo</p>
                </a>
            )}
        </>
    );
};

export default ProjectCardDemo;