import GithubTransparent from "../../assets/common/github-transparent.png";
import type {IGithub} from "../../constants/projects.ts";

interface Props {
    githubs?: IGithub[];
}

const ProjectCardGithub = ({githubs}: Props) => {
    return (
        githubs ? (
            <div className={"flex gap-2"}>
                {githubs.map((github, index) => (
                    <a key={index} href={github.url} target={"_blank"}
                       className={"flex items-center gap-2"}>
                        <img src={GithubTransparent} alt={"GithubTransparent"} className={"w-4 h-4 cursor-pointer"}/>
                        <p className={"font-semibold text-gray-600"}>{github.title}</p>
                    </a>
                ))}
            </div>
        ) : (
            <div className={"flex items-center gap-2"}>
                <img src={GithubTransparent} alt={"GithubTransparent"} className={"w-4 h-4 cursor-pointer"}/>
                <p className={"font-semibold text-gray-600"}>Private Repository</p>
            </div>
        )
    );
};

export default ProjectCardGithub;