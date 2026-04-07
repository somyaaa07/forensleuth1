import Navbar from '@/component/Navbar';
import Hero from '@/component/Hero';
import Services from '@/component/Service';
import Gallery from '@/component/Gallery';
import CaseStudies from '@/component/CaseStudies';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}