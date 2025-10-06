export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-slate-400 mb-8">Last updated: October 5, 2025</p>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                This Privacy Policy describes how alicantilki.com ("we", "us", or "our") collects, uses, and shares information about you when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p>We collect minimal information about our visitors:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Basic analytics data (page views, referrers, general location)</li>
                <li>Technical information (browser type, device type, IP address)</li>
                <li>Information you provide when contacting us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve our website and user experience</li>
                <li>Respond to your inquiries and requests</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p>
                We use minimal cookies to enhance your browsing experience, such as remembering your language preference. You can disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p>
                We do not share your personal information with third parties except as necessary to provide our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the information we have about you</li>
                <li>Request correction or deletion of your information</li>
                <li>Opt-out of any communications from us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:contact@alicantilki.com" className="text-blue-400 hover:text-blue-300">
                  contact@alicantilki.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

