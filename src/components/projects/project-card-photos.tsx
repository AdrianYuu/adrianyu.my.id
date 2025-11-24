import {useState} from "react";

interface Props {
    photos: string[];
}

const ProjectCardPhotos = ({photos}: Props) => {
    const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

    return (
        <div className="flex gap-4">
            <img
                src={photos[activePhotoIndex]}
                alt="ProjectPhoto"
                className="w-[70rem] h-[40rem] rounded-xl shadow-lg"
            />

            <div className="flex flex-col gap-3">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt="ProjectPhoto"
                        onClick={() => setActivePhotoIndex(index)}
                        className={`h-26 object-cover rounded-xl cursor-pointer transition-all
                        ${index !== activePhotoIndex ? "opacity-60 hover:opacity-100" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCardPhotos;
