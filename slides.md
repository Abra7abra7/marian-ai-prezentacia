---
theme: default
background: /bg_main_neural_1767635928849.png
class: text-center
highlighter: shiki
lineNumbers: false
info: |
    ## Marián Stančík - AI Riešenia
    Portfólio Prezentácia
drawings:
    persist: false
css: unocss
transition: slide-left
---

<div class="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

<!-- Language Switcher -->
<div class="fixed top-4 right-4 z-50 flex gap-2">
  <span class="text-white font-bold border-b-2 border-brand-primary">SK</span>
  <span class="text-white/40">|</span>
  <a href="#" onclick="alert('Pre anglickú verziu spustite v termináli: npm run dev:en')" class="text-white/60 hover:text-white transition">EN</a>
</div>

<div class="relative z-10 flex flex-col items-center justify-center h-full">
  <div v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
  <h1 class="text-7xl font-display font-bold mb-6 tracking-tight">
    Je Váš Biznis Pripravený na <br/><span class="text-gradient drop-shadow-2xl">AI Revolúciu?</span>
  </h1>
  </div>

  <div v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }">
  <p class="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
    <span class="text-brand-primary font-bold">Automatizujte</span> rutinu. 
    <span class="text-brand-secondary font-bold">Dominujte</span> trhu. 
    <span class="text-white font-bold">Zarábajte</span> zatiaľ čo spíte.
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
      <div class="text-white font-bold text-lg leading-none mb-1">Marián Stančík</div>
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
    Kritický Problém
  </div>
  <h2 class="text-5xl font-display font-bold leading-tight mb-8">
    Pomalý Web = <br/><span class="text-red-500">Stratené Peniaze.</span>
  </h2>
  <p class="text-xl text-gray-300 leading-relaxed mb-8">
    <span class="text-white font-bold">53% používateľov</span> okamžite odchádza, ak sa web načíta dlhšie ako 3 sekundy. Pomalosť zabíja konverzie.
  </p>
  
  <div class="flex items-center gap-6">
    <div class="flex flex-col">
      <span class="text-brand-secondary text-4xl font-bold">95+</span>
      <span class="text-xs text-brand-muted uppercase">Google PageSpeed</span>
    </div>
    <div class="w-[1px] h-12 bg-white/10"></div>
    <div class="flex flex-col">
      <span class="text-brand-primary text-4xl font-bold">&lt;0.5s</span>
      <span class="text-xs text-brand-muted uppercase">Načítanie</span>
    </div>
  </div>
  </div>

  <div class="glass-card p-8 border-t-4 border-brand-secondary transform hover:scale-105 transition duration-500" v-motion
  :initial="{ opacity: 0, scale: 0.9 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }">
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-center gap-3">
      <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
      <span class="text-lg font-bold">Audit Výkonu</span>
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
       <div class="font-bold text-white">Bleskové</div>
       <div class="text-xs text-brand-muted">Okamžité vykreslenie</div>
     </div>
     <div class="bg-white/5 p-4 rounded-lg border border-white/5">
       <div class="text-brand-secondary text-xl mb-1 i-carbon-chart-line-data"></div>
       <div class="font-bold text-white">SEO Boost</div>
       <div class="text-xs text-brand-muted">Google miluje rýchlosť</div>
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
    Dominujte v Ére <span class="text-gradient">AI Vyhľadávania (GEO).</span>
  </h2>
  <div class="text-2xl text-brand-muted">Generative Engine Optimization (GEO)</div>
  <p class="text-gray-400 mt-4 max-w-2xl">
    Klasické SEO je mŕtve. Užívatelia sa nepýtajú Googlu na linky. Pýtajú sa AI na <span class="text-white font-bold">odpovede</span>.
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
      <h3 class="text-xl font-bold mb-2">Pochopenie Kontextu</h3>
      <p class="opacity-80 text-sm leading-relaxed">
        Optimalizujeme dáta tak, aby LLM modely (GPT-4, Claude, Gemini) rozumeli nielen textu, ale aj <span class="text-brand-secondary">významu</span> Vášho biznisu.
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
      <h3 class="text-xl font-bold mb-2">Budovanie Autority</h3>
      <p class="opacity-80 text-sm leading-relaxed">
        Vytvárame prepojenia a citácie, ktoré AI vyhodnotí ako <span class="text-white font-bold">najdôveryhodnejší zdroj</span> v segmente.
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
      <h3 class="text-xl font-bold mb-2">Víťaz Odporúčania</h3>
      <p class="opacity-80 text-sm leading-relaxed">
        Keď sa klient spýta: <em>"Kto je najlepší?"</em>, AI odpovie jedným menom. <span class="text-brand-primary font-bold">Vaším.</span>
      </p>
    </div>
  </div>
  </div>
</div>

---
layout: default
transition: fade
background: /bg_chat_ai_1767635991402.png
---

<div class="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

