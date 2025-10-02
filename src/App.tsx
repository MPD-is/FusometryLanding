import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { EngineeringAdvantages } from './components/EngineeringAdvantages';
import { Results } from './components/Results';
import { TechnicalSpecifications } from './components/TechnicalSpecifications';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { OnePager } from './components/OnePager';

function App() {
  useEffect(() => {
    document.title = 'Fusometry CT - Desktop Industrial CT Scanner';
  }, []);

  const isOnePagerRoute = window.location.pathname === '/onepager';
  const urlParams = new URLSearchParams(window.location.search);
  const showPatent = urlParams.get('patent') === 'true';

  if (isOnePagerRoute) {
    return <OnePager showPatentPending={showPatent} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <EngineeringAdvantages />
        <Results />
        <TechnicalSpecifications />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
