import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={"flex items-center gap-2 flex-col"}>
            <p className={"font-semibold text-xl"}>
                Not Found
            </p>
            <Link to="/" className="hover:underline">
                Back To Home
            </Link>
        </div>
    );
};

export default NotFoundPage;