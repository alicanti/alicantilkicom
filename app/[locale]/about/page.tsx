import { Linkedin, Mail } from "lucide-react";

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm <strong className="text-white">Alican Tilki</strong>, a Systems & Infrastructure Engineer with a passion for building reliable, scalable systems that bridge the gap between traditional infrastructure and modern AI-powered applications.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Currently serving as <strong className="text-white">Head of Infrastructure at Wiro AI</strong>, I architect and maintain the backbone that powers our AI products. My work spans from bare metal server configuration and network design to cloud orchestration and CI/CD automation.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Expertise</h2>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>• Infrastructure Architecture: Proxmox, GPU passthrough, high-availability clusters</li>
              <li>• DevOps & Automation: CI/CD pipelines, GitLab, Docker, Kubernetes</li>
              <li>• AI Integration: Building infrastructure for AI/ML workloads, n8n workflows</li>
              <li>• Monitoring & Observability: Prometheus, Grafana, Loki</li>
              <li>• Network Engineering: VLAN configuration, security, performance optimization</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Philosophy</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I believe in building systems that are not just functional, but elegant. Infrastructure should be invisible when it works and debuggable when it doesn't. Every decision should balance reliability, performance, and maintainability.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Beyond Work</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              When I'm not optimizing infrastructure, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the engineering community.
            </p>

            <div className="flex items-center gap-4 pt-8 border-t border-slate-700">
              <a
                href="https://www.linkedin.com/in/alican-tilki-msc-1245a194/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 glass-hover text-white rounded-lg font-medium"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

