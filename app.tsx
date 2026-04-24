/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Network, 
  Vote, 
  Globe, 
  Cpu,
  Twitter,
  Linkedin,
  Instagram,
  Link as LinkIcon,
  ChevronRight,
  Terminal,
  User,
  Mail,
  Phone,
  Snowflake,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[130px] rounded-full"
      />
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -60, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-cyan-400/10 blur-[110px] rounded-full"
      />
      <motion.div 
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-grid opacity-[0.05]" 
      />
    </div>
  );
};

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-2xl px-6 py-5 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white leading-none">
          FIKREMARKOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">BELAY</span>
        </h1>
        <p className="text-slate-500 font-bold tracking-[0.2em] uppercase text-[9px] mt-1">Academic Committee • 2026 Candidate</p>
      </div>
      <div className="hidden lg:flex flex-col text-right">
        <div className="text-blue-400 font-mono text-[10px] tracking-widest uppercase flex items-center justify-end gap-2">
          <Terminal size={12} /> fikremarkos2029@hmacademy.org
        </div>
        <div className="text-sm font-serif italic text-slate-400 mt-1">"Building the tools for universal excellence."</div>
      </div>
    </nav>
  );
};

const SocialLinks = () => {
  const links = [
    { name: 'X', icon: Twitter, url: 'https://x.com/FikreBelay66142', color: 'hover:text-sky-400 hover:bg-sky-400/10' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/fikred2002', color: 'hover:text-pink-400 hover:bg-pink-400/10' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-400 hover:bg-blue-400/10' },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Campaign link copied!");
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {/* Contact Stickers - Larger and Enhanced */}
      <div className="flex flex-col gap-4 w-full px-4">
        <a href="mailto:fikremarkos2029@hmacademy.org" className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-2xl group hover:border-blue-500/40 transition-all hover:scale-[1.02] backdrop-blur-md">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
            <Mail size={24} />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Official Email</span>
            <span className="text-xs font-bold text-slate-200">fikremarkos2029@hmacademy.org</span>
          </div>
        </a>
        <a href="tel:0956807578" className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-2xl group hover:border-cyan-500/40 transition-all hover:scale-[1.02] backdrop-blur-md">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
            <Phone size={24} />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Direct Line</span>
            <span className="text-xs font-bold text-slate-200">0956807578</span>
          </div>
        </a>
      </div>

      {/* Social Row */}
      <div className="flex gap-3">
        {links.map((link) => (
          <a 
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-slate-900/80 border border-slate-800 rounded-2xl transition-all duration-300 group ${link.color}`}
            title={`Follow on ${link.name}`}
          >
            <link.icon size={18} />
          </a>
        ))}
        <button 
          onClick={copyLink}
          className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl transition-all duration-300 group hover:bg-slate-700 hover:border-slate-500"
        >
          <LinkIcon size={18} className="group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

const Pillar = ({ icon: Icon, title, points, color = "blue", className = "", link }: { icon: any, title: string, points: string[], color?: string, className?: string, link?: string }) => {
  const accentColor = color === "blue" ? "text-blue-400" : color === "emerald" ? "text-emerald-400" : "text-amber-400";
  const hoverBorder = color === "blue" ? "hover:border-blue-500/50" : color === "emerald" ? "hover:border-emerald-500/50" : "hover:border-amber-500/50";
  const iconBg = color === "blue" ? "bg-blue-500/20" : color === "emerald" ? "bg-emerald-500/20" : "bg-amber-500/20";
  const bulletColor = color === "blue" ? "bg-blue-500" : color === "emerald" ? "bg-emerald-500" : "bg-amber-500";

  const Content = (
    <>
      <div>
        <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
          <Icon className={accentColor} size={24} />
        </div>
        
        <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase leading-none italic">
          {title}
        </h3>
        
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex gap-3 text-xs text-slate-400 leading-relaxed items-start">
              <span className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${bulletColor} opacity-60`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      {link && (
        <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
          Visit Platform <ExternalLink size={12} />
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <motion.a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-slate-900/40 border-bento rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group backdrop-blur-sm ${hoverBorder} ${className} cursor-pointer`}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-slate-900/40 border-bento rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group backdrop-blur-sm ${hoverBorder} ${className}`}
    >
      {Content}
    </motion.div>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative">
      <DynamicBackground />
      
      <Header />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-12 auto-rows-min gap-4">
          
          {/* PERSONAL BIO / ABOUT SECTION */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 lg:col-span-4 lg:row-span-2 bg-slate-900/40 border-bento rounded-3xl p-8 flex flex-col items-center text-center justify-between backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
              <Terminal size={120} />
            </div>
            
            <div className="w-full">
              <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-500 p-[2px] mx-auto mb-6 shadow-2xl shadow-blue-500/30 group-hover:scale-105 transition-transform duration-500 relative">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center overflow-hidden">
                  <User size={64} className="text-blue-500/20" strokeWidth={1} />
                </div>
                {/* Overlay text indicating a place for upload */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase text-white bg-black/60 px-2 py-1 rounded-md">Snapshot Placeholder</span>
                </div>
              </div>
              <h2 className="text-3xl font-black uppercase text-white tracking-tighter italic">Profile</h2>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono text-[11px] uppercase mt-1 tracking-[0.2em] font-bold">Fikremarkos Belay</p>
              
              <div className="mt-6 text-xs text-slate-400 italic leading-relaxed px-6">
                "Leadership isn't about the title; it's about the <span className="text-white font-bold">tools</span> I can give to you. Let's build the future of HMA academia together."
              </div>
            </div>

            <div className="w-full mt-8 pt-8 border-t border-slate-800/50">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4">Connect & Spread Awareness</p>
              <div className="flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </motion.div>

          {/* MAIN VISION CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-8 bg-gradient-to-br from-slate-900/60 to-blue-950/20 border-bento rounded-3xl p-10 relative overflow-hidden flex flex-col justify-center min-h-[360px]"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5">
              <Snowflake size={200} />
            </div>
            <h2 className="text-blue-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-6 italic flex items-center gap-2">
              <Terminal size={12} /> THE BUILDER'S VISION
            </h2>
            <p className="text-2xl md:text-4xl leading-[1.1] font-light text-slate-100 max-w-2xl">
              "We are blocked by paywalls and technical friction. Leadership is about <span className="text-white font-semibold underline decoration-blue-500 underline-offset-8">unlocking tools</span> for one common goal: Excellence."
            </p>
          </motion.div>

          {/* PILLARS - BENTO TILES */}
          <Pillar 
            className="col-span-12 md:col-span-6 lg:col-span-4"
            icon={Zap}
            title="Tikuret Initiative"
            link="https://tikuretentrance.com/"
            points={[
              "Institutional discounts via Dagim Wallelign (Tikuret CEO).",
              "Ensuring intellectually-driven success, not subscription-driven access.",
              "Breaking the assessment paywall cycle for all HMA students."
            ]}
          />

          <Pillar 
            className="col-span-12 md:col-span-6 lg:col-span-4"
            icon={Network}
            title="The ICT Bridge"
            color="emerald"
            points={[
              "Zero-VPN Scribd access through official ICT collaboration.",
              "Elevating HMA research to the Ethiopian Journal of Economics.",
              "Making our school the national leader in academic knowledge sharing."
            ]}
          />

          <motion.div 
            className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-900/40 border-bento rounded-3xl p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 group backdrop-blur-sm"
          >
            <div>
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="text-amber-400" size={24} />
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase italic">AI Tool Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 group/item leading-relaxed">
                  <span className="text-amber-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                  <span className="text-[11px] text-slate-400">Claude & NotebookLM integration for study toolkit.</span>
                </li>
                <li className="flex items-start gap-2 group/item leading-relaxed">
                  <span className="text-amber-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                  <span className="text-[11px] text-blue-300 font-medium">Developing Custom HMA-GPT Architecture.</span>
                </li>
                <li className="flex items-start gap-2 group/item leading-relaxed">
                  <span className="text-amber-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                  <span className="text-[11px] text-slate-400">AddisCoder Mentorship for tech supremacy.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 bg-black/40 border border-white/5 rounded-xl p-3">
              <p className="text-[9px] text-amber-200/50 leading-relaxed font-mono">
                [ STATUS: OPTIMIZING ACCESS ]
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-900/40 border-bento rounded-3xl p-8 flex items-center gap-6 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex-1">
              <h3 className="text-lg font-black text-white leading-tight uppercase mb-1 italic">Data Democracy</h3>
              <p className="text-[10px] text-slate-500 italic leading-snug tracking-tight">Google Forms for voting. Telegram Hubs for shared answers. No more email silos.</p>
            </div>
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Vote size={32} className="text-blue-500" />
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-12 md:col-span-6 lg:col-span-4 bg-slate-900/40 border-bento rounded-3xl p-6 flex items-center justify-between group cursor-pointer hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Terminal size={18} className="text-blue-400" />
              </div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Candidate Speech</span>
            </div>
            <ChevronRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
          </motion.div>

          {/* FINAL CTA CARD */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="col-span-12 bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-500/20 group relative overflow-hidden"
          >
            <div className="absolute inset-0 icy-gradient opacity-20" />
            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <p className="text-[9px] uppercase font-black text-blue-100 tracking-[0.5em] mb-3">Vote for Future</p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white italic tracking-tighter leading-none">FIKREMARKOS BELAY</p>
            </div>
            <div className="relative z-10 bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl group-hover:bg-slate-50 transition-colors">
              LET HMA SHINE
            </div>
          </motion.div>

        </div>

        {/* FOOTER */}
        <footer className="mt-16 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 font-mono tracking-[0.3em] gap-6 px-4">
          <div className="flex gap-4 items-center">
            <span className="text-blue-500 font-bold">MADE BY FIKREMARKOS BELAY</span>
            <span className="opacity-20">|</span>
            <span>BUILDER • DEVELOPER • STUDENT</span>
          </div>
          <div className="flex items-center gap-2">
            <span>© 2026 ACADEMIC COMMITTEE</span>
            <Snowflake size={12} className="text-blue-500/30" />
          </div>
        </footer>
      </main>
    </div>
  );
}
