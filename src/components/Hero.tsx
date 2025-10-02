export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none scan-beam"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
          Desktop industrial CT, engineered for production.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
          Operator-first control, local processing, and industrial safety, without the cloud or complexity.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Request a private demo
        </button>

        <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500 flex items-center justify-center gap-3 flex-wrap">
          <span>Built in New Jersey</span>
          <span className="text-gray-300">•</span>
          <span>Pilot program available</span>
          <span className="text-gray-300">•</span>
          <span className="patent-pending">Patent pending</span>
        </div>
      </div>
    </section>
  );
}
