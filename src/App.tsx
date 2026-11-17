import { About } from './components/About';
import { Awards } from './components/Awards';
import { FadeIn } from './components/FadeIn';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OrganizerGrid } from './components/OrganizerGrid';
import { Rules } from './components/Rules';
import { SponsorGrid } from './components/SponsorGrid';
import { Timeline } from './components/Timeline';
import { Tracks } from './components/Tracks';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Tracks />
        </FadeIn>
        <FadeIn>
          <Timeline />
        </FadeIn>
        <FadeIn>
          <Awards />
        </FadeIn>
        <FadeIn>
          <SponsorGrid />
        </FadeIn>
        <FadeIn>
          <FAQ />
        </FadeIn>
        <FadeIn>
          <Rules />
        </FadeIn>
        <FadeIn>
          <OrganizerGrid />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
