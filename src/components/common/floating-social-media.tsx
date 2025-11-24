import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";

const FloatingSocialMedia = () => {
    return (
        <div className={"fixed top-1/2 left-8 flex flex-col gap-4"}>
            <a href="https://www.linkedin.com/in/adrian-yu1/" target={"_blank"}>
                <img src={Linkedin} alt={"Linkedin"} className={"w-8 h-8 cursor-pointer"}/>
            </a>
            <a href="https://github.com/AdrianYuu" target={"_blank"}>
                <img src={Github} alt={"Github"} className={"w-8 h-8 cursor-pointer"}/>
            </a>
            <a href="https://www.instagram.com/adrian.yu_/" target={"_blank"}>
                <img src={Instagram} alt={"Instagram"} className={"w-8 h-8 cursor-pointer"}/>
            </a>
        </div>
    );
};

export default FloatingSocialMedia;