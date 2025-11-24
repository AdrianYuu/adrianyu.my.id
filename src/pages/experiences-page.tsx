import {EXPERIENCES} from "../constants/experiences.ts";
import ExperienceCard from "../components/experiences/experience-card.tsx";
import {motion} from "motion/react";

const ExperiencesPage = () => {
    return (
        <motion.div className={"flex mt-8 pb-24"}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}>
            <div className={"bg-black w-[4px]"}/>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience}/>
                ))}
            </div>
        </motion.div>
    );
};

export default ExperiencesPage;