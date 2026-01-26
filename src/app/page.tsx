import About from '@/components/sections/about';
import Speakers from '@/components/sections/speakers';
import Tracks from '@/components/sections/tracks';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import StrategicFramework from '@/components/sections/strategic-framework';
import Outputs from '@/components/sections/outputs';
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
