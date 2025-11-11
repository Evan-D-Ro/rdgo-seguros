import equipeImg from "@/assets/equipe.jpg";
import fachadaImg from "@/assets/fachada.png";

const Videos = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Uma equipe jovem, enérgica e comprometida em oferecer a melhor experiência em seguros
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Videos Photo */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={equipeImg}
              alt="Equipe RDGO Seguros"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Nossa Equipe
                </h3>
                <p className="text-primary-foreground/90">
                  Profissionais dedicados ao seu atendimento
                </p>
              </div>
            </div>
          </div>

          {/* Facade Photo */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={fachadaImg}
              alt="Sede RDGO Seguros"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Nossa Sede
                </h3>
                <p className="text-primary-foreground/90">
                  Estrutura moderna em Presidente Prudente/SP
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Atendimento em Todo Brasil</h3>
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
