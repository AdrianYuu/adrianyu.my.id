import {Outlet} from "react-router-dom";
import NavigationBar from "../components/common/navigation-bar.tsx";
import Footer from "../components/common/footer.tsx";

const MainLayout = () => {
    return (
        <>
            <div className={"min-h-screen bg-white max-w-[120rem] m-auto"}>
                <div className={"w-4/5 m-auto"}>
                    <NavigationBar/>
                    <div className={"my-16"}>
                        <Outlet/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MainLayout;