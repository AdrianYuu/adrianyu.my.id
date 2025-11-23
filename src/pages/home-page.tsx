import {motion} from "motion/react"

const HomePage = () => {
    return (
        <motion.div
            className={"flex justify-between"}
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className={"flex flex-col gap-4 justify-center"}>
                <p className={"text-8xl font-bold"}>Adrian Yu</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sapiente!</p>
            </div>
            <img src="placeholder.jpg" alt="placeholder" className={"w-[30rem] h-[30rem]"}/>
        </motion.div>
    );
};

export default HomePage;