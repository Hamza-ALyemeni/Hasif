import { Loader2 } from 'lucide-react';
import logo from '../../assets/logo.png';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1620] text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute -inset-6 bg-[#5DDCD1]/15 blur-3xl animate-pulse" />
          <img src={logo} alt="Haseef logo" className="relative w-28 h-auto drop-shadow-xl" />
        </div>
        <div className="flex items-center gap-3 text-sm text-white/70">
          <Loader2 className="w-5 h-5 animate-spin text-[#5DDCD1]" />
          <span>Loading your experience...</span>
        </div>
      </div>
    </div>
  );
}
