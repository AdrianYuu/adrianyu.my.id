import {useState} from "react";

interface Props {
    photos: string[];
}

const ProjectCardPhotos = ({photos}: Props) => {
    const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

    return (
        <div className={"flex gap-2"}>
            <img
                src={photos[activePhotoIndex]}
                alt={"ProjectPhoto"}
                className={"w-[65rem]"}
                key={activePhotoIndex}
            />
            <div className={"flex flex-col gap-2"}>
                {photos
                    .slice(0, 5)
                    .map((photo, index) =>
                            index !== activePhotoIndex && (
                                <img
                                    key={index}
                                    src={photo}
                                    alt="ProjectPhoto"
                                    onClick={() => setActivePhotoIndex(index)}
                                    className={"cursor-pointer hover:opacity-80 transition-opacity"}
                                />
                            )
                    )}
            </div>
        </div>
    );
};

export default ProjectCardPhotos;