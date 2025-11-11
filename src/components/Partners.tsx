import React, { useEffect, useRef, useState } from "react";

const Partners: React.FC = () => {
  const basePartners = [
    "Zurich",
    "Porto Seguro",
    "Liberty",
    "Mapfre",
    "Tokio Marine",
    "HDI",
    "Allianz",
    "Sompo",
    "Azul Seguros",
    "Bradesco",
  ];

  // duplicamos para criar o efeito de loop contínuo
  const partners = [...basePartners, ...basePartners];

  const containerRef = useRef<HTMLDivElement | null>(null);

  // pointer drag state
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  // controle de animação
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // velocidade em pixels por second (ajuste aqui)
  const desktopSpeed = 120; // px/s
  const mobileSpeed = 220; // px/s

  // inicia auto-scroll usando requestAnimationFrame
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getSpeed = () =>
      window.innerWidth < 640 ? mobileSpeed : desktopSpeed;

    const step = (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1700; // segundos
      lastTimeRef.current = time;

      if (!isInteracting) {
        const speed = getSpeed();
        el.scrollLeft += speed * delta;
      }

      // loop contínuo: quando passar a metade do scrollWidth, reset para o começo
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        // reduzir sem causar flicker visual: subtrai half
        el.scrollLeft = el.scrollLeft - half;
      } else if (el.scrollLeft <= 0) {
        // se por algum motivo voltar ao 0, empurra para metade
        el.scrollLeft = el.scrollLeft + half;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const handleResize = () => {
      // opcional: alinhar posição ao redimensionar para evitar "jump"
      lastTimeRef.current = null;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isInteracting]); // reinicia se isInteracting mudar

  // Pointer events: funcionam para mouse e touch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      isPointerDownRef.current = true;
      setIsInteracting(true);
      startXRef.current = e.clientX;
      startScrollLeftRef.current = el.scrollLeft;
      // capture the pointer to continue receiving events outside the element
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDownRef.current) return;
      e.preventDefault();
      const dx = e.clientX - startXRef.current;
      // sensibilidade
      const walk = dx * 1.2;
      el.scrollLeft = startScrollLeftRef.current - walk;
    };

    const onPointerUpOrCancel = (e: PointerEvent) => {
      isPointerDownRef.current = false;
      setIsInteracting(false);
      try {
        (e.target as Element).releasePointerCapture?.(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUpOrCancel);
    window.addEventListener("pointercancel", onPointerUpOrCancel);

    // prevent native drag image on some elements
    const imgs = el.querySelectorAll("img");
    imgs.forEach((img) => (img.draggable = false));

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUpOrCancel);
      window.removeEventListener("pointercancel", onPointerUpOrCancel);
    };
  }, []);

  // small helper: if container width changed and scrollLeft is tiny, set to center to avoid starting at 0
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // start in the middle to allow smooth negative/positive motion
    if (el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 4; // meio da primeira duplicata
    }
  }, []);

  return (
    <section className="py-16 bg-muted overflow-hidden select-none">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark text-center">
          Parceiros que <span className="text-secondary">Confiam em Nós</span>
        </h2>
      </div>

      {/* wrapper com overflow-x hidden para evitar mostrar bordas estranhas */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-4 no-scrollbar overflow-x-auto touch-pan-x cursor-grab active:cursor-grabbing px-4"
          // acessibilidade: allow keyboard arrow scroll
          tabIndex={0}
          onKeyDown={(e) => {
            const el = containerRef.current;
            if (!el) return;
            if (e.key === "ArrowRight") el.scrollLeft += 150;
            if (e.key === "ArrowLeft") el.scrollLeft -= 150;
          }}
        >
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 h-24 mx-2 sm:mx-4 mt-2 flex items-center justify-center"
            >
              <div className="w-full h-full bg-gradient-to-br from-white to-secondary/5 rounded-xl flex items-center justify-center border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-lg hover:-translate-y-1">
                <span className="text-lg font-semibold text-navy-dark whitespace-nowrap">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-foreground/60 mt-8 px-4">
        Trabalhamos com as maiores e mais confiáveis seguradoras do Brasil
      </p>


      {/* CTA Box */}
      <div className="mt-12 p-8 bg-gradient-to-r from-navy-dark to-accent rounded-2xl text-center animate-fade-in max-w-3xl md:mx-auto mx-4">
        <h3 className="text-2xl font-bold text-white mb-4">
          Pronto para ter a melhor proteção?
        </h3>
        <p className="text-white/90 mb-6">
          Junte-se a milhares de clientes que confiam na RDGO para cuidar do que mais importa.
        </p>
        <button
          onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
        >
          Começar Agora
        </button>
      </div>
    </section>
  );
};

export default Partners;
