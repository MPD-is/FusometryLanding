import { User, HardDrive, Shield, Grid3x3 } from 'lucide-react';

export function EngineeringAdvantages() {
  const advantages = [
    {
      icon: User,
      title: 'Operator-First Control',
      description: 'Clear interlocks, live vitals, stable long-scan workflow.',
    },
    {
      icon: HardDrive,
      title: 'Local Compute',
      description: 'All processing on a single mini-PC. Predictable, offline, IT-friendly.',
    },
    {
      icon: Shield,
      title: 'Industrial Safety',
      description: 'Door, e-stop, shielding, warm-up; emissions gated by hardware + software.',
    },
    {
      icon: Grid3x3,
      title: 'Modular Control Backplane',
      description: 'Architected for future instruments.',
    },
  ];

  return (
    <section id="engineering-advantages" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Engineering Advantages
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              <advantage.icon className="w-12 h-12 text-blue-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
