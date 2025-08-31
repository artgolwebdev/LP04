import { HeroSection } from './components/HeroSection'
import { MusicSection } from './components/MusicSection'
import { ImageSlider } from './components/ImageSlider'
import { AboutSection } from './components/AboutSection'
import { BookingSection } from './components/BookingSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MusicSection />
      <ImageSlider />
      <AboutSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}