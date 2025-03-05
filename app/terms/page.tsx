export default function Terms() {
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
            Terms of Service
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
              These Terms of Service ("Terms") cover your use of the Founders for Kids website ("Website") and any related services. By accessing or using our Website, you indicate that you have read and agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">1. Audience</h2>
            <ul className="space-y-2">
              <li>The Website is primarily intended for children and families.</li>
              <li>If you are a minor, please use the Website with the guidance and supervision of a parent or guardian who agrees to these Terms.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">2. Use of Our Services</h2>
            <ul className="space-y-2">
              <li>You may access the Website for personal, non-commercial activities in line with these Terms.</li>
              <li>You agree not to use the Website in a way that disrupts its operation or negatively affects other users.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">3. Accounts and Registration</h2>
            <ul className="space-y-2">
              <li>Certain parts of the Website may require creating an account. A parent or guardian may assist if needed.</li>
              <li>You are responsible for keeping your account details secure. Any actions under your account are your responsibility.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">4. User Conduct</h2>
            <ul className="space-y-2">
              <li>You agree not to submit or share content that is fraudulent, harmful, or unlawful.</li>
              <li>We reserve the right to remove any content or suspend accounts if we believe these Terms have been violated or if behavior is deemed inappropriate.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">5. Intellectual Property Rights</h2>
            <ul className="space-y-2">
              <li>All text, images, graphics, and other materials on the Website are owned by Founders for Kids or its licensors.</li>
              <li>You may not reproduce, distribute, or create new work from our content without our written permission.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">6. Third-Party Links</h2>
            <ul className="space-y-2">
              <li>The Website may contain links to external sites for informational purposes.</li>
              <li>We have no control over these sites and are not responsible for their content or any consequences arising from their use.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">7. Disclaimers and Limitation of Liability</h2>
            <ul className="space-y-2">
              <li>We provide the Website "as is" and "as available." We do not guarantee it will be free of errors or interruptions.</li>
              <li>To the fullest extent permitted by law, Founders for Kids is not liable for damages resulting from use of or inability to use the Website.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">8. Indemnification</h2>
            <ul className="space-y-2">
              <li>You agree to indemnify and hold harmless Founders for Kids, its affiliates, and their staff from any claims or damages arising out of your use of the Website or breach of these Terms.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">9. Termination</h2>
            <ul className="space-y-2">
              <li>We may suspend or terminate your access to the Website if we determine a violation of these Terms or if there is any conduct we consider harmful.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">10. Governing Law</h2>
            <ul className="space-y-2">
              <li>These Terms are governed by the laws of the State of New York.</li>
              <li>Any disputes or legal proceedings related to these Terms will be handled in the courts of New York.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">11. Changes to These Terms</h2>
            <ul className="space-y-2">
              <li>We may update these Terms as needed. The "Last Updated" date at the top indicates when revisions were made. Continuing to use the Website after changes take effect means you accept the revised Terms.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">12. Contact Us</h2>
            <p>
              If you have questions or concerns about these Terms, please reach out:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
              <p className="font-medium">Founders for Kids</p>
              <p>Email: hello[at]foundersforkids.com</p>
            </div>
            
            <p className="mt-10 text-center italic">
              We appreciate your participation in Founders for Kids and aim to provide a safe and positive experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'Terms of Service',
  description: 'Our terms of service outline the rules and guidelines for using the Founders for Kids website and services.',
  alternates: {
    canonical: 'https://foundersforkids.com/terms',
  },
} 