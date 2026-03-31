import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setShowIcon(true);
    } else {
      // Oru siriya delay-kku pin banner-ai kaatta (UX-kaga)
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (isAccepted) => {
    localStorage.setItem("gdprConsent", isAccepted ? "true" : "false");
    setVisible(false);
    setShowIcon(true);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div 
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:right-8 md:left-auto max-w-full md:w-[380px] p-6 bg-[#111111] border border-[#C99728]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[9999]"
          style={{ animation: 'slideUp 0.6s ease-out forwards' }}
        >
          <h4 className="font-cinzel-dec text-[#C99728] text-xs tracking-[0.3em] uppercase mb-4">
            Cookie Preferences [cite: 60, 61]
          </h4>
          <p className="font-cormorant text-[#F5EDD8]/90 text-[15px] leading-relaxed mb-6 italic">
            We use cookies to enhance your dining experience. By clicking "Accept All", you agree to our 
            <a href="/privacy" className="text-[#C99728] ml-1 underline underline-offset-4 hover:text-[#F0C060]">Privacy Policy</a>. [cite: 70, 97]
          </p>
          
          <div className="flex flex-col gap-3">
            {/* Primary Action - Sharp Edges [cite: 82, 114] */}
            <button
              onClick={() => handleAction(true)}
              className="bg-[#C99728] text-black font-cinzel font-bold text-[11px] tracking-[0.2em] py-3.5 uppercase hover:bg-[#F0C060] transition-all duration-300 rounded-none"
            >
              Accept All [cite: 63, 64, 94]
            </button>
            
            <button
              onClick={() => handleAction(false)}
              className="border border-[#C99728]/30 text-[#F5EDD8] font-cinzel text-[10px] tracking-[0.15em] py-2.5 uppercase hover:bg-[#C99728]/10 transition-all rounded-none"
            >
              Reject Non-Essential
            </button>
          </div>
        </div>
      )}

      {/* Cookie Revisit Icon - Sharp Edges [cite: 115] */}
      {showIcon && !visible && (
        <button
          onClick={() => { setVisible(true); setShowIcon(false); }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9998] w-12 h-12 bg-[#090909] border border-[#C99728]/40 flex items-center justify-center hover:border-[#C99728] transition-all duration-500 shadow-xl group rounded-none"
        >
          <svg 
            className="w-6 h-6 text-[#C99728] group-hover:scale-110 transition-transform duration-500" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="15" cy="15" r="1" fill="currentColor" />
            <circle cx="9" cy="16" r="1" fill="currentColor" />
          </svg>
        </button>
      )}

     
    </>
  );
}