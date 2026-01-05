---
theme: default
background: /bg_main_neural_1767635928849.png
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Marian Stancik - AI Solutions
  Portfolio Presentation
drawings:
  persist: false
css: unocss
transition: slide-left
---

<div class="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

<!-- Language Switcher -->

<div class="fixed top-4 right-4 z-50 flex gap-2 items-center bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
  <button class="text-xs text-white/50 hover:text-white transition uppercase font-bold tracking-wider">SK</button>
  <span class="text-white/20">|</span>
  <button class="text-xs text-brand-primary font-bold uppercase tracking-wider">EN</button>
</div>

<div class="relative z-10 flex flex-col items-center justify-center h-full">
  <div v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
  <h1 class="text-7xl font-display font-bold mb-6 tracking-tight">
    Is Your Business Ready for the <br/><span class="text-gradient drop-shadow-2xl">AI Revolution?</span>
  </h1>
  </div>

  <div v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }">
  <p class="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
    <span class="text-brand-primary font-bold">Automate</span> routine. 
    <span class="text-brand-secondary font-bold">Dominate</span> the market. 
    <span class="text-white font-bold">Earn</span> while you sleep.
  </p>
  </div>

  <div class="mt-16" v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 600 } }">
  <div class="flex items-center gap-4 px-8 py-4 rounded-2xl border border-brand-primary/30 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.2)]">
    <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary p-[2px]">
      <img src="https://github.com/marianstancik.png" class="w-full h-full rounded-full object-cover" alt="MS" onerror="this.src='https://ui-avatars.com/api/?name=Marian+Stancik&background=random'"/>
    </div>
    <div class="text-left">
      <div class="text-white font-bold text-lg leading-none mb-1">Marian Stancik</div>
      <div class="text-brand-muted text-xs uppercase tracking-wider">AI Solutions Architect</div>
    </div>
  </div>
  </div>
</div>

---
layout: default
background: /bg_speed_motion_1767635946889.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 grid grid-cols-2 gap-16 items-center h-full">
  <div v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
  <div class="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-6 uppercase tracking-widest">
    Critical Problem
  </div>
  <h2 class="text-5xl font-display font-bold leading-tight mb-8">
    Slow Web = <br/><span class="text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.6)] animate-pulse">Lost Money.</span>
  </h2>
  <p class="text-xl text-gray-300 leading-relaxed mb-8">
    <span class="text-white font-bold">53% of users</span> leave instantly if the site takes more than 3s to load. Slowness kills conversions.
  </p>
  
  <div class="flex items-center gap-6">
    <div class="flex flex-col">
      <span class="text-brand-secondary text-4xl font-bold">95+</span>
      <span class="text-xs text-brand-muted uppercase">Google PageSpeed</span>
    </div>
    <div class="w-[1px] h-12 bg-white/10"></div>
    <div class="flex flex-col">
      <span class="text-brand-primary text-4xl font-bold">&lt;0.5s</span>
      <span class="text-xs text-brand-muted uppercase">Load Time</span>
    </div>
  </div>
  </div>

  <div class="glass-card p-8 border-t-4 border-brand-secondary transform hover:scale-105 transition duration-500" v-motion
  :initial="{ opacity: 0, scale: 0.9 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }">
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-center gap-3">
      <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
      <span class="text-lg font-bold">Performance Audit</span>
    </div>
    <span class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-green-400">99</span>
  </div>
  
  <div class="w-full bg-gray-800 h-4 rounded-full overflow-hidden mb-8 ring-2 ring-black/20">
    <div class="bg-gradient-to-r from-brand-secondary to-green-400 w-full h-full origin-left transition-transform duration-1000 transform scale-x-0" 
         style="animation: fillBar 1.5s ease-out forwards; animation-delay: 0.5s;"></div>
  </div>

  <style>
    @keyframes fillBar { to { transform: scaleX(0.99); } }
  </style>

  <div class="grid grid-cols-2 gap-4">
     <div class="bg-white/5 p-4 rounded-lg border border-white/5">
       <div class="text-brand-primary text-xl mb-1 i-carbon-flash"></div>
       <div class="font-bold text-white">Lightning Fast</div>
       <div class="text-xs text-brand-muted">Instant rendering</div>
     </div>
     <div class="bg-white/5 p-4 rounded-lg border border-white/5">
       <div class="text-brand-secondary text-xl mb-1 i-carbon-chart-line-data"></div>
       <div class="font-bold text-white">SEO Boost</div>
       <div class="text-xs text-brand-muted">Google loves speed</div>
     </div>
  </div>
  </div>
