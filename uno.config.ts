import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Inter:400,600,800',
                display: 'Space Grotesk:400,700',
            },
        }),
    ],
    theme: {
        colors: {
            brand: {
                dark: '#0B0E14',   // Midnight Void
                primary: '#6366F1', // Electric Indigo
                secondary: '#14F195', // Cyber Teal
                text: '#FFFFFF',
                muted: '#94A3B8'   // Slate Mist
            },
        },
        fontFamily: {
            sans: '"Inter", "DM Sans", sans-serif',
            display: '"Space Grotesk", sans-serif',
        },
    },
    shortcuts: {
        'bg-main': 'bg-brand-dark text-brand-text',
        'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary',
        'btn-primary': 'px-6 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark font-bold hover:opacity-90 transition duration-200',
        'glass-card': 'bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-2xl',
        'shiny-text': 'text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-white animate-pulse',
    }
})
