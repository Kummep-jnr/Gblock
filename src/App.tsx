import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X,
  Send,
  MessageCircle,
  Shield,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CreditCards from "./pages/CreditCards";
import ACHLogs from "./pages/ACHLogs";
import Cheques from "./pages/Cheques";
import Gifts from "./pages/Gifts";

const Logo = ({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
    <div className="relative w-8 h-8 md:w-10 md:h-10 bg-[#09716D] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-[#09716D]/20">
      <div className="absolute -top-1 md:-top-1.5 left-1/2 -translate-x-1/2 w-3 md:w-4 h-2 md:h-3 border-[2px] md:border-[3px] border-[#09716D] rounded-t-full" />
      <span className="text-white font-black text-lg md:text-xl leading-none select-none">G</span>
    </div>
    <span className={`text-xl md:text-2xl font-black tracking-tighter select-none transition-colors ${light ? 'text-white' : 'text-black'}`}>
      block<span className={light ? "text-[#D6F4E8]" : "text-[#09716D]"}>202</span>
    </span>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Credit Cards", href: "/credit-cards" },
    { label: "ACH Logs", href: "/ach-logs" },
    { label: "Cheques", href: "/cheques" },
    { label: "Send Gifts 🎁", href: "/gifts" },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden smooth-scroll transition-all font-body bg-[#FFFFF5] text-black">
      <ScrollToTop />
      {/* Navigation */}
      <header 
        className={`z-[2000] transition-all duration-500 fixed top-0 left-0 right-0 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="group transition-transform hover:scale-105 active:scale-95">
              <Logo />
            </Link>
            <nav className="hidden lg:flex items-center gap-x-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-[#09716D] transition-colors" 
                  to={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 bg-black/5 px-4 py-2 rounded-full border border-black/5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-tighter text-black/60">Live Inventory</span>
            </div>
            <button 
              className="lg:hidden p-2 text-black transition-transform active:scale-90"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-b border-black/5 overflow-hidden shadow-2xl"
            >
              <div className="p-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.label} to={link.href} className="text-2xl font-black italic tracking-tighter uppercase" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
                ))}
                <div className="pt-6 border-t border-black/5 flex flex-col gap-4">
                  <a href="https://t.me/@Gblock202" className="button !bg-black !text-white !w-full !rounded-2xl">Telegram Support</a>
                  <a href="https://wa.me/447459861244" className="button !bg-[#25D366] !text-white !w-full !rounded-2xl">WhatsApp Support</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-24 lg:pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/ach-logs" element={<ACHLogs />} />
          <Route path="/cheques" element={<Cheques />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
      </main>

      <footer className="bg-[#FFFFF5] text-black pt-32 pb-16 selection:bg-[#09716D] selection:text-white border-t border-black/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
               <div className="space-y-10">
                  <Logo />
                  <p className="text-lg font-medium text-black/40 leading-relaxed">
                    The ultimate infrastructure for digital operations. Secure, anonymous, and elite.
                  </p>
                  <div className="flex gap-4">
                     <a href="https://t.me/@Gblock202" className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center hover:bg-[#09716D] hover:text-white transition-all">
                        <Send size={20} />
                     </a>
                     <a href="https://wa.me/447459861244" className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
                        <MessageCircle size={20} />
                     </a>
                  </div>
               </div>

               <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase text-[#09716D] tracking-[0.5em]">Inventory</h4>
                  <ul className="space-y-4 text-lg font-black tracking-tighter italic">
                     <li><Link to="/credit-cards" className="text-black/40 hover:text-[#09716D] transition-colors">Digital CCs</Link></li>
                     <li><Link to="/ach-logs" className="text-black/40 hover:text-[#09716D] transition-colors">ACH Access</Link></li>
                     <li><Link to="/cheques" className="text-black/40 hover:text-[#09716D] transition-colors">Verified IDs</Link></li>
                     <li><Link to="/" className="text-black/40 hover:text-[#09716D] transition-colors">Masterclass</Link></li>
                  </ul>
               </div>

               <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase text-[#09716D] tracking-[0.5em]">Support</h4>
                  <ul className="space-y-4 text-lg font-black tracking-tighter italic">
                     <li><a href="#faq" className="text-black/40 hover:text-[#09716D] transition-colors">Status: Operational</a></li>
                     <li><a href="#faq" className="text-black/40 hover:text-[#09716D] transition-colors">Warranty Info</a></li>
                     <li><a href="#faq" className="text-black/40 hover:text-[#09716D] transition-colors">Trust Guidelines</a></li>
                     <li><a href="https://wa.me/447459861244" className="text-black/40 hover:text-[#09716D] transition-colors">Contact Admin</a></li>
                  </ul>
               </div>

               <div className="space-y-10">
                  <div className="p-8 rounded-[3rem] bg-[#09716D]/5 border border-[#09716D]/10 space-y-4">
                     <div className="flex items-center gap-3">
                        <Award className="text-[#09716D]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#09716D]">Secure Network</span>
                     </div>
                     <p className="text-[11px] font-bold text-black/60 leading-tight uppercase tracking-wider">Verified G-Network Partner 2024-2026</p>
                  </div>
                  <a href="https://wa.me/447459861244" className="button !bg-black !text-white !rounded-3xl !w-full !py-5 font-black uppercase tracking-[0.2em] hover:!bg-[#09716D] transition-colors">Secure Chat</a>
               </div>
            </div>

            <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-6 opacity-30">
                  <Shield size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">End-to-End Encrypted Protocols</span>
               </div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/20">
                  &copy; 2026 GBLOCK 202. Professional Digital Solutions.
               </p>
            </div>
         </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-[3000] flex flex-col gap-4">
         <motion.a 
            whileHover={{ scale: 1.1, x: -8 }}
            whileTap={{ scale: 0.9 }}
            href="https://t.me/@Gblock202"
            target="_blank"
            className="w-14 h-14 bg-[#0088cc] text-white rounded-[1.4rem] shadow-2xl flex items-center justify-center border-4 border-white/10 backdrop-blur-md"
         >
            <Send size={24} />
         </motion.a>
         <motion.a 
            whileHover={{ scale: 1.1, x: -8 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/447459861244"
            target="_blank"
            className="w-14 h-14 bg-[#25D366] text-white rounded-[1.4rem] shadow-2xl flex items-center justify-center border-4 border-white/10 backdrop-blur-md"
         >
            <MessageCircle size={24} />
         </motion.a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
