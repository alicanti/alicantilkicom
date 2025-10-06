export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg ${className}`}>
      AT
    </div>
  );
}