<div class="relative z-10 grid grid-cols-[1.1fr_0.9fr] gap-8 items-center h-full">
<div v-motion
:initial="{ opacity: 0, x: -30 }"
:enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
<h2 class="text-4xl font-display font-bold mb-4 leading-tight">
Premeňte Návštevníkov <br/> na <span class="text-brand-primary">Platiacich Klientov.</span>
</h2>
<p class="text-lg text-gray-200 mb-6 leading-relaxed">
Nestraťte už ani jeden dopyt. Kým konkurencia spí, Váš AI asistent uzatvára obchody a bookuje stretnutia. Okamžite.
</p>

<div class="space-y-3">
<div class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
<div class="w-10 h-10 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-secondary text-xl">
<div class="i-carbon-data-base"></div>
</div>
<div>
<h4 class="font-bold text-white text-sm">Pozná Celý Váš Biznis</h4>
<p class="text-xs text-gray-400">Odpovedá presne podľa Vašich materiálov. Žiadne halucinácie, len fakty.</p>
</div>
</div>

<div class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
<div class="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary text-xl">
<div class="i-carbon-flash"></div>
</div>
<div>
<h4 class="font-bold text-white text-sm">Okamžitá Reakcia</h4>
<p class="text-xs text-gray-400">Priemerná odozva &lt; 2 sekundy. Žiadne čakanie na operátora.</p>
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
<div class="text-[10px] font-bold text-gray-400">AI ASISTENT • ONLINE</div>
</div>

<!-- Chat Area -->
<div class="flex-1 p-3 space-y-3 overflow-hidden flex flex-col justify-end">

<!-- Bot Msg -->
<div class="flex items-end gap-2">
<div class="w-8 h-8 rounded-full bg-brand-primary p-1"><div class="i-carbon-bot text-white w-full h-full"></div></div>
<div class="bg-brand-primary/20 text-white p-3 rounded-2xl rounded-bl-none text-sm leading-relaxed max-w-[85%]">
Dobrý deň! 👋 Ako Vám môžem pomôcť s automatizáciou Vášho biznisu?
</div>
</div>

<!-- User Msg -->
<div class="flex items-end gap-2 flex-row-reverse">
<div class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-[10px]">VY</div>
<div class="bg-white/10 text-gray-200 p-3 rounded-2xl rounded-br-none text-sm leading-relaxed max-w-[85%]">
Máte voľný termín pre konzultáciu budúci týždeň?
</div>
</div>

