import '../styles/onepager-print.css';

interface OnePagerProps {
  showPatentPending?: boolean;
}

export function OnePager({ showPatentPending = true }: OnePagerProps) {
  const advantages = [
    {
      title: 'Operator-First Control',
      description: 'Clear interlocks, live vitals, stable long-scan workflow.',
    },
    {
      title: 'Local Compute',
      description: 'All processing on a single mini-PC. Predictable, offline, IT-friendly.',
    },
    {
      title: 'Industrial Safety',
      description: 'Door, e-stop, shielding, warm-up; emissions gated by hardware + software.',
    },
    {
      title: 'Modular Control Backplane',
      description: 'Architected for future instruments.',
    },
  ];

  const steps = [
    {
      title: 'Place the object',
      description: 'Position your part in the scanning chamber and close the door.',
    },
    {
      title: 'Set projections',
      description: 'Choose scan quality: 360, 720, or 1080 projections.',
    },
    {
      title: 'Scan & review',
      description: 'Start scan, monitor live progress, download volume when complete.',
    },
  ];

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
    <div className="onepager-container bg-white text-gray-900">
      <div className="onepager-header mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Fusometry</h1>
        <p className="text-sm text-gray-600 mt-1">Fusometry CT</p>
      </div>

      <div className="onepager-hero mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Desktop industrial CT,<br />engineered for production.
        </h2>
        <p className="text-lg text-gray-700">
          Operator-first control, local processing,<br />and industrial safety—without the cloud or complexity.
        </p>
      </div>

      <div className="onepager-section mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Engineering Advantages</h3>
        <div className="grid grid-cols-2 gap-4">
          {advantages.map((advantage, index) => (
            <div key={index} className="onepager-card p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
              <p className="text-sm text-gray-700">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="onepager-section mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
        <div className="grid grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="onepager-card p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-gray-400 mb-2">{index + 1}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="onepager-section mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
        <div className="onepager-card p-6 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-2 gap-4 tabular-nums">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col">
                <dt className="text-sm font-medium text-gray-600 mb-1">{spec.label}</dt>
                <dd className="text-sm text-gray-900 font-mono">{spec.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="onepager-footer text-sm text-gray-600">
        Built in New Jersey.{showPatentPending && ' Patent pending.'}
      </div>
    </div>
  );
}
