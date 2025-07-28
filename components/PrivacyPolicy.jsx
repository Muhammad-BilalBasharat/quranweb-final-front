import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At [Smart Quaran Learning], we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number, and billing information when you register, enroll in a course, or contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and manage your access to courses and services.</li>
        <li>To communicate updates, offers, and announcements.</li>
        <li>To improve our platform and user experience.</li>
        <li>To process payments securely.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We use industry-standard security measures to protect your personal data from unauthorized access or disclosure. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. We may share it with trusted service providers (e.g., payment gateways or video platforms) solely for delivering our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal data. Contact us at [your-email@example.com] for any such requests.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Children's Privacy</h2>
      <p className="mb-4">
        Our services are intended for users aged 4 and above. If you are a parent and believe your child has provided us personal information, please contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. Changes will be posted on this page with the updated date.
      </p>

      <p className="mt-6 text-sm text-gray-600">
        Last updated:{new Date().getFullYear()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
