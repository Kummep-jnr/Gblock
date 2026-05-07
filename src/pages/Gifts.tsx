import { motion } from "motion/react";
import { Gift, ArrowRight, Zap, Check } from "lucide-react";

export default function Gifts() {
  const maleGifts = [
    { title: "Classic Leather Jacket", desc: "A timeless piece that adds confidence and style, with a customized greeting card in your client’s name." },
    { title: "Luxury Wrist Watch", desc: "Perfect for expressing elegance and precision, with a customized greeting card in your client’s name." },
    { title: "Designer Loafers", desc: "Smooth, stylish, and built for comfort, with a customized greeting card in your client’s name." },
    { title: "Tailored Suit Set", desc: "Ideal for business or formal events, symbolizing success and sophistication, with a customized greeting card in your client’s name." },
    { title: "Casual Sneakers", desc: "For everyday comfort and effortless charm, with a customized greeting card in your client’s name." },
    { title: "Branded Hoodie", desc: "Perfect for relaxed weekends and travel comfort, with a customized greeting card in your client’s name." },
    { title: "Signature Perfume", desc: "A refined fragrance that completes his look, with a customized greeting card in your client’s name." },
    { title: "Premium Underwear Set", desc: "Soft cotton or boxer briefs for daily comfort and fit, with a customized greeting card in your client’s name." },
    { title: "Cotton Polo & Denim Jeans Combo", desc: "Relaxed yet refined everyday style, with a customized greeting card in your client’s name." }
  ];

  const femaleGifts = [
    { title: "Elegant Handbag", desc: "A classy must-have for every outing, with a customized greeting card in your client’s name." },
    { title: "Silk Dress", desc: "Soft, graceful, and made to stand out on any occasion, with a customized greeting card in your client’s name." },
    { title: "Designer Heels", desc: "A symbol of confidence and beauty in motion, with a customized greeting card in your client’s name." },
    { title: "Luxury Wrist Watch", desc: "For timeless elegance and subtle sophistication, with a customized greeting card in your client’s name." },
    { title: "Human Hair Wig", desc: "Gorgeous and natural-looking, adding effortless charm, with a customized greeting card in your client’s name." },
    { title: "Lace Lingerie or Silk Underwear Set", desc: "Elegant, feminine, and perfectly detailed, with a customized greeting card in your client’s name." },
    { title: "Fashion Tote Bag", desc: "Perfect for daily use with a blend of function and style, with a customized greeting card in your client’s name." },
    { title: "Exclusive Perfume Set", desc: "Captures her personality and grace, with a customized greeting card in your client’s name." }
  ];

  return (
    <div className="pt-24 pb-32 bg-white selection:bg-[#09716D] selection:text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xlarge !tracking-tighter"
          >
            Send Gifts to Your <br /><span className="text-[#09716D]">Clients 🎁</span>
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="p-12 lg:p-16 rounded-[4rem] bg-[#FFFFF5] border border-black/5 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#09716D]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
             <p className="text-lg font-bold italic tracking-tighter leading-relaxed text-black/80">
               While you’re busy feeding your clients the same old lines, a smarter player is out there sending those same clients gifts — showing affection, building trust, and locking in loyalty. This move works like magic; once their emotions are tied to you through those gifts, your instructions or bills never get a “no.” They value gifts more than words. Your duty is to order it, Ours is to ensure they receive it!
             </p>
          </motion.div>
        </div>

        <div className="mb-12 text-center lg:text-left">
           <h2 className="heading-medium text-3xl italic tracking-tighter">Gifts 🎁</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
           {/* Food Card 1 */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="p-12 rounded-[5rem] bg-[#FFFFF5] border border-black/5 flex flex-col group hover:border-[#09716D] transition-all duration-500 shadow-sm"
           >
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-[#09716D] group-hover:text-white transition-all shadow-sm">
                    <Gift size={32} />
                 </div>
                 <span className="px-5 py-2 rounded-full bg-white border border-black/5 text-[10px] font-black uppercase tracking-widest text-[#09716D] group-hover:bg-[#09716D] group-hover:text-white transition-all">
                    Gifts 🎁
                 </span>
              </div>

              <div className="space-y-4 mb-12 text-left">
                 <h3 className="heading-medium text-2xl md:text-4xl italic tracking-tighter">Special Food Dishes</h3>
                 <p className="text-lg text-black/40 font-medium leading-relaxed">
                   Snacks, Ice Creams, Birthday Cakes, Wines(Alcoholic &Non Alcoholic), Salads, Sushi, Pizza, Burgers, Soups
                 </p>
              </div>

              <div className="mt-auto pt-10 border-t border-black/5 flex items-end justify-between">
                 <div className="space-y-3 text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#09716D]">Price — <span className="text-xl font-black">$50↑</span></div>
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Chat Admin to BUY NOW!</div>
                    <a href="https://wa.me/447459861244" className="button !bg-black !text-white !rounded-3xl hover:!bg-[#09716D] transition-all flex gap-3 shadow-lg group-hover:shadow-[#09716D]/20">
                       Chat Admin! <ArrowRight size={18} />
                    </a>
                 </div>
              </div>
           </motion.div>

           {/* Food Card 2 (Duplicate as requested) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="p-12 rounded-[5rem] bg-[#FFFFF5] border border-black/5 flex flex-col group hover:border-[#09716D] transition-all duration-500 shadow-sm"
           >
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-[#09716D] group-hover:text-white transition-all shadow-sm">
                    <Gift size={32} />
                 </div>
                 <span className="px-5 py-2 rounded-full bg-white border border-black/5 text-[10px] font-black uppercase tracking-widest text-[#09716D] group-hover:bg-[#09716D] group-hover:text-white transition-all">
                    Gifts 🎁
                 </span>
              </div>

              <div className="space-y-4 mb-12 text-left">
                 <h3 className="heading-medium text-2xl md:text-4xl italic tracking-tighter">Special Food Dishes</h3>
                 <p className="text-lg text-black/40 font-medium leading-relaxed">
                   Snacks, Ice Creams, Birthday Cakes, Wines(Alcoholic &Non Alcoholic), Salads, Sushi, Pizza, Burgers, Soups
                 </p>
              </div>

              <div className="mt-auto pt-10 border-t border-black/5 flex items-end justify-between">
                 <div className="space-y-3 text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#09716D]">Price — <span className="text-xl font-black">$50↑</span></div>
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Chat Admin to BUY NOW!</div>
                    <a href="https://wa.me/447459861244" className="button !bg-black !text-white !rounded-3xl hover:!bg-[#09716D] transition-all flex gap-3 shadow-lg group-hover:shadow-[#09716D]/20">
                       Chat Admin! <ArrowRight size={18} />
                    </a>
                 </div>
              </div>
           </motion.div>

           {/* Outfit Collection Card */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="p-12 rounded-[5rem] bg-[#FFFFF5] border border-black/5 flex flex-col group hover:border-[#09716D] transition-all duration-500 shadow-sm md:col-span-2"
           >
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-[#09716D] group-hover:text-white transition-all shadow-sm">
                    <Gift size={32} />
                 </div>
                 <span className="px-5 py-2 rounded-full bg-white border border-black/5 text-[10px] font-black uppercase tracking-widest text-[#09716D] group-hover:bg-[#09716D] group-hover:text-white transition-all">
                    Gifts 🎁
                 </span>
              </div>

              <div className="space-y-12 mb-12 text-left">
                 <div>
                    <h3 className="heading-medium text-2xl md:text-5xl italic tracking-tighter mb-4">Male and Female Outfits</h3>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#09716D] mb-8">Price — <span className="text-xl font-black">$50↑</span></div>
                 </div>

                 <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                       <h4 className="heading-small tracking-tighter text-[#09716D]">🎁 MALE GIFT COLLECTION</h4>
                       <ul className="space-y-6">
                          {maleGifts.map((gift, i) => (
                             <li key={i} className="space-y-1">
                                <div className="flex gap-3 text-sm font-black italic tracking-tight">
                                   <Check size={16} className="text-[#09716D] shrink-0 mt-0.5" />
                                   {gift.title}
                                </div>
                                <p className="text-xs text-black/40 font-medium pl-7 leading-relaxed">{gift.desc}</p>
                             </li>
                          ))}
                       </ul>
                    </div>

                    <div className="space-y-8">
                       <h4 className="heading-small tracking-tighter text-[#09716D]">👗 FEMALE GIFT COLLECTION</h4>
                       <ul className="space-y-6">
                          {femaleGifts.map((gift, i) => (
                             <li key={i} className="space-y-1">
                                <div className="flex gap-3 text-sm font-black italic tracking-tight">
                                   <Check size={16} className="text-[#09716D] shrink-0 mt-0.5" />
                                   {gift.title}
                                </div>
                                <p className="text-xs text-black/40 font-medium pl-7 leading-relaxed">{gift.desc}</p>
                             </li>
                          ))}
                       </ul>
                    </div>
                 </div>
              </div>

              <div className="mt-auto pt-10 border-t border-black/5 flex items-center justify-end">
                 <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Chat Admin to BUY NOW!</div>
                    <a href="https://wa.me/447459861244" className="button !bg-black !text-white !rounded-3xl hover:!bg-[#09716D] transition-all flex gap-3 shadow-lg group-hover:shadow-[#09716D]/20">
                       Chat Admin! <ArrowRight size={18} />
                    </a>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Help Section */}
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
              <div className="text-[10px] mt-4 opacity-50 text-right">11:49</div>
           </div>
           <a href="https://wa.me/447459861244" target="_blank" className="button !bg-black !text-white !rounded-3xl !w-full !py-6 font-black uppercase tracking-widest hover:!bg-[#09716D] transition-all flex justify-center gap-3">
              Click to Start Chat <ArrowRight size={20} />
           </a>
        </div>
      </div>
    </div>
  );
}
