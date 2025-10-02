import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-150 ${
        scrolled ? 'border-b border-gray-200 shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight text-gray-900">
          Fusometry
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection('engineering-advantages')}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            Engineering Advantages
          </button>
          <button
            onClick={() => scrollToSection('results')}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            Results
          </button>
          <button
            onClick={() => scrollToSection('specifications')}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            Technical Specifications
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
