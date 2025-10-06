import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RootNotFound() {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex items-center justify-center bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-12">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-slate-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/en"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

