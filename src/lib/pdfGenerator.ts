export function generatePDF() {
  const patentPendingEnabled = true;

  const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Fusometry CT</title>
  <style>
    @page {
      size: A4;
      margin: 20mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 10pt;
      line-height: 1.5;
      color: #1f2937;
      margin: 0;
      padding: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e5e7eb;
    }
    .logo {
      font-size: 18pt;
      font-weight: 600;
      color: #111827;
    }
    h1 {
      font-size: 20pt;
      font-weight: 700;
      margin: 20px 0 10px 0;
      color: #111827;
    }
    h2 {
      font-size: 14pt;
      font-weight: 600;
      margin: 20px 0 10px 0;
      color: #111827;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 5px;
    }
    .subhead {
      font-size: 12pt;
      color: #4b5563;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    .section {
      margin-bottom: 20px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-bottom: 15px;
    }
    .card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px;
      background: #f9fafb;
    }
    .card h3 {
      font-size: 11pt;
      font-weight: 600;
      margin: 0 0 8px 0;
      color: #111827;
    }
    .card p {
      font-size: 9pt;
      margin: 0;
      color: #4b5563;
    }
    .step {
      margin-bottom: 10px;
    }
    .step-title {
      font-weight: 600;
      color: #111827;
      margin-bottom: 3px;
    }
    .specs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .spec-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .spec-label {
      font-size: 9pt;
      color: #6b7280;
      font-weight: 500;
    }
    .spec-value {
      font-size: 9pt;
      color: #111827;
      font-family: 'Courier New', monospace;
    }
    .cta {
      text-align: center;
      margin: 20px 0;
      padding: 15px;
      background: #eff6ff;
      border-radius: 8px;
    }
    .cta-text {
      font-size: 12pt;
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 5px;
    }
    .cta-url {
      font-size: 10pt;
      color: #3b82f6;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid #e5e7eb;
      font-size: 9pt;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Fusometry</div>
    <div style="font-size: 12pt; font-weight: 600; color: #111827;">Fusometry CT</div>
  </div>

  <h1>Desktop industrial CT, engineered for production.</h1>
  <div class="subhead">
    Operator-first control, local processing, and industrial safety—without the cloud or complexity.
  </div>

  <div class="section">
    <h2>Engineering Advantages</h2>
    <div class="grid">
      <div class="card">
        <h3>Operator-First Control</h3>
        <p>Clear interlocks, live vitals, stable long-scan workflow.</p>
      </div>
      <div class="card">
        <h3>Local Compute</h3>
        <p>All processing on a single mini-PC. Predictable, offline, IT-friendly.</p>
      </div>
      <div class="card">
        <h3>Industrial Safety</h3>
        <p>Door, e-stop, shielding, warm-up; emissions gated by hardware + software.</p>
      </div>
      <div class="card">
        <h3>Modular Control Backplane</h3>
        <p>Architected for future instruments.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>How it works</h2>
    <div class="step">
      <div class="step-title">1. Place the object</div>
      <div>Secure the part. Close the door. Interlocks verify safety.</div>
    </div>
    <div class="step">
      <div class="step-title">2. Set projections</div>
      <div>Choose Fast / Standard / High-Res. Edit projections (e.g., 720).</div>
    </div>
    <div class="step">
      <div class="step-title">3. Scan & review</div>
      <div>Live vitals, calm workflow, export results offline.</div>
    </div>
  </div>

  <div class="section">
    <h2>Technical Specifications</h2>
    <div class="specs">
      <div class="spec-item">
        <div class="spec-label">Detector</div>
        <div class="spec-value">~1300×1300, 16-bit</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Typical scan</div>
        <div class="spec-value">720 projections (editable)</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Field of view (XY)</div>
        <div class="spec-value">250 × 250 mm</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Volume sizes</div>
        <div class="spec-value">256³ (Fast), 512³ (Default), 1024³ (High-Res)</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Power</div>
        <div class="spec-value">single AC outlet</div>
      </div>
      <div class="spec-item">
        <div class="spec-label">Safety</div>
        <div class="spec-value">door, e-stop, shielding, over-temp interlocks</div>
      </div>
      <div class="spec-item" style="grid-column: 1 / -1;">
        <div class="spec-label">Software</div>
        <div class="spec-value">local web UI (offline capable)</div>
      </div>
    </div>
  </div>

  <div class="cta">
    <div class="cta-text">Request a private demo</div>
    <div class="cta-url">fusometry.com</div>
  </div>

  <div class="footer">
    Built in New Jersey${patentPendingEnabled ? ' • Patent pending' : ''}
  </div>
</body>
</html>
  `.trim();

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 250);
    };
  }
}

declare global {
  interface Window {
    generatePDF: () => void;
  }
}

window.generatePDF = generatePDF;
