import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("hero");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-slate-300">{t("role")}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
              {t("name")}
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-slate-300 mb-6 font-medium">
              {t("title")}
            </h2>

            <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("tagline")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/instantpose`}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                View InstantPose
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-8 py-4 glass-hover text-white rounded-lg font-medium flex items-center gap-2"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* InstantPose Showcase */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Project</h2>
            <p className="text-slate-400 text-lg">AI-powered mobile application</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}/instantpose`} className="group block">
              <div className="glass-hover rounded-xl p-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <Image 
                      src="/instapose-icon.png" 
                      alt="InstantPose" 
                      width={80} 
                      height={80}
                      className="rounded-2xl transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      InstantPose
                    </h3>
                    <p className="text-slate-300 text-lg mb-4">
                      Transform selfies into professional poses—identity preserved.
                    </p>
                    <p className="text-slate-400">
                      Generate professional poses from a single selfie while keeping identity intact. Built with Flutter and powered by advanced AI models.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Mobile", "AI", "Image Generation", "Flutter", "RevenueCat"].map((tag) => (
                    <span key={tag} className="px-4 py-2 text-sm rounded-full bg-slate-800 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-400 text-base font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Interested in collaborating or discussing infrastructure solutions?
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

