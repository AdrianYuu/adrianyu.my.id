import {NavLink, useLocation} from "react-router-dom";
import ROUTES from "../../constants/routes.ts";

const NavigationBar = () => {
    const {pathname} = useLocation();

    return (
        <div className={"flex gap-12 justify-center p-8 sticky top-0 z-50 bg-white"}>
            {ROUTES.map((route, index) => (
                <NavLink
                    key={index}
                    to={route.to}
                    className={`text-xl
                        ${pathname === route.to ? "font-semibold underline" : "opacity-75"}`
                    }
                >
                    {route.label}
                </NavLink>
            ))}
        </div>
    );
};

export default NavigationBar;