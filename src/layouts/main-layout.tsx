import {Outlet} from "react-router-dom";
import NavigationBar from "../components/common/navigation-bar.tsx";
import Footer from "../components/common/footer.tsx";

const MainLayout = () => {
    return (
        <div className={"min-h-screen bg-white"}>
            <div className={"w-4/5 m-auto"}>
                <NavigationBar/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;