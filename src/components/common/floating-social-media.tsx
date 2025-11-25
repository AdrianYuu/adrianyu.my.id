import Github from "../../assets/common/github.png";
import Linkedin from "../../assets/common/linkedin.png";
import Email from "../../assets/common/email.png";

const FloatingSocialMedia = () => {
    return (
        <div
            className="
                fixed
                bottom-4 left-1/2 -translate-x-1/2
                lg:top-1/2 lg:bottom-auto lg:left-4 lg:-translate-x-0 lg:-translate-y-1/2
                flex lg:flex-col gap-2
            "
        >
            <a href="https://www.linkedin.com/in/adrian-yu1/" target="_blank">
                <img src={Linkedin} alt="Linkedin" className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="https://github.com/AdrianYuu" target="_blank">
                <img src={Github} alt="Github" className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="mailto:adrian.yu001@gmail.com" target="_blank">
                <img src={Email} alt="Email" className="w-8 h-8 cursor-pointer"/>
            </a>
        </div>
    );
};

export default FloatingSocialMedia;
