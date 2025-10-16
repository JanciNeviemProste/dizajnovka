# 🎨 Zelené fasády - Dizajnová verzia

> Elegantná, minimalistická prezentačná stránka pre zelené fasády

Tento repozitár obsahuje dizajnovú verziu webstránky Zelené fasády s dôrazom na premium prezentáciu, storytelling a sofistikovaný dizajn.

## 🌟 Hlavné vlastnosti

- **Cinematic hero** s full-height backgroundom
- **Emerald/teal** farebná paleta namiesto červenej
- **Smooth animácie** (fade-in, slide-up) bez agresívnych efektov
- **Portfolio gallery** s case studies
- **Process timeline** s 4 krokmi
- **Premium testimonials** s avatarmi
- **Elegantné CTA** bez urgentných prvkov
- **Storytelling obsah** bez FOMO a fear-based marketingu

## 🚀 Rýchly štart

### Inštalácia

```bash
npm install
# alebo
pnpm install
```

### Development

```bash
npm run dev
# alebo
pnpm dev
```

Otvorte [http://localhost:3000/dizajn](http://localhost:3000/dizajn) v prehliadači.

## 📁 Štruktúra projektu

### Dizajnové komponenty

```
components/sections/
├── hero-design.tsx          # Cinematic hero sekcia
├── benefits-design.tsx      # Minimalistické benefits
├── process-section.tsx      # 4-step proces
├── systems-design.tsx       # Clean systémy
├── portfolio-section.tsx    # Portfolio gallery
├── testimonials-design.tsx  # Premium testimonials
└── cta-design.tsx          # Elegantná CTA
```

### Obsah

```
lib/
└── content-design.ts        # Profesionálny obsah bez neuromarketingu
```

### Stránky

```
app/
├── page.tsx                 # Marketingová verzia (originál)
└── dizajn/
    └── page.tsx            # Dizajnová verzia ⭐
```

## 🎨 Dizajnový systém

### Farebná paleta

```css
Emerald:
- emerald-50  až emerald-950
- Hlavná zelená paleta

Teal:
- teal-50 až teal-950
- Doplnková paleta
```

### Animácie

```css
fade-in        /* Jemné zjavenie */
slide-up       /* Posun zdola s fade */
slide-in-left  /* Posun zľava */
slide-in-right /* Posun sprava */
scale-in       /* Zoom efekt */
```

### Typography

- Headlines: `text-4xl` až `text-6xl`
- Body: `text-lg` s `leading-relaxed`
- Font: Inter (Next.js default)

## 📦 Vercel Deployment

### 1. Import projektu do Vercel

1. Choďte na [vercel.com](https://vercel.com)
2. Kliknite na **"Add New..."** → **"Project"**
3. Import z GitHub: **`dizajnovka`**
4. Kliknite **"Deploy"**

### 2. Konfigurácia

Vercel automaticky detekuje Next.js:

- Framework: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Nechajte všetko na default!**

### 3. Stránky

Po deploye budú dostupné:

- **Dizajnová verzia**: `https://dizajnovka.vercel.app/dizajn` ⭐
- Marketingová verzia: `https://dizajnovka.vercel.app/`

> **Tip:** Pre najlepší dojem odporúčame používať `/dizajn` URL

## 🎯 Porovnanie verzií

| Aspekt | Marketingová | Dizajnová |
|--------|-------------|-----------|
| **Farby** | Červená, oranžová | Emerald, teal |
| **Prístup** | Agresívny, FOMO | Storytelling, hodnota |
| **Animácie** | Pulse, výrazné | Smooth, jemné |
| **Obsah** | "Strata 100€/deň" | "Architektúra, ktorá dýcha" |
| **Emoji** | Veľa 💰🚀⚡ | Žiadne |

## 📝 Obsah

### Hlavné sekcie

1. **Hero** - "Architektúra, ktorá dýcha"
2. **Benefits** - 6 hlavných výhod
3. **Process** - 4 kroky spolupráce
4. **Systems** - 4 typy zelených fasád
5. **Portfolio** - 3 case studies
6. **Testimonials** - 3 recenzie klientov
7. **CTA** - Elegantné call-to-action

### Tón a štýl

- ✅ Profesionálny, dôveryhodný
- ✅ Benefit-oriented
- ✅ Storytelling prístup
- ✅ Premium positioning
- ❌ Žiadne FOMO
- ❌ Žiadne urgentné prvky
- ❌ Žiadne emoji
- ❌ Žiadne fear-based messaging

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: ✅
- **Dark Mode**: ✅

## 📚 Ďalšia dokumentácia

Pre detailnú dokumentáciu pozrite:
- `DESIGN_VERSION.md` - Kompletné porovnanie verzií
- `VERCEL_DEPLOYMENT.md` - Návod na deployment

## 🎨 Možné vylepšenia

1. **Video background** - Nahradiť placeholder skutočným videom
2. **Real images** - Pridať skutočné fotky projektov
3. **Before/after sliders** - Interaktívne porovnania
4. **3D vizualizácie** - 3D modely zelených fasád
5. **Blog sekcia** - Články o zelených fasádach
6. **Parallax effects** - Jemné parallax scrolling

## 📞 Kontakt

Pre viac informácií o projekte:
- GitHub: [JanciNeviemProste/dizajnovka](https://github.com/JanciNeviemProste/dizajnovka)
- Originál repo: [JanciNeviemProste/zelenefasady](https://github.com/JanciNeviemProste/zelenefasady)

---

**Vytvorené s** [Claude Code](https://claude.com/claude-code) 🤖

**Verzia:** 1.0
**Dátum:** 2025-10-16
**Status:** ✅ Production Ready
