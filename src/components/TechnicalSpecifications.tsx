export function TechnicalSpecifications() {
  const specs = [
    { label: 'Detector', value: '~1300×1300, 16-bit' },
    { label: 'Typical scan', value: '720 projections (editable)' },
    { label: 'Field of view (XY)', value: '250 × 250 mm' },
    { label: 'Volume sizes', value: '256³ (Fast), 512³ (Default), 1024³ (High-Res)' },
    { label: 'Power', value: 'single AC outlet' },
    { label: 'Safety', value: 'door, e-stop, shielding, over-temp interlocks' },
    { label: 'Software', value: 'local web UI (offline capable)' },
  ];

  return (
    <section id="specifications" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Technical Specifications
        </h2>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-sm font-medium text-gray-500 mb-2">
                  {spec.label}
                </dt>
                <dd className="text-gray-900 font-mono text-sm">
                  {spec.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
