import Link from "next/link";
import Image from "next/image";
import { apps } from "@/data/apps";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export default function InstantPosePage({ params: { locale } }: { params: { locale: string } }) {
  const app = apps[0]; // InstantPose is the first (and only) app

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="glass rounded-2xl p-8 sm:p-12">
          <div className="mb-8 flex items-start gap-6">
            <div className="flex-shrink-0">
              <Image 
                src="/instantpose-icon.png" 
                alt="InstantPose Icon" 
                width={80} 
                height={80}
                className="rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{app.name}</h1>
              <p className="text-xl text-slate-300 mb-6">{app.tagline}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 text-sm rounded-full bg-slate-800 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {app.description && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <div className="text-slate-300 leading-relaxed space-y-4">
                {app.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
            <ul className="space-y-3">
              {app.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {app.techStack && app.techStack.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {app.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {app.links && app.links.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Links</h2>
              <div className="flex flex-wrap gap-4">
                {app.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300"
                  >
                    {link.label}
                    <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
