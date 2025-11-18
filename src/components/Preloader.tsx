import { useEffect, useState } from "react";
import logoPB from "@/assets/logo-rdgo-pb2.webp";
import logoColorida from "@/assets/logo-rdgo2.webp";

const Preloader = ({ sectionHeight = "400px" }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // tempo artificial de carregamento (simulação)
        const timer = setTimeout(() => setLoaded(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`relative flex items-center justify-center overflow-hidden bg-white transition-all duration-700 ${loaded ? "opacity-0 h-0 pointer-events-none" : "opacity-100"
                }`}
            style={{ height: sectionHeight }}
        >
            <div className="relative w-40 h-40 md:w-56 md:h-56">
                {/* Logo PB (base) */}
                <img
                    src={logoPB}
                    alt="RDGO Logo PB"
                    className="absolute inset-0 w-full h-full object-contain"
                />

                {/* Logo colorida com animação looping */}
                <img
                    src={logoColorida}
                    alt="RDGO Logo Colorida"
                    className="absolute inset-0 w-full h-full object-contain animate-logo-fill-loop"
                />
            </div>
        </div>
    );
};

export default Preloader;
