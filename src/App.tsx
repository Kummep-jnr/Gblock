import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X,
  ArrowRight, 
  Check, 
  ChevronDown, 
  Send,
  MessageCircle,
  Shield,
  Zap,
  Gift,
  CreditCard,
  Lock,
  Instagram,
  Twitter,
  ExternalLink,
  Globe,
  TrendingUp,
  Award,
  Smartphone,
  MousePointer2
} from "lucide-react";
import { useState, useEffect } from "react";

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

export default function App() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Accounts", href: "#accounts" },
    { label: "Credit Cards", href: "#credit-cards" },
    { label: "Training", href: "#training" },
    { label: "FAQ", href: "#faq" },
  ];

  const categories = [
    { name: "Digital Assets", count: "1200+", icon: <CreditCard size={18} /> },
    { name: "Verified Accounts", count: "450+", icon: <Shield size={18} /> },
    { name: "System Training", count: "12+", icon: <Zap size={18} /> },
  ];

  const tools = [
    { 
      icon: <CreditCard className="w-6 h-6" />,
      title: "Buy Our Cc", 
      price: "$50↑", 
      desc: "Most POPULAR ✅ – Start Earning on TikTok Live/Shop. Includes PDF Tutorial + Admin support.",
      tag: "Best Seller",
      id: "tool-cc"
    },
    { 
      icon: <Lock className="w-6 h-6" />,
      title: "U.S. Bank Logs", 
      price: "$50↑", 
      desc: "Premium logs for your ACH. Includes PDF tutorial + Admin support. Fully refundable.",
      tag: "Verified",
      id: "tool-ach"
    },
    { 
      icon: <Shield className="w-6 h-6" />,
      title: "Spammed Cheques", 
      price: "$30↑", 
      desc: "Freshly spammed instruments. PDF Tutorial + Admin support. Optimized for mobile deposit.",
      tag: "High Hit",
      id: "tool-checks"
    },
    { 
      icon: <Send className="w-6 h-6" />,
      title: "E-transfer Service", 
      price: "₦1,050/$", 
      desc: "Below $1K: ₦900. Bulk: ₦1,050. Above $1K: ₦1,000. Quick pick up at elite rates.",
      tag: "Daily Rate",
      id: "tool-etransfer"
    }
  ];

  const testimonials = [
    { name: "Anonymous", text: "G block, Chale I swear you guys be tha real King of boys!. Cc be sharp Etransfer be fast", img: "https://i.pravatar.cc/150?img=33" },
    { name: "Alex", text: "Oh boy! Everything sharp for this side! Respect admin.", img: "https://i.pravatar.cc/150?img=11" },
    { name: "Anonymous", text: "No long talk easy to use", img: "https://i.pravatar.cc/150?img=10" },
    { name: "Expensive London", text: "When I first moved to UK I didn’t know it would be extremely difficult to survive, my hommies put me on and introduced me to Gblock. The rest is history", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Remmy boy", text: "Best Cc vendor in the market. No logs invalid, everything hits.", img: "https://i.pravatar.cc/150?img=13" },
    { name: "Denis", text: "Good service, though it was a bit difficult to connect my Cc for the first time but the admin put me on easy.", img: "https://i.pravatar.cc/150?img=14" },
    { name: "Eze King", text: "I love the self cashout like mad.", img: "https://i.pravatar.cc/150?img=20" },
    { name: "Oba Canada", text: "Nice service, I hope you guys don’t become greedy in future", img: "https://i.pravatar.cc/150?img=21" },
    { name: "Shalliboi", text: "Bro I’ve spent over $30K on TikTok shop, burst my brain, nice one.", img: "https://i.pravatar.cc/150?img=15" }
  ];

  return (
    <div id="top" className="flex flex-col h-full overflow-y-auto overflow-x-hidden smooth-scroll transition-all font-body bg-[#FFFFF5] text-black">
      {/* Navigation */}
      <header 
        id="website-header" 
        className={`z-[2000] transition-all duration-500 sticky top-0 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="group transition-transform hover:scale-105 active:scale-95">
              <Logo />
            </a>
            <nav className="hidden lg:flex items-center gap-x-10">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-[#09716D] transition-colors" 
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 bg-black/5 px-4 py-2 rounded-full border border-black/5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-tighter text-black/60">Live Inventory</span>
            </div>
            <a className="button !bg-[#09716D] !text-white !rounded-full !px-8 !py-3 hover:shadow-[0_15px_30px_rgba(9,113,109,0.25)] !text-[12px] font-black uppercase tracking-widest transition-all hover:-translate-y-1" href="https://wa.me/447459861244">
              Secure Access
            </a>
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
                  <a key={link.label} href={link.href} className="text-2xl font-black italic tracking-tighter uppercase" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
                ))}
                <div className="pt-6 border-t border-black/5 flex flex-col gap-4">
                  <a href="https://t.me/Gblock202" className="button !bg-black !text-white !w-full !rounded-2xl">Telegram Group</a>
                  <a href="https://wa.me/447459861244" className="button !bg-[#25D366] !text-white !w-full !rounded-2xl">WhatsApp Support</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Elite Hero */}
        <section className="relative pt-10 pb-24 lg:pt-20 lg:pb-40 overflow-hidden">
          {/* Subtle Background Effects */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#D6F4E8]/20 blur-[160px] -z-10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#09716D]/5 blur-[120px] -z-10 rounded-full -translate-x-1/4 translate-y-1/4" />
          
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm">
                    <span className="w-2 h-2 bg-[#09716D] rounded-full animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60 italic">📍 Hustler's Safest Zone 📍</span>
                  </div>
                  <h1 className="heading-xlarge !leading-[0.9] !tracking-[-0.04em] text-balance">
                    GBLOCK 202💰 <br />
                    <span className="text-[#09716D]">Hustler's Safest Zone.</span>
                  </h1>
                  <p className="text-xl text-black/50 max-w-lg leading-relaxed font-medium">
                    MOST POPULAR ✅ – Start Earning on TikTok Live/Shop with Our Cc — Ship Credit Cards to your Clients addresses for easy spendings📍
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-5">
                  <a href="#credit-cards" className="button !bg-black !text-white !rounded-3xl !px-12 !py-6 !text-[14px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex gap-3">
                    Inventory <ArrowRight size={20} />
                  </a>
                  <a href="https://t.me/Gblock202" className="button border-2 border-black/10 hover:border-black !rounded-3xl !px-12 !py-6 !text-[14px] font-black uppercase tracking-[0.2em] transition-all bg-white hover:bg-black/5">
                    Telegram Hub
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 pt-12 border-t border-black/5">
                   {categories.map((cat, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2 text-[#09716D]">
                           {cat.icon}
                           <span className="text-lg font-black tracking-tighter">{cat.count}</span>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-black/30">{cat.name}</div>
                     </div>
                   ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl border-[12px] border-white group">
                  <img 
                    src="https://cdn.durable.co/getty/2aT62hcuUmGMSYcfl5XI8bpJyeR92tH20jBs3Agti35utZJ8cUE7Nf37LeDiWe5I.jpeg" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                    alt="Cyber Security"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-12 -left-12 bg-white p-10 rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] border border-black/5 max-w-[280px] z-20"
                >
                  <TrendingUp className="text-[#09716D] w-10 h-10 mb-6" />
                  <div className="space-y-2">
                    <div className="text-2xl font-black italic tracking-tighter leading-none">99.2%</div>
                    <div className="text-[12px] font-bold text-black/40 uppercase tracking-widest">Global Success Rate</div>
                  </div>
                </motion.div>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D6F4E8] rounded-full blur-[80px] -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <section className="bg-white py-14 border-y border-black/5 overflow-hidden">
           <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                 {[
                   { label: "Elite Security", tag: "Encrypted Protocol" },
                   { label: "Fast Payouts", tag: "Instant Settlement" },
                   { label: "Direct Support", tag: "24/7 Availability" },
                   { label: "Verified Only", tag: "Zero Junk Policy" }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center md:items-start transition-opacity hover:opacity-60 cursor-default">
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#09716D] mb-1">{stat.tag}</div>
                      <div className="text-2xl font-black tracking-tighter italic">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-[#FFFFF5] border-b border-black/5">
           <div className="container mx-auto px-6 text-center">
              <div className="max-w-2xl mx-auto space-y-8">
                 <div className="inline-block p-4 rounded-3xl bg-[#09716D]/5 border border-[#09716D]/10">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#09716D]">Our Why</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic">Why we do what we do.</h2>
                 <div className="p-12 rounded-[4rem] bg-white border border-black/5 shadow-sm relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#09716D]" />
                    <p className="text-2xl md:text-3xl font-black italic tracking-tighter leading-tight text-black/80">
                      "Because we can eat and feed <br /><span className="text-[#09716D]">others too!"</span>
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* Product Catalog */}
        <section id="credit-cards" className="py-32 bg-white selection:bg-[#09716D] selection:text-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-12">
               <div className="lg:col-span-1 space-y-8">
                  <div className="space-y-4">
                    <span className="text-[#09716D] font-black text-[12px] uppercase tracking-[0.5em]">Inventory</span>
                    <h2 className="heading-large !leading-[1] tracking-tighter">Grab your tools <br />for easy <br />work.</h2>
                  </div>
                  <p className="body-normal text-black/50 leading-relaxed font-medium">
                    Curated digital instruments designed for high-conversion operations. Each asset is verified before listing.
                  </p>
                  <div className="pt-6">
                    <a href="https://wa.me/447459861244" className="inline-flex items-center gap-4 text-[13px] font-black uppercase tracking-widest text-black group">
                      Full Catalog <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
               </div>

               <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {tools.map((tool, i) => (
                    <motion.div 
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-12 rounded-[4rem] bg-[#FFFFF5] border border-black/5 hover:border-[#09716D] transition-all duration-500 flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-12">
                        <div className="p-5 bg-white rounded-3xl shadow-sm text-black group-hover:bg-[#09716D] group-hover:text-white transition-all duration-500">
                          {tool.icon}
                        </div>
                        <span className="px-5 py-1.5 rounded-full bg-white border border-black/5 text-[10px] font-black uppercase tracking-widest text-[#09716D]">
                          {tool.tag}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-10">
                        <h3 className="heading-medium tracking-tighter">{tool.title}</h3>
                        <p className="body-normal text-black/40 leading-relaxed font-medium">
                          {tool.desc}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-8 border-t border-black/5">
                         <div>
                            <div className="text-[10px] font-black text-black/30 uppercase tracking-widest mb-1">Entry Price</div>
                            <div className="heading-large">{tool.price}</div>
                         </div>
                         <a href="https://t.me/Gblock202" className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-xl group-hover:bg-[#09716D]">
                           <Send size={24} />
                         </a>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Masterclass Highlight */}
        <section id="training" className="py-24 lg:py-40 relative bg-white text-black overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[#09716D]/5 blur-[180px] -z-0" />
           <div className="container mx-auto px-6 relative z-10">
              <div className="bg-[#FFFFF5] rounded-[5rem] p-12 lg:p-24 border border-black/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D6F4E8]/20 -rotate-12 translate-x-1/2 pointer-events-none" />
                 
                 <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                       <div className="space-y-6">
                          <span className="text-[#09716D] text-[12px] font-black uppercase tracking-[0.6em]">Training Program</span>
                          <h2 className="text-6xl lg:text-7xl font-black tracking-tighter italic leading-[0.9]">Learn <br />Spamming <br /><span className="text-[#09716D]">Fee — $1,500.</span></h2>
                          <p className="text-xl text-black/50 leading-relaxed font-medium max-w-lg">
                            As the world continues advancing, it gets even more clear that the best way to stay upgraded in this hustle is to stay updated. Take your grind to the next level by learning how to spam using advanced Android RAT (Remote Access Trojans).
                          </p>
                       </div>

                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                          {[
                            "Control phone remotely", 
                            "Read SMS (OTP/2FA)", 
                            "Keylogging Passwords", 
                            "Bypass App Locks", 
                            "Capture Banking OTP", 
                            "Transfer Money Direct",
                            "Loan in Client Name",
                            "Read WhatsApp/Emails"
                          ].map((f, i) => (
                            <div key={i} className="flex items-center gap-4 text-[13px] font-black uppercase tracking-widest text-[#09716D]">
                               <div className="w-2 h-2 bg-[#09716D] rounded-full animate-pulse" /> {f}
                            </div>
                          ))}
                       </div>

                       <div className="flex flex-wrap items-center gap-8 pt-10 border-t border-black/10">
                          <div className="space-y-1">
                             <div className="text-[10px] font-black uppercase text-black/30 tracking-widest">Mentorship 1-on-1</div>
                             <div className="text-4xl font-black italic">$1,500</div>
                          </div>
                          <div className="flex-1 min-w-[200px]">
                             <div className="w-full bg-[#09716D]/10 border border-[#09716D]/20 text-[#09716D] p-4 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[11px]">
                                <Shield size={14} /> Application Pending
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="relative">
                       <div className="aspect-square bg-white rounded-[4rem] border-8 border-black/5 overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                          <img 
                             src="https://cdn.durable.co/getty/254SaHW97jTsk7gpcTICMdLSZ7kVrljumyKaegmoIhXbj8OSNiCwlHFGAkdwoA4V.jpeg" 
                             className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale-0 transition-all duration-1000"
                             alt="Advanced Tech"
                             referrerPolicy="no-referrer"
                          />
                       </div>
                       {/* Floating UI */}
                       <motion.div 
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-10 -right-10 bg-[#09716D] text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col gap-3 max-w-[220px]"
                       >
                          <Smartphone size={32} />
                          <div className="text-2xl font-black italic tracking-tighter leading-none text-[#D6F4E8]">ACTIVE RAT</div>
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Terminal connected</p>
                       </motion.div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Accounts & Gifts Asymmetric Grid */}
        <section id="accounts" className="py-32 bg-[#FFFFF5]">
           <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                 {/* Large Showcase Card */}
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 p-12 lg:p-20 bg-white rounded-[5rem] border border-black/5 shadow-sm space-y-12 flex flex-col"
                 >
                    <div className="space-y-6">
                       <span className="text-[#09716D] font-black text-[12px] uppercase tracking-[0.5em]">Direct Pick Up</span>
                       <h2 className="heading-large !leading-[1] tracking-tighter">Made Easy!</h2>
                       <p className="body-large text-black/50 font-medium max-w-xl">
                          Buy—Login—Reset Passwords—Start accepting payments. High-limit Venmo and PayPal business accounts spammed and verified for instant usage.
                       </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       {[
                         { title: "Venmo Account", price: "$35↑", color: "#09716D", desc: "Buy—Login—Reset Passwords—Start accepting payments." },
                         { title: "PayPal Account", price: "$35↑", color: "#000", desc: "Verified business accounts spammed for instant usage." }
                       ].map((item, i) => (
                         <div key={i} className="p-8 rounded-[3rem] bg-[#FFFFF5] border border-black/5 space-y-4 hover:border-black transition-colors group">
                            <div className="flex items-center justify-between">
                               <h4 className="heading-medium !text-xl">{item.title}</h4>
                               <ArrowRight size={18} className="text-black/20 group-hover:text-black group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="text-3xl font-black tracking-tighter" style={{ color: i === 0 ? item.color : '#000' }}>{item.price}</div>
                            <p className="text-[12px] font-bold text-black/40 uppercase tracking-widest">{item.desc}</p>
                         </div>
                       ))}
                    </div>

                    <div className="mt-auto pt-10">
                       <a href="https://wa.me/447459861244" className="button !bg-black !text-white !rounded-3xl !px-10 !py-5 font-black uppercase tracking-widest w-full text-center">Get Verified Account</a>
                    </div>
                 </motion.div>

                 {/* Focus Gift Card */}
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 p-12 lg:p-20 bg-[#fcfce0] rounded-[5rem] border border-black/5 shadow-sm space-y-10 group relative overflow-hidden"
                 >
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#09716D]/5 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
                    <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-[#09716D] shadow-sm mb-10 group-hover:scale-110 transition-transform duration-500">
                       <Gift size={32} />
                    </div>
                    <div className="space-y-6">
                       <h2 className="heading-medium text-4xl leading-[1] italic">Send Physical <br />Gifts 🎁</h2>
                       <p className="body-normal text-black/60 font-bold uppercase tracking-widest text-[11px] leading-relaxed">
                          Build emotional leverage <br />Ship to client address in <span className="text-black">24-72 hours.</span>
                       </p>
                       <p className="body-normal text-black/60 font-medium">
                          Trust is built on emotions. Seal the bond with premium physical shipments for $35↑ per item.
                       </p>
                    </div>
                    <div className="pt-8">
                       <a href="https://wa.me/447459861244" className="font-black text-sm uppercase tracking-[0.2em] text-black border-b-4 border-[#09716D] pb-1 hover:border-black transition-all">
                          Ship A Gift Now
                       </a>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Reputation */}
        <section className="py-32 bg-white">
           <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
                 <div className="space-y-4">
                    <span className="text-[#09716D] font-black text-[12px] uppercase tracking-[0.5em]">The Network</span>
                    <h2 className="heading-large !leading-[0.9] tracking-tighter">Client <br />Intelligence.</h2>
                 </div>
                 <div className="flex items-center gap-4 py-4 px-6 bg-[#D6F4E8]/20 rounded-full border border-[#D6F4E8]/40">
                    <div className="flex -space-x-4">
                       {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+44}`} className="w-10 h-10 rounded-full border-4 border-white" />)}
                    </div>
                    <span className="text-sm font-black italic">5,000+ VOUCHERS</span>
                 </div>
              </div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
                 {testimonials.map((review, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="break-inside-avoid p-10 rounded-[3rem] bg-[#FFFFF5] border border-black/5 hover:bg-white transition-all shadow-sm group"
                   >
                     <div className="flex items-center gap-5 mb-8">
                        <img src={review.img} className="w-14 h-14 rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover" />
                        <div>
                           <div className="text-[13px] font-black uppercase tracking-widest text-[#09716D]">{review.name}</div>
                           <div className="text-[10px] font-bold text-black/20 uppercase tracking-widest">Verified Client</div>
                        </div>
                        <Award className="ml-auto text-black/10 group-hover:text-[#09716D] transition-colors" />
                     </div>
                     <p className="text-xl font-bold tracking-tight text-black/70 leading-relaxed italic">"{review.text}"</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* FAQ - Elite Styling */}
        <section id="faq" className="py-32 bg-[#FFFFF5]">
           <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-20">
                 <div className="text-center space-y-4">
                    <span className="text-[#09716D] font-black text-[12px] uppercase tracking-[0.5em]">Knowledge base</span>
                    <h2 className="heading-large tracking-tighter leading-none">The Playbook.</h2>
                 </div>

                 <div className="space-y-6">
                    {[
                      { q: "What packages does Gblock offer?", a: "Gblock has a wide range of working tools: Spamming + Hacking Training, Freshly spammed Cc/Cheques, Bank Logs for ACH, Quick Etransfer pick up, and Verified Accounts." },
                      { q: "Where is Gblock located?", a: "Gblock prefers to stay anonymous for longevity and security reasons, but we are always on the Gblock waiting for you!" },
                      { q: "How can I contact for support?", a: "Click the WhatsApp chat link on this site to reach our customer support team. We're available 24/7 to assist you." },
                      { q: "Does Gblock offer any warranty?", a: "Yes, our services are top quality, and we take full responsibility for resolving any issues that arise, provided the problem is from our end." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden">
                        <button 
                          onClick={() => toggleFAQ(i)}
                          className="w-full p-10 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
                        >
                           <span className="text-2xl font-black italic tracking-tighter text-black/80">{item.q}</span>
                           <motion.div 
                              animate={{ rotate: activeFAQ === i ? 180 : 0 }}
                              className="w-12 h-12 bg-[#D6F4E8] rounded-full flex items-center justify-center text-[#09716D]"
                           >
                              <ChevronDown size={24} />
                           </motion.div>
                        </button>
                        <motion.div 
                          initial={false}
                          animate={{ height: activeFAQ === i ? "auto" : 0, opacity: activeFAQ === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                           <div className="px-10 pb-10 border-t border-black/5 pt-8 text-lg font-medium text-black/50 leading-relaxed italic">
                              {item.a}
                           </div>
                        </motion.div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Modern High-End Footer */}
      <footer id="contact" className="bg-[#FFFFF5] text-black pt-32 pb-16 selection:bg-[#09716D] selection:text-white border-t border-black/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
               <div className="space-y-10">
                  <Logo />
                  <p className="text-lg font-medium text-black/40 leading-relaxed">
                    The ultimate infrastructure for digital operations. Secure, anonymous, and elite.
                  </p>
                  <div className="flex gap-4">
                     <a href="https://t.me/Gblock202" className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center hover:bg-[#09716D] hover:text-white transition-all">
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
                     <li><a href="#credit-cards" className="text-black/40 hover:text-[#09716D] transition-colors">Digital CCs</a></li>
                     <li><a href="#accounts" className="text-black/40 hover:text-[#09716D] transition-colors">ACH Access</a></li>
                     <li><a href="#accounts" className="text-black/40 hover:text-[#09716D] transition-colors">Verified IDs</a></li>
                     <li><a href="#training" className="text-black/40 hover:text-[#09716D] transition-colors">Masterclass</a></li>
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

      {/* Floating System Icons */}
      <div className="fixed bottom-8 right-8 z-[3000] flex flex-col gap-5">
         <motion.a 
            whileHover={{ scale: 1.1, x: -8 }}
            whileTap={{ scale: 0.9 }}
            href="https://t.me/Gblock202"
            target="_blank"
            className="w-18 h-18 bg-[#0088cc] text-white rounded-[1.8rem] shadow-2xl flex items-center justify-center border-4 border-white/10 backdrop-blur-md"
         >
            <Send size={32} />
         </motion.a>
         <motion.a 
            whileHover={{ scale: 1.1, x: -8 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/447459861244"
            target="_blank"
            className="w-18 h-18 bg-[#25D366] text-white rounded-[1.8rem] shadow-2xl flex items-center justify-center border-4 border-white/10 backdrop-blur-md"
         >
            <MessageCircle size={32} />
         </motion.a>
         {/* Mouse Trail Hint */}
         <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden lg:flex items-center justify-center text-black/10 hover:text-black/30 transition-colors"
         >
            <MousePointer2 size={16} />
         </motion.div>
      </div>
    </div>
  );
}
