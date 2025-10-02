import { useState } from 'react';
import { Download } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    useCase: '',
    openToNDA: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        useCase: '',
        openToNDA: false,
      });
      setIsSubmitting(false);
    }, 500);
  };

  const handleDownloadPDF = () => {
    window.location.href = '/Fusometry_CT_OnePager.pdf';
  };

  const handleOpenPrintView = () => {
    window.open('/onepager', '_blank');
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks! We'll reach out within 1–2 business days.
            </h2>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-150"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Request a private demo
          </h2>
          <div className="flex gap-3">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Download className="w-5 h-5" />
              Download 1-pager (PDF)
            </button>
            <button
              onClick={handleOpenPrintView}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-gray-200 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Open print view
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150"
              />
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-gray-900 mb-2">
                Use case
              </label>
              <textarea
                id="useCase"
                required
                rows={4}
                value={formData.useCase}
                onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 resize-none"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="openToNDA"
                checked={formData.openToNDA}
                onChange={(e) => setFormData({ ...formData, openToNDA: e.target.checked })}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="openToNDA" className="ml-3 text-sm text-gray-700">
                Open to NDA
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isSubmitting ? 'Submitting...' : 'Request a private demo'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              We only use your info to respond to this request.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
