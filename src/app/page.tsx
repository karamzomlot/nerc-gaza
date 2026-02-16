import About from '@/components/home/about';
import Speakers from '@/components/home/speakers';
import Tracks from '@/components/home/tracks';
import Hero from '@/components/home/hero';
import Partners from '@/components/home/partners';
import StrategicFramework from '@/components/home/strategic-framework';
import Outputs from '@/components/home/outputs';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <StrategicFramework />
        <Tracks />
        <Outputs />
        <Speakers />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
