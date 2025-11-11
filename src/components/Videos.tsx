import { useState } from "react";
import { Play } from "lucide-react";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";

const Videos = () => {
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Textura de fundo suave */}
      <div className="absolute inset-0 opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Conheça <span className="text-secondary">Nossa Estrutura</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Uma equipe jovem, enérgica e comprometida em oferecer a melhor experiência em seguros
          </p>
        </div>

        {/* Grid vertical */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[9/16] bg-black">
            {play1 ? (
              <video
                src={video1}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                // **ADICIONADO:** Ao terminar o vídeo, define play1 como false
                onEnded={() => setPlay1(false)}
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setPlay1(true)}
              >
                {/* Thumbnail (primeiro frame do vídeo ou imagem estática se quiser) */}
                <video
                  src={video1}
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Gradiente + botão play */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center">
                  <button
                    className="bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition"
                    aria-label="Assistir vídeo"
                  >
                    <Play size={40} fill="white" />
                  </button>
                  <h3 className="text-xl font-bold mt-4">Imprevistos acontecem,</h3>
                  <p className="text-sm text-white/80">
                    esteja seguro com a RDgo!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[9/16] bg-black">
            {play2 ? (
              <video
                src={video2}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                // **ADICIONADO:** Ao terminar o vídeo, define play2 como false
                onEnded={() => setPlay2(false)}
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setPlay2(true)}
              >
                <video
                  src={video2}
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center">
                  <button
                    className="bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition"
                    aria-label="Assistir vídeo"
                  >
                    <Play size={40} fill="white" />
                  </button>
                  <h3 className="text-xl font-bold mt-4">RDgo!</h3>
                  <p className="text-sm text-white/80 text-center mx-4">
                    A segurança que você precisa com o cuidado que você merece.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bloco final */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-3">Atendimento em Todo Brasil</h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Mesmo com sede em São Paulo, nossa operação digital permite atender clientes em todo o território nacional com a mesma qualidade e agilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;