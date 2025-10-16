# Zelené fasády - Web aplikácia

Moderná webová stránka pre spoločnosť Zelené fasády vytvorená pomocou Next.js 14, TypeScript a Tailwind CSS.

## 🚀 Technológie

- **Next.js 14** (App Router)
- **TypeScript** - typová bezpečnosť
- **Tailwind CSS** - utility-first CSS framework
- **shadcn/ui** - React komponenty
- **React Hook Form** - správa formulárov
- **Zod** - validácia dát
- **Lucide React** - ikony

## 📦 Inštalácia

### Predpoklady

- Node.js 18.17 alebo vyššia verzia
- pnpm, npm alebo yarn

### Kroky

1. Nainštalujte závislosti:
```bash
pnpm install
# alebo
npm install
# alebo
yarn install
```

2. Spustite vývojový server:
```bash
pnpm dev
# alebo
npm run dev
# alebo
yarn dev
```

3. Otvorte [http://localhost:3000](http://localhost:3000) v prehliadači

## 🏗️ Build pre produkciu

```bash
pnpm build
# alebo
npm run build
# alebo
yarn build
```

Po úspešnom builde spustite produkčný server:

```bash
pnpm start
# alebo
npm start
# alebo
yarn start
```

## 📁 Štruktúra projektu

```
zelene-fasady/
├── app/
│   ├── layout.tsx          # Root layout s metadátami
│   ├── page.tsx            # Hlavná stránka
│   ├── globals.css         # Globálne CSS štýly
│   ├── systemy/
│   │   └── page.tsx        # Stránka systémov
│   ├── tim/
│   │   └── page.tsx        # Stránka tímu
│   ├── kontakt/
│   │   └── page.tsx        # Kontaktná stránka
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # API endpoint pre kontakt
│   ├── sitemap.ts          # Generátor sitemapy
│   └── robots.ts           # Generátor robots.txt
├── components/
│   ├── ui/                 # shadcn/ui komponenty
│   ├── layout/             # Layout komponenty
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   └── sections/           # Sekcie stránok
│       ├── hero.tsx
│       ├── benefits-grid.tsx
│       ├── systems-cards.tsx
│       ├── team-preview.tsx
│       ├── cta-section.tsx
│       └── faq-accordion.tsx
├── lib/
│   ├── utils.ts            # Utility funkcie
│   └── content.ts          # Obsah stránky
├── types/
│   └── index.ts            # TypeScript typy
├── public/                 # Statické súbory
└── package.json
```

## 🎨 Funkcie

- ✅ **Responzívny dizajn** - optimalizovaný pre všetky zariadenia
- ✅ **Dark mode** - prepínanie svetlej/tmavej témy
- ✅ **SEO optimalizácie** - meta tagy, sitemap, robots.txt
- ✅ **Kontaktný formulár** - s validáciou a API endpointom
- ✅ **WCAG AA** - prístupnosť pre všetkých používateľov
- ✅ **Performance** - optimalizované obrázky a lazy loading
- ✅ **TypeScript** - typová bezpečnosť

## 📊 SEO Checklist

- [x] Meta tagy (title, description)
- [x] Open Graph tagy
- [x] Twitter Card tagy
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Kanonické URL
- [x] Strukturované dáta (TODO)
- [x] Alt texty pre obrázky

## 🚀 Deployment (Vercel)

1. Nahrajte projekt na GitHub
2. Prihláste sa na [Vercel](https://vercel.com)
3. Importujte projekt z GitHubu
4. Vercel automaticky detekuje Next.js a nakonfiguruje build
5. Kliknite na "Deploy"

### Environmentálne premenné

Pre produkciu pridajte tieto premenné vo Vercel dashboarde:

```env
# Email služba (voliteľné)
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=noreply@zelenefasady.sk
EMAIL_TO=info@zelenefasady.sk
```

## 📝 TODO

- [ ] Integrácia email služby (SendGrid/Resend)
- [ ] Pridať fotky zelených fasád
- [ ] Google Maps integrácia
- [ ] Structured data (JSON-LD)
- [ ] Google Analytics
- [ ] Cookie banner
- [ ] Rozšíriť tím o ďalších členov
- [ ] Blog sekcia
- [ ] Multi-jazyčná podpora

## 📞 Kontakt

Pre otázky ohľadom projektu kontaktujte: info@zelenefasady.sk

## 📄 Licencia

© 2024 Zelené fasády. Všetky práva vyhradené.