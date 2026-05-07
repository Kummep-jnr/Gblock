import { motion } from "motion/react";
import { CreditCard, Check, ArrowRight, Shield, Zap, Send } from "lucide-react";

export default function CreditCards() {
  const cards = [
    {
      title: "Capital One Spark® Cc",
      price: "$50",
      limit: "$500 — $1,500",
      desc: "PDF Tutorial. Can be spent on TikTok Live/Shop Or shipped to Client for easy cashout.",
      tag: "Live Cc"
    },
    {
      title: "Capital One Spark® Cc",
      price: "$150",
      limit: "$1,500 — $2,500",
      desc: "PDF Tutorial. Can be spent on TikTok Live/Shop Or shipped to Client for easy cashout.",
      tag: "Live Cc"
    },
    {
      title: "American Express® Cc",
      price: "$250",
      limit: "$2,500 — $5,000",
      desc: "PDF Tutorial. Can be spent on TikTok Live/Shop, Online stores Or shipped to Client for easy cashout.",
      tag: "Live Cc"
    },
    {
      title: "American Express® Cc",
      price: "$500",
      limit: "$5,000 — $10,000",
      desc: "PDF Tutorial. Can be spent on TikTok Live/Shop, Online stores Or shipped to Client for easy cashout.",
      tag: "Live Cc"
    }
  ];

  return (
    <div className="pt-24 pb-32 bg-white selection:bg-[#09716D] selection:text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center space-y-8">
           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#09716D]/5 border border-[#09716D]/10">
              <span className="w-2 h-2 bg-[#09716D] rounded-full animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09716D]">Direct Delivery 📍</span>
           </div>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="heading-xlarge !tracking-tighter"
           >
             Get Your <br /><span className="text-[#09716D]">Card.</span>
           </motion.h1>
           <p className="text-lg md:text-xl text-black/50 font-medium max-w-2xl mx-auto leading-relaxed italic">
             A step-by-step PDF tutorial will be sent after purchase. Should you get confused at any stage, Please contact us for setup assistance.
           </p>
        </div>

        <div className="mb-12 text-center lg:text-left">
           <h2 className="heading-medium text-3xl italic tracking-tighter">Live Credit Cards</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
           {cards.map((card, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-12 rounded-[4rem] bg-[#FFFFF5] border border-black/5 flex flex-col group hover:border-[#09716D] transition-all duration-500 shadow-sm"
             >
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-[#09716D] group-hover:text-white transition-all shadow-sm">
                      <CreditCard size={32} />
                   </div>
                   <span className="px-5 py-2 rounded-full bg-white border border-black/5 text-[10px] font-black uppercase tracking-widest text-[#09716D] group-hover:bg-[#09716D] group-hover:text-white transition-all">
                      {card.tag}
                   </span>
                </div>

                <div className="space-y-4 mb-12 text-left">
                   <h3 className="heading-medium text-2xl md:text-4xl italic tracking-tighter">{card.title}</h3>
                   <p className="text-lg text-black/40 font-medium leading-relaxed">{card.desc}</p>
                   <div className="pt-6 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-2xl text-[10px] font-black uppercase tracking-wider text-black/60">
                         <Zap size={14} className="text-[#09716D]" /> Instant Delivery
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-2xl text-[10px] font-black uppercase tracking-wider text-black/60">
                         <Shield size={14} className="text-[#09716D]" /> Verified BIN
                      </div>
                   </div>
                </div>

                <div className="mt-auto pt-10 border-t border-black/5 flex items-end justify-between">
                   <div className="space-y-3 text-left">
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-[#09716D] mb-1">Price — <span className="text-lg md:text-xl font-black">{card.price}</span></div>
                      </div>
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">BALANCE: {card.limit}</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Chat Admin to BUY NOW!</div>
                      <a href="https://wa.me/447459861244" className="button !bg-black !text-white !rounded-3xl hover:!bg-[#09716D] shadow-lg group-hover:shadow-[#09716D]/20 transition-all flex gap-3">
                         Chat Admin! <ArrowRight size={18} />
                      </a>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>


        <div className="mt-32 max-w-xl mx-auto p-10 rounded-[3rem] bg-[#FFFFF5] border border-black/5 flex flex-col items-center text-center space-y-6">
           <div className="w-16 h-16 bg-[#09716D] rounded-full flex items-center justify-center text-white shadow-xl">
              <Zap size={32} />
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-black italic tracking-tighter">Help</h3>
              <p className="text-black/50 font-bold italic">Gblock 202</p>
           </div>
           <div className="p-6 rounded-3xl bg-white border border-black/5 w-full text-left relative">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#09716D] mb-1">Your Contact Name</div>
              <div className="text-sm font-bold text-black/80">Typically replies instantly</div>
           </div>
           <div className="p-6 rounded-3xl bg-[#09716D] text-white w-full text-left relative shadow-lg">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Your Contact Name</div>
              <div className="text-sm font-bold italic">"Hey there! 😀 How can I help you?"</div>
              <div className="text-[10px] mt-4 opacity-50 text-right">11:31</div>
           </div>
           <a href="https://wa.me/447459861244" target="_blank" className="button !bg-black !text-white !rounded-3xl !w-full !py-6 font-black uppercase tracking-widest hover:!bg-[#09716D] transition-all flex justify-center gap-3">
              Click to Start Chat <ArrowRight size={20} />
           </a>
        </div>
      </div>
    </div>
  );
}
