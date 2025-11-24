import {Outlet} from "react-router-dom";
import NavigationBar from "../components/common/navigation-bar.tsx";
import FloatingSocialMedia from "../components/common/floating-social-media.tsx";

const MainLayout = () => {
    return (
        <div className={"h-screen bg-white max-w-[100rem] m-auto"}>
            <NavigationBar/>
            <div className={"w-4/5 m-auto"}>
                <Outlet/>
            </div>
            <FloatingSocialMedia/>
        </div>
    );
};

export default MainLayout;