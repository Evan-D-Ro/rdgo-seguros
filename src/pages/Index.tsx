import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Partners from "@/components/Partners";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Partners />
      <Testimonials />

      <News />
      <Videos />
      <FAQ />
      <QuoteForm />

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
