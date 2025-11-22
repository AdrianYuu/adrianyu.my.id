import {NavLink} from "react-router-dom";
import ROUTES from "../../constants/routes.ts";

const NavigationBar = () => {
    return (
        <div className={"flex gap-16 justify-center p-8"}>
            {ROUTES.map(route => (
                <NavLink to={route.to}
                         className={"hover:underline font-semibold text-md text-[var(--color-primary)]"}>{route.label}</NavLink>
            ))}
        </div>
    );
};

export default NavigationBar;