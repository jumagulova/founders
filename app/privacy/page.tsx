export default function Privacy() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-100 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Last Updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl font-light">
              Thank you for choosing to visit Founders for Kids (referred to as "we," "us," or "our"). Protecting your information and respecting your privacy is important to us. This Privacy Policy outlines how we handle personal information collected through our website and related services.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">1. Information We Collect</h2>
            <ul className="space-y-3">
              <li>
                <strong>Personal Information:</strong> We may collect personal details such as names, email addresses, or other contact information when a parent or guardian registers an account or provides it voluntarily.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect non-personal data about how visitors interact with our website. This can include browser type, device information, and pages viewed.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> Our site may use cookies or similar methods to remember your preferences and personalize the site experience. You can adjust browser settings to refuse cookies, but some features of our site may not work properly without them.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-3">
              <li>
                <strong>Provide Services:</strong> We use collected information to operate our site and offer content or activities of interest to families.
              </li>
              <li>
                <strong>Communication:</strong> We may send updates, respond to inquiries, and offer support.
              </li>
              <li>
                <strong>Security and Maintenance:</strong> Data helps us maintain the site's safety and address any technical issues.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">3. Sharing Your Information</h2>
            <ul className="space-y-3">
              <li>
                <strong>Service Providers:</strong> We might share certain information with third parties that assist us in operating the website (such as hosting services), but they are required to protect it and only use it for the tasks we assign.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required to do so by law or if we believe sharing it is needed to protect our rights, comply with a legal obligation, or ensure the safety of our users.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">4. Children's Privacy</h2>
            <ul className="space-y-3">
              <li>
                <strong>Parental Consent:</strong> Because we are focused on kids, we ask that parents or guardians provide and supervise any personal information submitted. We do not knowingly collect personal details from children under 13 without parental permission.
              </li>
              <li>
                <strong>Parental Rights:</strong> Parents or guardians can request to review, update, or delete their child's personal information at any time. Please contact us using the details below if you would like to exercise these rights.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">5. Security Measures</h2>
            <p>
              We use reasonable procedures to keep personal information secure and protect it from loss, misuse, or alteration. Please note that no system can guarantee absolute security, but we take steps to maintain reliable safeguards.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">6. External Links</h2>
            <p>
              Our website may include links to other sites that are not operated by us. We are not responsible for the privacy practices of those websites. We encourage you to review their privacy policies before sharing any information.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last Updated" date at the top will reflect the most recent version. Your continued use of our services after any modifications indicates your acknowledgment of the changes.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to request access to, correct, or delete personal information, please reach out to us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
              <p className="font-medium">Founders for Kids</p>
              <p>Email: hello[at]foundersforkids.com</p>
            </div>
            
            <p className="mt-10 text-center italic">
              We appreciate your trust and value your privacy. We are committed to handling your information responsibly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy explains how we collect, use, and protect your information when you visit our website.',
  alternates: {
    canonical: 'https://foundersforkids.com/privacy',
  },
} 