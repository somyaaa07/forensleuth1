import Navbar from '@/component/Navbar';
import Hero from '@/component/Hero';
import Services from '@/component/Service';
import Gallery from '@/component/Gallery';
import CaseStudies from '@/component/CaseStudies';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import Banner from '@/component/Banner';
import Testimonals from '@/component/Testimonal';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Banner/>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <CaseStudies />
      <Testimonals/>
      <Contact />
      <Footer />
    </main>
  );
}