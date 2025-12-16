import {motion} from "motion/react";
import AdrianYu from "../assets/home/adrian-yu.webp";

const HomePage = () => {
    return (
        <motion.div className={"flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-16 mt-12 lg:mt-28 pb-24"}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}>
            <div className={"flex flex-col gap-6 lg:gap-4 justify-center"}>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-6xl text-center lg:text-left lg:text-8xl font-bold tracking-wide"}>Adrian Yu</p>
                    <p className={"text-md text-center lg:text-left lg:text-lg tracking-wider"}>Hi! I'm a software
                        engineer who loves turning ideas into
                        real,
                        functional
                        software. I enjoy learning new technologies and building things with clean, thoughtful code.</p>
                </div>
                <div className={"flex justify-center lg:justify-start"}>
                    <a href={"Resume_Adrian_Yu.pdf"} target={"_blank"}
                       className={"bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md font-semibold cursor-pointer hover:opacity-90"}>View
                        My Resume</a>
                </div>
            </div>
            <img src={AdrianYu} alt="AdrianYu" className={"w-[30rem] rounded-2xl"}/>
        </motion.div>
    );
};

export default HomePage;