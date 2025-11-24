import {motion} from "motion/react";
import AdrianYu from "../assets/home/adrian-yu.png";

const HomePage = () => {
    return (
        <motion.div className={"flex gap-24 mt-36"}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}>
            <div className={"flex flex-col gap-8 justify-center"}>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-8xl font-bold tracking-wide"}>Adrian Yu</p>
                    <p className={"text-lg tracking-wider"}>Hi! I'm a software engineer who loves turning ideas into
                        real,
                        functional
                        software. I enjoy learning new technologies and building things with clean, thoughtful code.</p>
                </div>
                <div>
                    <a href={""}
                       className={"bg-black text-white px-6 py-3 rounded-md font-semibold cursor-pointer hover:opacity-90"}>View
                        My Resume</a>
                </div>
            </div>
            <img src={AdrianYu} alt="AdrianYu" className={"w-[30rem] rounded-2xl shadow-lg"}/>
        </motion.div>
    );
};

export default HomePage;