import {useState, useEffect} from "react";
import {MAX_VISIBLE_PHOTOS} from "../../configs/photos.ts";
import {ChevronLeft, ChevronRight, X} from "lucide-react";

interface Props {
    photos: string[];
    onModalClose: () => void;
}

const PhotosModal = ({photos, onModalClose}: Props) => {
    const [activePhotoIndex, setActivePhotoIndex] = useState<number>(MAX_VISIBLE_PHOTOS);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft" && activePhotoIndex > 0) {
                setActivePhotoIndex(activePhotoIndex - 1);
            } else if (event.key === "ArrowRight" && activePhotoIndex < photos.length - 1) {
                setActivePhotoIndex(activePhotoIndex + 1);
            } else if (event.key === "Escape") {
                onModalClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activePhotoIndex, onModalClose, photos.length]);

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col justify-center items-center gap-2">
            <div className={"flex items-center justify-center gap-4"}>
                <ChevronLeft
                    size={48}
                    color="white"
                    className={`${activePhotoIndex > 0 ? "cursor-pointer hover:opacity-70" : "opacity-0"}`}
                    onClick={() => activePhotoIndex > 0 && setActivePhotoIndex(activePhotoIndex - 1)}
                />
                <button
                    onClick={onModalClose}
                    className="absolute top-4 right-4 text-white hover:opacity-70 transition cursor-pointer"
                >
                    <X size={32}/>
                </button>
                <img
                    src={photos[activePhotoIndex]}
                    alt="ProjectPhoto"
                    className="max-w-[80vw] max-h-[70vh] w-auto h-auto object-contain rounded-xl select-none pointer-events-none"
                />
                <ChevronRight
                    size={48}
                    color="white"
                    className={`${activePhotoIndex < photos.length - 1 ? "cursor-pointer hover:opacity-70" : "opacity-0"}`}
                    onClick={() => activePhotoIndex < photos.length - 1 && setActivePhotoIndex(activePhotoIndex + 1)}
                />
            </div>
            <div className={"bg-black/80 px-4 py-2 rounded-md w-30 text-center"}>
                <p className={"text-white font-semibold"}>
                    {activePhotoIndex + 1} / {photos.length}
                </p>
            </div>
        </div>
    );
};

export default PhotosModal;