<!-- Bot Msg -->
<div class="flex items-end gap-2">
<div class="w-8 h-8 rounded-full bg-brand-primary p-1"><div class="i-carbon-bot text-white w-full h-full"></div></div>
<div class="bg-brand-primary/20 text-white p-3 rounded-2xl rounded-bl-none text-sm leading-relaxed max-w-[90%]">
Áno, budúci <strong>utorok o 14:00</strong> mám voľno. Mám Vám tento termín rezervovať?
<div class="mt-2 flex gap-2">
<button class="px-3 py-1 rounded-full bg-brand-primary text-xs font-bold hover:bg-brand-primary/80">Rezervovať</button>
<button class="px-3 py-1 rounded-full bg-white/10 text-xs hover:bg-white/20">Iný termín</button>
</div>
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
    Buďte Všade. <br/> <span class="text-brand-primary">Bez Toho, Aby Ste Tam Boli.</span>
  </h2>
  <p class="text-xl text-gray-200 mb-8 leading-relaxed">
    Škálujte svoju expertízu. Váš digitálny avatar odprezentuje ponuku 1000 klientom naraz, v 30 jazykoch, s Vaším hlasom a tvárou.
  </p>
  
  <div class="space-y-6">
     <div class="glass-card p-5 border-l-4 border-brand-secondary hover:translate-x-2 transition duration-300">
       <h4 class="font-bold text-lg mb-1 flex items-center gap-2">
         <div class="i-carbon-user-avatar-filled-alt text-brand-secondary"></div> AI Avatary
       </h4>
       <p class="text-sm opacity-80">Video obsah generovaný z textu. Váš digitálny CEO hovorí 30 jazykmi a nikdy nemá zlý deň.</p>
     </div>
     <div class="glass-card p-5 border-l-4 border-brand-primary hover:translate-x-2 transition duration-300">
       <h4 class="font-bold text-lg mb-1 flex items-center gap-2">
         <div class="i-carbon-chart-radar text-brand-primary"></div> Monitoring Trhu
       </h4>
       <p class="text-sm opacity-80">Agenti sledujú zmeny cien a stratégií konkurencie 24/7. Buďte vždy o krok vpred.</p>
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
    Obsah, ktorý <span class="text-gradient">Predáva.</span>
  </h2>
  <p class="text-xl text-gray-200 max-w-2xl mx-auto">
    Publikujte <span class="text-brand-secondary font-bold">50x rýchlejšie</span>. Staňte sa autoritou v odvetví bez manuálneho písania.
  </p>
  </div>

  <div class="grid grid-cols-3 gap-8 w-full max-w-5xl">
  <div class="glass-card p-8 border-brand-secondary/30" v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
    <div class="i-carbon-ibm-watson-discovery text-5xl text-brand-secondary mb-6 mx-auto"></div>
    <h3 class="text-xl font-bold mb-2">Prieskum</h3>
    <p class="text-sm opacity-70">AI analyzuje trendy, kľúčové slová a konkurenciu.</p>
  </div>
  <div class="glass-card p-8 border-brand-secondary/30" v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }">
    <div class="i-carbon-edit text-5xl text-brand-secondary mb-6 mx-auto"></div>
    <h3 class="text-xl font-bold mb-2">Písanie Blogov</h3>
    <p class="text-sm opacity-70">Automatizovaná tvorba odborných článkov relevantných pre Vašu doménu.</p>
  </div>
  <div class="glass-card p-8 border-brand-secondary/30" v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
    <div class="i-carbon-rocket text-5xl text-brand-secondary mb-6 mx-auto"></div>
    <h3 class="text-xl font-bold mb-2">Publikácia</h3>
    <p class="text-sm opacity-70">Automaticky publikuje na Váš blog a sociálne siete.</p>
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
    Nikdy Nepremeškajte Hovor. <br/> <span class="text-brand-primary">Ani Obchod.</span>
  </h2>
  <div class="space-y-6 text-lg">
    <div class="flex items-center gap-4">
      <div class="i-carbon-calendar text-3xl text-brand-secondary"></div>
      <span>Automatizované Rezervácie</span>
    </div>
    <div class="flex items-center gap-4">
      <div class="i-carbon-phone-outgoing text-3xl text-brand-secondary"></div>
      <span>Kvalifikácia Leadov a Volania</span>
    </div>
    <div class="flex items-center gap-4">
      <div class="i-carbon-user-speaker text-3xl text-brand-secondary"></div>
      <span>Nerozoznateľný Ľudský Hlas (Human-Like)</span>
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
    Návratnosť <span class="text-brand-secondary">Inteligencie (ROI).</span>
  </h2>
  <p class="text-xl text-gray-200 mb-6 leading-relaxed">
    Efektivita nie je len pojem. Je to merateľný zisk.
  </p>
  <div class="glass-card p-6 border-l-4 border-brand-primary relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl rotate-12 i-carbon-increase-level text-brand-primary"></div>
    <h4 class="font-bold text-lg mb-2">Cena vs Hodnota</h4>
    <p class="text-sm opacity-90 leading-relaxed font-light">
      Kým tradičné systémy stoja tisíce na údržbe, 
      naše autonómne agenty sa časom <span class="text-brand-secondary font-bold">zlepšujú</span> a znižujú prevádzkové náklady až o 60% v prvom roku.
    </p>
  </div>
  </div>

  <div class="grid grid-cols-2 gap-4" v-motion
  :initial="{ opacity: 0, y: 50 }"
  :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }">
  
  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-secondary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">Ušetrené Náklady</div>
    <div class="text-5xl font-bold text-white mb-2">-70%</div>
    <p class="text-xs text-center opacity-70">Menej manuálnej práce na podpore klienta.</p>
  </div>

  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-primary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">Nové Obchody</div>
    <div class="text-5xl font-bold text-white mb-2">100%</div>
    <p class="text-xs text-center opacity-70">Zachytenie každého hovoru a dopytu.</p>
  </div>

  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-secondary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">Rýchlosť Obsahu</div>
    <div class="text-5xl font-bold text-white mb-2">50x</div>
    <p class="text-xs text-center opacity-70">Viac článkov, viac kľúčových slov, vyššie SEO.</p>
  </div>

  <div class="glass-card p-6 flex flex-col items-center justify-center border-t-2 border-brand-primary">
    <div class="text-sm uppercase tracking-widest opacity-60 mb-2">Konverzie</div>
    <div class="text-5xl font-bold text-white mb-2">+40%</div>
    <p class="text-xs text-center opacity-70">Vďaka okamžitému načítaniu stránky.</p>
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
    Pripravte Svoj Biznis na Budúcnosť <span class="text-gradient">Dnes.</span>
  </h2>
  </div>

  <div class="glass-card px-16 py-12 mb-12 relative overflow-hidden group" v-motion
  :initial="{ opacity: 0, scale: 0.9 }"
  :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }">
  <div class="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
  <div class="relative z-10">
    <div class="text-4xl font-bold mb-4">Rezervujte si Strategický Hovor</div>
    <p class="text-brand-muted mb-8 text-xl">Preberieme, ako AI môže zautomatizovať Váš úspech.</p>
    <a href="mailto:stancikmarian8@gmail.com" class="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark font-bold text-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(20,241,149,0.4)] transition duration-300">
      Rezervovať Konzultáciu
    </a>
    <div class="mt-4 text-sm opacity-60">stancikmarian8@gmail.com</div>
  </div>
  </div>
  
  <div class="flex gap-8 text-brand-muted opacity-60">
    <span>marianstancik.dev</span>
    <span>•</span>
    <span>AI Automatizácia</span>
    <span>•</span>
    <span>Web Vývoj</span>
  </div>
</div>
