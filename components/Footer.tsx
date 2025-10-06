import Link from "next/link";
import { useTranslations } from "next-intl";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Alican Tilki</h3>
            <p className="text-slate-400 text-sm">
              Systems & Infrastructure Engineer
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/alican-tilki-msc-1245a194/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={`/${locale}/contact`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/instantpose`} className="text-slate-400 hover:text-white transition-colors">InstantPose</Link></li>
              <li><Link href={`/${locale}/about`} className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.linkedin.com/in/alican-tilki-msc-1245a194/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="mailto:contact@alicantilki.com" className="text-slate-400 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/privacy`} className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href={`/${locale}/terms`} className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} Alican Tilki. {t("rights")}</p>
          <p>{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}

