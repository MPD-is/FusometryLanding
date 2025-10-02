export function Footer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Request a private demo
          </button>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <button className="hover:text-gray-900 transition-colors duration-150">
              Privacy
            </button>
            <button className="hover:text-gray-900 transition-colors duration-150">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
