import About from '@/components/sections/about';
import ConferenceOutputs from '@/components/sections/conference-outputs';
import ConferenceTracks from '@/components/sections/conference-track';
import Hero from '@/components/sections/hero';
import StrategicFrameworkSection from '@/components/sections/strategic-framework';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StrategicFrameworkSection />
      <ConferenceTracks />
      <ConferenceOutputs />
    </>
  );
}
