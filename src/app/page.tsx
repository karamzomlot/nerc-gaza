import About from '@/components/sections/about';
import ConferenceEvents from '@/components/sections/conference-events';
import Tracks from '@/components/sections/tracks';
import Hero from '@/components/sections/hero';
import Partners from '@/components/sections/partners';
import StrategicFramework from '@/components/sections/strategic-framework';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <StrategicFramework />
      <Tracks />
      {/* <ConferenceOutputs /> */}
      <ConferenceEvents />
      <Partners />
    </main>
  );
}