</div>

---
layout: default
background: /bg_geo_search_1767635966170.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 h-full flex flex-col justify-center">
  <div class="mb-16" v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
  <h2 class="text-5xl font-display font-bold mb-4">
    Dominate in the Era of <span class="text-gradient">AI Search (GEO).</span>
  </h2>
  <div class="text-2xl text-brand-muted">Generative Engine Optimization (GEO)</div>
  <p class="text-gray-400 mt-4 max-w-2xl">
    Classic SEO is dead. Users don't ask Google for links. They ask AI for <span class="text-white font-bold">answers</span>.
  </p>
  </div>

  <div class="grid grid-cols-3 gap-6">
  <!-- Step 1 -->
  <div class="glass-card relative group hover:bg-white/10 transition duration-300" v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
    <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-dark border border-brand-secondary flex items-center justify-center font-display font-bold text-xl text-brand-secondary">1</div>
    <div class="h-full flex flex-col">
      <div class="i-carbon-model-alt text-4xl text-brand-secondary mb-4"></div>
      <h3 class="text-xl font-bold mb-2">Context Understanding</h3>
      <p class="opacity-80 text-sm leading-relaxed">
        We optimize data so LLMs (GPT-4, Claude) understand not just text, but the <span class="text-brand-secondary">meaning</span> of your business.
      </p>
    </div>
  </div>
  
  <!-- Step 2 -->
  <div class="glass-card relative group hover:bg-white/10 transition duration-300" v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
    <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-dark border border-white/20 flex items-center justify-center font-display font-bold text-xl text-white">2</div>
    <div class="h-full flex flex-col">
      <div class="i-carbon-network-4 text-4xl text-white mb-4"></div>
      <h3 class="text-xl font-bold mb-2">Authority Building</h3>
      <p class="opacity-80 text-sm leading-relaxed">
        We create connections and citations that AI evaluates as the <span class="text-white font-bold">most trusted source</span> in the segment.
      </p>
    </div>
  </div>

  <!-- Step 3 -->
  <div class="glass-card relative group hover:bg-white/10 transition duration-300" v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
    <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-dark border border-brand-primary flex items-center justify-center font-display font-bold text-xl text-brand-primary">3</div>
    <div class="h-full flex flex-col">
      <div class="i-carbon-trophy text-4xl text-brand-primary mb-4"></div>
      <h3 class="text-xl font-bold mb-2">Recommendation Winner</h3>
      <p class="opacity-80 text-sm leading-relaxed">
        When a client asks: <em>"Who is the best?"</em>, AI answers with one name. <span class="text-brand-primary font-bold">Yours.</span>
      </p>
    </div>
  </div>
  </div>
</div>

---
layout: default
background: /bg_chat_ai_1767635991402.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 grid grid-cols-[1.1fr_0.9fr] gap-8 items-center h-full">
<div v-motion
:initial="{ opacity: 0, x: -30 }"
:enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
<h2 class="text-4xl font-display font-bold mb-4 leading-tight">
Turn Visitors into <br/> <span class="text-brand-primary">Paying Clients.</span>
</h2>
<p class="text-lg text-gray-200 mb-6 leading-relaxed">
Stop losing leads to slow response times. While competitors sleep, your AI assistant closes deals and books meetings. Instantly.
</p>

<div class="space-y-3">
<div class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
<div class="w-10 h-10 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-secondary text-xl">
<div class="i-carbon-data-base"></div>
</div>
<div>
<h4 class="font-bold text-white text-sm">Knows Your Entire Business</h4>
<p class="text-xs text-gray-400">Answers strictly based on your data. No hallucinations, just facts.</p>
</div>
</div>

<div class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
<div class="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary text-xl">
<div class="i-carbon-flash"></div>
</div>
<div>
<h4 class="font-bold text-white text-sm">Instant Reaction</h4>
<p class="text-xs text-gray-400">Avg response &lt; 2 seconds. No waiting for an operator.</p>
</div>
</div>
</div>
</div>

<div class="relative" v-motion :initial="{ opacity: 0, x: 30 }" :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }">

<!-- iPhone Frame Mockup style -->
<div class="relative bg-black border-4 border-gray-800 rounded-[2.5rem] p-3 shadow-2xl skew-y-1 transform hover:skew-y-0 transition duration-700 max-w-[260px] mx-auto">
<div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-lg z-20"></div>

