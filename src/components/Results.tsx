import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import usbc from "/scans/USBC.JPG";
import earbud from '/scans/Earbud.JPG';
import watch from '/scans/WatchPiece.JPG';
import phoneCam from '/scans/PhoneCamModule.JPG';

export function Results() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const results = [
    {
      thumb: usbc,
      full: usbc,
      alt: 'USB-C connectors X-ray',
      caption: 'USB-C connectors • 512³ • 720 proj',
    },
    {
      thumb: earbud,
      full: earbud,
      alt: 'Earbud assembly X-ray',
      caption: 'Earbud assembly • 512³ • 720 proj',
    },
    {
      thumb: watch,
      full: watch,
      alt: 'Watch case & spring X-ray',
      caption: 'Electric watch crown/buttons • 512³ • 720 proj',
    },
    {
      thumb: phoneCam,
      full: phoneCam,
      alt: 'Phone camera module X-ray',
      caption: 'Phone camera module • 512³ • 720 proj',
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section id="results" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Results
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
            >
              <img
                src={result.thumb}
                alt={result.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
          }}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={results[currentIndex].full}
              alt={results[currentIndex].alt}
              className="w-full h-auto rounded-xl"
            />
            <p className="text-white text-center mt-6 text-lg font-mono">
              {results[currentIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}