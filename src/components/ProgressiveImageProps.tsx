import { useState, useEffect } from "react";

interface ProgressiveImageProps {
    src: string;
    placeholder: string;
    className?: string;
}

const ProgressiveImage = ({ src, placeholder, className }: ProgressiveImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(placeholder);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setLoaded(true);
        };
    }, [src]);

    return (
        <img
            src={imageSrc}
            className={`${className} transition-all duration-700 ${loaded ? "blur-0 opacity-100" : "blur-xl opacity-80"}`}
            alt=""
        />
    );
};

export default ProgressiveImage;
