import { Mail, Linkedin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-400">Let's discuss infrastructure, collaboration, or opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="https://www.linkedin.com/in/alican-tilki-msc-1245a194/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-hover rounded-xl p-8 flex flex-col items-center text-center group"
          >
            <div className="p-4 rounded-full bg-blue-600/20 mb-4 group-hover:bg-blue-600/30 transition-colors">
              <Linkedin className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-slate-400">Connect with me professionally</p>
          </a>

          <div className="glass rounded-xl p-8 flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-purple-600/20 mb-4">
              <Mail className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400 mb-4">For inquiries and collaborations</p>
            <a 
              href="mailto:contact@alicantilki.com" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              contact@alicantilki.com
            </a>
          </div>
        </div>

        <div className="mt-12 glass rounded-xl p-8">
          <div className="flex items-start gap-4">
            <MessageSquare className="text-green-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">What I'm Open To</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Infrastructure consulting and architecture design</li>
                <li>• Speaking opportunities at tech conferences</li>
                <li>• Open-source collaboration</li>
                <li>• Technical writing and content creation</li>
                <li>• Interesting projects at the intersection of infrastructure and AI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

