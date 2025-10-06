export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-slate-400 mb-8">Last updated: October 5, 2025</p>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p>
                By accessing alicantilki.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily view the materials on this website for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
              </p>
              <p>Under this license you may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software on this website</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p>
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p>
                In no event shall Alican Tilki or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Links</h2>
              <p>
                We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Modifications</h2>
              <p>
                We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:hello@alicantilki.com" className="text-blue-400 hover:text-blue-300">
                  hello@alicantilki.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

