import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar } from "lucide-react";
import Preloader from "@/components/Preloader";

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setIsFading(false);

      try {
        const feeds = [
          "https://cqcs.com.br/feed/",
          "https://www.infomoney.com.br/feed/",
          "https://revistaapolice.com.br/feed/"
        ];

        const all = await Promise.all(
          feeds.map(async (url) => {
            const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
            const data = await res.json();
            return data.items.slice(0, 2).map((item) => ({
              title: item.title,
              description: item.description.replace(/<[^>]+>/g, ""),
              link: item.link,
              date: new Date(item.pubDate).toLocaleDateString("pt-BR"),
              source: data.feed.title,
            }));
          })
        );

        setNewsItems(all.flat());

        // 🔥 inicia animação de saída
        setIsFading(true);

        // 🔥 desliga só DEPOIS da animação
        setTimeout(() => setLoading(false), 500);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);


  if (loading) {
    return (
      <section id="news" className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
              Notícias e <span className="text-secondary">Atualizações</span>
            </h2>
            <p className="text-xl text-foreground/70">
              Fique por dentro das últimas novidades do mercado de seguros
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-background">
          <Preloader />
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Notícias e <span className="text-secondary">Atualizações</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Fique por dentro das últimas novidades do mercado de seguros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className={`
        hover-lift cursor-pointer group 
        bg-gradient-to-br from-white to-accent/5 
        border-l-4 border-accent/30 hover:border-accent 
        shadow-medium hover:shadow-strong 
        
        opacity-0 translate-y-4 
        animate-[fadeUp_0.6s_ease-out_forwards] 
      `}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
              onClick={() => window.open(item.link, "_blank")}
            >

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {item.source}
                  </span>
                  <ExternalLink className="h-4 w-4 text-foreground/40 group-hover:text-secondary transition-colors" />
                </div>
                <CardTitle className="text-xl text-navy-dark group-hover:text-secondary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 line-clamp-3">
                  {item.description}
                </CardDescription>
                <div className="flex items-center text-sm text-foreground/60">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-foreground/60 mt-8">
          * Conteúdo agregado automaticamente de fontes confiáveis do mercado de seguros
        </p>
      </div>
    </section>
  );
};

export default News;
