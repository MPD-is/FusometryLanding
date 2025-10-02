import { Package, Settings, ScanLine } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Package,
      title: 'Place the object',
      description: 'Secure the part. Close the door. Interlocks verify safety.',
    },
    {
      icon: Settings,
      title: 'Set projections',
      description: 'Choose Fast / Standard / High-Res. Edit projections (e.g., 720).',
    },
    {
      icon: ScanLine,
      title: 'Scan & review',
      description: 'Live vitals, calm workflow, export results offline.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              <step.icon className="w-12 h-12 text-blue-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
