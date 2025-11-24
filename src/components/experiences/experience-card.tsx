import type {IExperience} from "../../constants/experiences.ts";

interface Props {
    experience: IExperience;
}

const ExperienceCard = ({experience}: Props) => {
    return (
        <div className={"flex gap-2 relative"}>
            <div className={"absolute left-[-8.4px] top-[28px] bg-white border-2 border-black rounded-xl w-4 h-4"}/>
            <div className={"flex flex-col gap-2 rounded-xl p-4 ps-6"}>
                <div className={"flex flex-col gap-1"}>
                    <p className={"text-3xl font-bold"}>{experience.title}</p>
                    <p className={"font-semibold"}>{experience.company}</p>
                    <div>
                        <p className={"text-gray-600"}>{experience.start} - {experience.end}</p>
                        <p className={"text-gray-600"}>{experience.location}</p>
                    </div>
                </div>
                <ul className={"list-disc pl-8"}>
                    {experience.descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;