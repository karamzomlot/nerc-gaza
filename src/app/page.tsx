import About from '@/components/sections/about';
import Speakers from '@/components/sections/speakers';
import Tracks from '@/components/sections/tracks';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import StrategicFramework from '@/components/sections/strategic-framework';
import Outputs from '@/components/sections/outputs';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <StrategicFramework />
      <Tracks />
      <Outputs />
      <Speakers />
      <Partners />
    </main>
  );
}
