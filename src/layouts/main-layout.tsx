import {Outlet} from "react-router-dom";
import NavigationBar from "../components/common/navigation-bar.tsx";
import {motion} from "motion/react";
import FloatingSocialMedia from "../components/common/floating-social-media.tsx";

const MainLayout = () => {
    return (
        <div className={"h-screen bg-white max-w-[100rem] m-auto"}>
            <NavigationBar/>
            <div className={"w-4/5 m-auto"}>
                <motion.div
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}>
                    <Outlet/>
                </motion.div>
            </div>
            <FloatingSocialMedia/>
        </div>
    );
};

export default MainLayout;