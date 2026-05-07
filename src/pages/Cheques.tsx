import { motion } from "motion/react";
import { Shield, Check, ArrowRight, Zap, Target } from "lucide-react";

export default function Cheques() {
  const cheques = [
    {
      title: "Chase Bank Checks",
      price: "$50",
      limit: "$500 — $1,500",
      desc: "PDF Tutorial",
      tag: "Cheques"
    },
    {
      title: "Capital One Cheques",
      price: "$100",
      limit: "$1,500 — $2,500",
      desc: "PDF Tutorial",
      tag: "Cheques"
    },
    {
      title: "Chase Bank Cheques",
      price: "$250",
      limit: "$2,500 — $5,000",
      desc: "PDF Tutorial",
      tag: "Cheques"
    },
    {
      title: "Bank Of America (BOA) Cheques",
      price: "$450",
      limit: "$5,000 — $10,000",
      desc: "PDF Tutorial",
      tag: "Chequers"
    }
  ];

  return (
    <div className="pt-24 pb-32 bg-white selection:bg-[#09716D] selection:text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center space-y-8">
           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#09716D]/5 border border-[#09716D]/10">
              <Target size={14} className="text-[#09716D]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09716D]">Precision Instruments 🎯</span>
           </div>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="heading-xlarge !tracking-tighter"
           >
             Get U.S <br /><span className="text-[#09716D]">Cheques.</span>
           </motion.h1>
           <p className="text-lg md:text-xl text-black/50 font-medium max-w-5xl mx-auto leading-relaxed italic">
             Purchase freshly spammed U.S cheques, get them delivered to your clients addresses for ATM deposits or cashout at Bank, or deposit it online easily, How? instruct your client to Login to their mobile bank app and select move–money option from the tab menu, then select deposit check also known as Mobile deposits or E-deposit on some bank apps. Deposits are mostly made instantly or within an hour or maximum of 3 to 5 business days! Once confirmed, you can now proceed to Initiate your transfers smoothly for easy cashout || First transfers should be low amount within $1K to $5K (RECOMMENDED)
             <br /><br />
             Get a more detailed step-by-step PDF tutorial after purchase. Should you get confused at any stage, Please contact us for setup assistance.
           </p>
        </div>

        <div className="mb-12 text-center lg:text-left">
           <h2 className="heading-medium text-3xl italic tracking-tighter">Cheques</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
           {cheques.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-12 rounded-[5rem] bg-[#FFFFF5] border border-black/5 flex flex-col group hover:border-[#09716D] transition-all duration-500 shadow-sm"
             >
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-[#09716D] group-hover:text-white transition-all shadow-sm">
                      <Shield size={32} />
                   </div>
                   <span className="px-5 py-2 rounded-full bg-white border border-black/5 text-[10px] font-black uppercase tracking-widest text-[#09716D] group-hover:bg-[#09716D] group-hover:text-white transition-all">
                      {item.tag}
                   </span>
                </div>

                <div className="space-y-4 mb-12 text-left">
                   <h3 className="heading-medium text-2xl md:text-4xl italic tracking-tighter">{item.title}</h3>
                   <p className="text-lg text-black/40 font-medium leading-relaxed">{item.desc}</p>
                   <div className="pt-6 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-2xl text-[10px] font-black uppercase tracking-wider text-black/60">
                         <Zap size={14} className="text-[#09716D]" /> Rapid Hit
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-2xl text-[10px] font-black uppercase tracking-wider text-black/60">
                         <Check size={14} className="text-[#09716D]" /> Success Guaranteed
                      </div>
                   </div>
                </div>

                <div className="mt-auto pt-10 border-t border-black/5 flex items-end justify-between">
                   <div className="space-y-3 text-left">
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-[#09716D] mb-1">Price — <span className="text-lg md:text-xl font-black">{item.price}</span></div>
                      </div>
                      <div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">BALANCE: {item.limit}</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Chat Admin to BUY NOW!</div>
                      <a href="https://wa.me/447459861244" className="button !bg-black !text-white !rounded-3xl hover:!bg-[#09716D] transition-all flex gap-3 shadow-lg group-hover:shadow-[#09716D]/20">
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
              <div className="text-[10px] mt-4 opacity-50 text-right">11:47</div>
           </div>
           <a href="https://wa.me/447459861244" target="_blank" className="button !bg-black !text-white !rounded-3xl !w-full !py-6 font-black uppercase tracking-widest hover:!bg-[#09716D] transition-all flex justify-center gap-3">
              Click to Start Chat <ArrowRight size={20} />
           </a>
        </div>
      </div>
    </div>
  );
}