<div class="bg-gray-900 rounded-[2rem] h-[400px] overflow-hidden flex flex-col relative w-full">
<!-- Chat Header -->
<div class="bg-gray-800/80 backdrop-blur p-3 flex items-center gap-2 border-b border-white/5">
<div class="w-2 h-2 rounded-full bg-green-500"></div>
<div class="text-[10px] font-bold text-gray-400">AI ASSISTANT • ONLINE</div>
</div>

<!-- Chat Area -->
<div class="flex-1 p-3 space-y-3 overflow-hidden flex flex-col justify-end">

<!-- Bot Msg -->
<div class="flex items-end gap-2">
<div class="w-8 h-8 rounded-full bg-brand-primary p-1"><div class="i-carbon-bot text-white w-full h-full"></div></div>
<div class="bg-brand-primary/20 text-white p-3 rounded-2xl rounded-bl-none text-sm leading-relaxed max-w-[85%]">
Hello! 👋 How can I help automate your business?
</div>
</div>

<!-- User Msg -->
<div class="flex items-end gap-2 flex-row-reverse">
<div class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-[10px]">YOU</div>
<div class="bg-white/10 text-gray-200 p-3 rounded-2xl rounded-br-none text-sm leading-relaxed max-w-[85%]">
Do you have a consultation slot next week?
</div>
</div>

<!-- Bot Msg -->
<div class="flex items-end gap-2">
<div class="w-8 h-8 rounded-full bg-brand-primary p-1"><div class="i-carbon-bot text-white w-full h-full"></div></div>
<div class="bg-brand-primary/20 text-white p-3 rounded-2xl rounded-bl-none text-sm leading-relaxed max-w-[90%]">
Yes, next <strong>Tuesday at 2:00 PM</strong> is available.
<div class="mt-2 text-xs opacity-90 border-t border-white/10 pt-2 mb-2">
Confirm your slot by depositing the refundable retainer:
</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 rounded-lg bg-green-500 text-white text-xs font-bold hover:bg-green-400 flex items-center gap-1 shadow-lg shadow-green-500/20">
<div class="i-carbon-checkmark-filled"></div> Pay $150
</button>
</div>
</div>
</div>

<!-- User Msg (Payment confirmed) -->
<div class="flex items-end gap-2 flex-row-reverse mt-2">
<div class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-[10px]">YOU</div>
<div class="bg-white/10 text-gray-200 p-2 rounded-2xl rounded-br-none text-xs leading-relaxed">
<div class="flex items-center gap-2">
<div class="i-carbon-receipt text-green-400"></div> Paid.
</div>
</div>
</div>

<!-- Bot Msg (Success) -->
<div class="flex items-end gap-2 mt-2">
<div class="w-8 h-8 rounded-full bg-brand-primary p-1"><div class="i-carbon-bot text-white w-full h-full"></div></div>
<div class="bg-brand-primary/20 text-white p-3 rounded-2xl rounded-bl-none text-sm leading-relaxed max-w-[90%]">
<span class="text-green-300 font-bold">Payment received!</span> Meeting confirmed. I've sent the invoice to your email.
</div>
</div>

</div>
</div>
</div>

</div>
</div>

---
layout: default
background: /bg_avatar_tracking_1767637030114.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 grid grid-cols-2 gap-12 items-center h-full">
  <div v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
  <h2 class="text-5xl font-display font-bold mb-8">
    Scale the Founder. <br/> <span class="text-brand-primary">Clone Yourself.</span>
  </h2>
  <p class="text-xl text-gray-200 mb-8 leading-relaxed">
    You can't be in 100 meetings at once. <span class="text-white font-bold">But your AI Twin can.</span> Pitch to clients globally, in their native language, with your voice.
  </p>
  
  <div class="space-y-6">
     <div class="glass-card p-5 border-l-4 border-brand-secondary hover:translate-x-2 transition duration-300">
       <h4 class="font-bold text-lg mb-1 flex items-center gap-2">
         <div class="i-carbon-user-avatar-filled-alt text-brand-secondary"></div> AI Avatars
       </h4>
       <p class="text-sm opacity-80">Video content generated from text. Your digital CEO speaks 30 languages and never has a bad day.</p>
     </div>
     <div class="glass-card p-5 border-l-4 border-brand-primary hover:translate-x-2 transition duration-300">
       <h4 class="font-bold text-lg mb-1 flex items-center gap-2">
         <div class="i-carbon-chart-radar text-brand-primary"></div> Market Monitoring
       </h4>
       <p class="text-sm opacity-80">Agents track competitor prices and strategies 24/7. Always be one step ahead.</p>
     </div>
  </div>
  </div>

  <div class="relative h-full flex items-center justify-center" v-motion
  :initial="{ opacity: 0, scale: 0.9 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 600 } }">
  <!-- Abstract Visualization of Data/Avatar -->
  <div class="grid grid-cols-2 gap-4 w-full">
     <div class="glass-card p-4 flex flex-col items-center">
       <div class="i-carbon-user-avatar-filled-alt text-6xl text-brand-secondary mb-2"></div>
       <div class="text-xs font-bold uppercase">Digital Twin</div>
       <div class="text-[10px] text-green-400">Online • Active</div>
     </div>
     <div class="glass-card p-4 flex flex-col items-center">
       <div class="i-carbon-chart-radar text-6xl text-brand-primary mb-2"></div>
       <div class="text-xs font-bold uppercase">Competitor Scan</div>
       <div class="text-[10px] text-brand-primary">Scanning...</div>
     </div>
  </div>
  </div>
