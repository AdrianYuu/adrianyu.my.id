import {useState} from "react";
import {MAX_VISIBLE_PHOTOS} from "../../configs/photos.ts";
import PhotosModal from "./photos-modal.tsx";

interface Props {
    photos: string[];
}

const ProjectCardPhotos = ({photos}: Props) => {
    const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
    const remainingPhotos = photos.length - MAX_VISIBLE_PHOTOS;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div className="flex gap-4">
            <img
                src={photos[activePhotoIndex]}
                alt="ProjectPhoto"
                className="w-[70rem] h-full object-cover rounded-xl shadow-lg"
            />

            <div className="hidden lg:flex flex-col gap-3 ">
                {photos
                    .slice(0, MAX_VISIBLE_PHOTOS)
                    .map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt="ProjectPhoto"
                            onClick={() => setActivePhotoIndex(index)}
                            className={`
                            h-28 object-cover rounded-xl cursor-pointer transition-all
                            ${index !== activePhotoIndex ? "opacity-60 hover:opacity-100" : ""}
                        `}
                        />
                    ))}

                {remainingPhotos > 0 && (
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className="h-28 bg-black rounded-xl cursor-pointer flex justify-center items-center opacity-60 hover:opacity-100"
                    >
                        <p className="text-xl text-white">+{remainingPhotos}</p>
                    </div>
                )}

                {isModalOpen && (
                    <PhotosModal photos={photos} onModalClose={() => setIsModalOpen(false)}/>
                )}
            </div>
        </div>
    );
};

export default ProjectCardPhotos;
