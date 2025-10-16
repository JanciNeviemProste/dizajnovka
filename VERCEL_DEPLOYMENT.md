# 🚀 Vercel Deployment - Zelené fasády

## ✅ Projekt je pripravený na nasadenie!

GitHub Repository: **https://github.com/JanciNeviemProste/zelenefasady**

## 📋 Kroky pre nasadenie na Vercel

### 1. Prihláste sa na Vercel
- Choďte na [https://vercel.com](https://vercel.com)
- Prihláste sa pomocou GitHub účtu

### 2. Import projektu
1. Kliknite na **"Add New..."** → **"Project"**
2. V sekcii **"Import Git Repository"** vyhľadajte **"zelenefasady"**
3. Kliknite na **"Import"**

### 3. Konfigurácia projektu
Vercel automaticky detekuje Next.js projekt a nakonfiguruje:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` alebo `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `npm install` alebo `pnpm install`

**Všetko nechajte na predvolených hodnotách!**

### 4. Environment Variables (voliteľné)
Ak chcete funkčný email formulár, pridajte tieto premenné:
```env
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=noreply@zelenefasady.sk
EMAIL_TO=info@zelenefasady.sk
```

### 5. Deploy
- Kliknite na **"Deploy"**
- Počkajte 2-3 minúty na build
- Získate URL typu: `zelenefasady.vercel.app`

## 🎉 Hotovo!

### Čo funguje:
- ✅ Všetky stránky (Domov, Systémy, Tím, Kontakt)
- ✅ Responzívny dizajn
- ✅ Dark/Light mode
- ✅ Kontaktný formulár (loguje do konzoly)
- ✅ SEO optimalizácie
- ✅ Sitemap a robots.txt

### Odporúčané vylepšenia po deploye:
1. **Custom doména** - pripojte zelenefasady.sk
2. **Analytics** - Vercel Analytics alebo Google Analytics
3. **Email integrácia** - SendGrid/Resend pre formulár
4. **Obrázky** - pridajte reálne fotky projektov

## 📊 Monitoring
Po nasadení môžete sledovať:
- Performance skóre
- Web Vitals metriky
- Návštevnosť
- Chyby a logy

## 🔄 Aktualizácie
Každý push do `main` branch automaticky spustí nový deployment!

## 📞 Podpora
Pri problémoch:
1. Skontrolujte Build Logs vo Vercel Dashboard
2. Overte Node.js verziu (18.17+ vyžadovaná)
3. Skontrolujte či sú všetky dependencies v package.json

---

**Projekt je 100% pripravený na produkčné nasadenie!** 🚀