</div>

---
layout: default
background: /bg_content_auto_1767636008344.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 flex flex-col items-center justify-center h-full text-center">
  <div class="mb-10" v-motion
  :initial="{ opacity: 0, y: 40 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }">
  <h2 class="text-5xl font-display font-bold mb-6">
    Content That <span class="text-gradient">Sells.</span>
  </h2>
  <p class="text-xl text-gray-200 max-w-2xl mx-auto">
    Publish <span class="text-brand-secondary font-bold">50x faster</span>. Become an industry authority without manual writing.
  </p>
  </div>

  <div class="grid grid-cols-3 gap-8 w-full max-w-5xl">
  <div class="glass-card p-8 border-brand-secondary/30" v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
    <div class="i-carbon-ibm-watson-discovery text-5xl text-brand-secondary mb-6 mx-auto"></div>
    <h3 class="text-xl font-bold mb-2">Research</h3>
    <p class="text-sm opacity-70">AI analyzes trends, keywords, and competition.</p>
  </div>
  <div class="glass-card p-8 border-brand-secondary/30" v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
    <div class="i-carbon-edit text-5xl text-brand-secondary mb-6 mx-auto"></div>
    <h3 class="text-xl font-bold mb-2">Blog Writing</h3>
    <p class="text-sm opacity-70">Automated creation of expert articles relevant to your domain.</p>
  </div>
  <div class="glass-card p-8 border-brand-secondary/30" v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
    <div class="i-carbon-rocket text-5xl text-brand-secondary mb-6 mx-auto"></div>
    <h3 class="text-xl font-bold mb-2">Publishing</h3>
    <p class="text-sm opacity-70">Automatically publishes to your blog and social networks.</p>
  </div>
  </div>
</div>

---
layout: default
background: /bg_voice_sound_1767636026951.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 grid grid-cols-2 gap-12 items-center h-full">
  <div v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
  <h2 class="text-5xl font-display font-bold mb-8">
    Never Miss a Call. <br/> <span class="text-brand-primary">Nor a Deal.</span>
  </h2>
  <div class="space-y-6 text-lg">
    <div class="flex items-center gap-4">
      <div class="i-carbon-calendar text-3xl text-brand-secondary"></div>
      <span>Automated Reservations</span>
    </div>
    <div class="flex items-center gap-4">
      <div class="i-carbon-phone-outgoing text-3xl text-brand-secondary"></div>
      <span>Lead Qualification & Outreach</span>
    </div>
    <div class="flex items-center gap-4">
      <div class="i-carbon-user-speaker text-3xl text-brand-secondary"></div>
      <span>Indistinguishable Human-Like Voice</span>
    </div>
  </div>
  </div>
  
  <div class="relative w-full h-full flex items-center justify-center p-8" v-motion
  :initial="{ opacity: 0, scale: 0.8 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 300 } }">
  
  <!-- Audio Wave Visualization -->
  <div class="flex items-center gap-2 h-64">
    <div class="w-4 bg-brand-primary/80 rounded-full animate-[sound_1s_ease-in-out_infinite]"></div>
    <div class="w-4 bg-brand-primary/80 rounded-full animate-[sound_1.2s_ease-in-out_infinite]"></div>
    <div class="w-4 bg-brand-primary/80 rounded-full animate-[sound_0.8s_ease-in-out_infinite]"></div>
    <div class="w-4 bg-brand-primary/80 rounded-full animate-[sound_1.5s_ease-in-out_infinite]"></div>
    <div class="w-4 bg-brand-secondary/80 rounded-full animate-[sound_0.9s_ease-in-out_infinite]"></div>
    <div class="w-4 bg-brand-secondary/80 rounded-full animate-[sound_1.1s_ease-in-out_infinite]"></div>
    <div class="w-4 bg-brand-secondary/80 rounded-full animate-[sound_1.3s_ease-in-out_infinite]"></div>
    <div class="w-4 bg-brand-primary/80 rounded-full animate-[sound_1s_ease-in-out_infinite]"></div>
  </div>

  <div class="absolute inset-0 flex items-center justify-center z-20">
    <div class="glass-card px-8 py-4 rounded-full flex items-center gap-4 border border-brand-primary/50 shadow-[0_0_50px_rgba(99,102,241,0.3)]">
      <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      <div class="text-2xl font-bold font-mono">REC 00:04:23</div>
    </div>
  </div>

  <style>
    @keyframes sound {
      0%, 100% { height: 40px; }
      50% { height: 160px; }
    }
  </style>
  </div>
