import { Linkedin, Mail, Github } from "lucide-react";

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm <strong className="text-white">Alican Tilki</strong>, a Systems & Infrastructure Engineer with over 13 years of experience building and managing large-scale infrastructure. I specialize in bridging traditional infrastructure with modern AI-powered applications.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Currently serving as <strong className="text-white">Head of System & Network Engineering at Wiro AI</strong> (part of NVIDIA Inception Program), I lead the management of AI-driven infrastructure, virtualization environments, and microservices architectures that power cutting-edge AI solutions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Professional Experience</h2>
            <div className="space-y-6 text-slate-300 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Wiro AI (2023 - Present)</h3>
                <p className="text-blue-400 mb-2">Head of System & Network Engineering</p>
                <ul className="space-y-2 ml-4">
                  <li>• Leading AI infrastructure management as part of NVIDIA Inception Program</li>
                  <li>• Managing virtualization (Proxmox, VMware, Hyper-V) with GPU pass-through for AI workloads</li>
                  <li>• Overseeing Kubernetes, Docker, and CI/CD pipelines for AI model deployment</li>
                  <li>• Implementing high-performance computing infrastructure for AI training and deployment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Paramtech E-Çözüm (2022 - 2023)</h3>
                <p className="text-blue-400 mb-2">Senior System & Network Engineer</p>
                <ul className="space-y-2 ml-4">
                  <li>• Managed enterprise virtualization, network, backup, and microservices infrastructure</li>
                  <li>• Led capacity management and disaster recovery initiatives</li>
                  <li>• Administered VMware ESX, vCenter, Windows Server, and Linux environments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Matriks Bilgi Dağıtım (2018 - 2021)</h3>
                <p className="text-blue-400 mb-2">Senior System & Network Engineer</p>
                <ul className="space-y-2 ml-4">
                  <li>• Managed infrastructure across 6+ data centers with 1,000+ servers</li>
                  <li>• Led system administration team and handled critical customer communications</li>
                  <li>• Implemented monitoring, disaster recovery, and security procedures</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Infrastructure & Virtualization</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Proxmox PVE, VMware ESX, vCenter, Hyper-V</li>
                  <li>• NVIDIA GPU infrastructure & pass-through</li>
                  <li>• Ceph distributed storage</li>
                  <li>• High-availability clusters</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">DevOps & Containers</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Docker container management</li>
                  <li>• Kubernetes orchestration</li>
                  <li>• CI/CD pipelines (GitLab)</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Networking</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Fortigate, Mikrotik, Juniper, Cisco</li>
                  <li>• TCP/IP, Switching, Routing, VPN</li>
                  <li>• Network Packet Brokers (Gigamon, Profitap)</li>
                  <li>• DDoS protection & WAF solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Monitoring & Backup</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Zabbix, Grafana, Prometheus, PRTG</li>
                  <li>• Graylog log management</li>
                  <li>• Veeam, Nakivo, Acronis backup solutions</li>
                  <li>• Disaster recovery planning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Education & Certifications</h2>
            <ul className="space-y-2 text-slate-300 mb-8">
              <li>• <strong className="text-white">Master's Degree</strong> - Management Information Systems, Ahmet Yesvi University</li>
              <li>• <strong className="text-white">Bachelor's Degree</strong> - Management Information Systems, Anadolu University (2016)</li>
              <li>• <strong className="text-white">GigaTECH Certified</strong> - Gigamon Network Packet Broker</li>
              <li>• <strong className="text-white">Arbor Training</strong> - DDoS Protection</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Notable Projects</h2>
            <div className="space-y-4 text-slate-300 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white">LifeWatch TR Cloud Infrastructure (2016)</h3>
                <p className="text-sm">Established cloud environment for 36 servers supporting innovative mobile arrhythmia monitoring technology.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Ulusoy Lojistik Infrastructure (2016)</h3>
                <p className="text-sm">Deployed cloud infrastructure for ERP, CRM, Exchange, and DNS servers with geographical redundancy.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Beyond Work</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              When I'm not optimizing infrastructure, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the engineering community. I'm particularly interested in learning Kubernetes, Istio, cloud platforms (AWS, Azure, GCP), Go programming, and Terraform.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-slate-700">
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
                href="https://github.com/alicanti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-hover text-white rounded-lg font-medium"
              >
                <Github size={20} />
                GitHub
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