</div>

---
layout: default
background: /bg_speed_motion_1767635946889.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 grid grid-cols-2 gap-12 items-center h-full">
  <div v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
  <h2 class="text-5xl font-display font-bold mb-8">
    Return on <span class="text-brand-secondary">Intelligence (ROI).</span>
  </h2>
  <p class="text-xl text-gray-200 mb-6 leading-relaxed">
    Efficiency isn't just a buzzword. It's measurable profit.
  </p>
  <div class="glass-card p-6 border-l-4 border-brand-primary relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl rotate-12 i-carbon-increase-level text-brand-primary"></div>
    <h4 class="font-bold text-lg mb-2">Price vs Value</h4>
    <p class="text-sm opacity-90 leading-relaxed font-light">
      While traditional systems cost thousands in maintenance, 
      our autonomous agents <span class="text-brand-secondary font-bold">improve</span> over time and reduce operational costs by up to 60% in Year 1.
    </p>
  </div>
  </div>

  <div class="grid grid-cols-2 gap-4" v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }">
  
  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-secondary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">Costs Saved</div>
    <div class="text-5xl font-bold text-white mb-2">-70%</div>
    <p class="text-xs text-center opacity-70">Less manual work on client support.</p>
  </div>

  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-primary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">New Deals</div>
    <div class="text-5xl font-bold text-white mb-2">100%</div>
    <p class="text-xs text-center opacity-70">Every call answered. Every lead qualified.</p>
  </div>

  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-secondary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">Content Speed</div>
    <div class="text-5xl font-bold text-white mb-2">50x</div>
    <p class="text-xs text-center opacity-70">More articles, more keywords, higher SEO.</p>
  </div>

  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-primary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">Conversions</div>
    <div class="text-5xl font-bold text-white mb-2">+40%</div>
    <p class="text-xs text-center opacity-70">Thanks to instant page loading.</p>
  </div>

  </div>
</div>

---
layout: default
background: /bg_main_neural_1767635928849.png
class: text-center
---

<div class="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

<div class="relative z-10 flex flex-col items-center justify-center h-full">
  <div v-motion
  :initial="{ opacity: 0, y: 30 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
  <h2 class="text-6xl font-display font-bold mb-8">
    Future-Proof Your Business <span class="text-gradient">Today.</span>
  </h2>
  </div>

  <div class="glass-card px-16 py-12 mb-12 relative overflow-hidden group" v-motion
  :initial="{ opacity: 0, scale: 0.9 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }">
  <div class="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
  <div class="relative z-10">
    <div class="text-4xl font-bold mb-4">Book a Strategy Call</div>
    <p class="text-brand-muted mb-8 text-xl">Let's discuss how AI can automate your success.</p>
    
    <div class="inline-flex flex-col items-center">
      <div class="mb-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30 animate-pulse">
        Only 3 spots left for March
      </div>
      <a href="mailto:stancikmarian8@gmail.com" class="inline-block px-12 py-5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark font-bold text-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(20,241,149,0.5)] transition duration-300">
        Claim Your Spot
      </a>
    </div>
    <div class="mt-4 text-sm opacity-60">stancikmarian8@gmail.com</div>
  </div>
  </div>
  
  <div class="flex gap-8 text-brand-muted opacity-60">
    <span>marianstancik.dev</span>
    <span>•</span>
    <span>AI Automation</span>
    <span>•</span>
    <span>Web Development</span>
  </div>
</div>
