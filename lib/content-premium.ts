// Premium content inspired by SemperGreenwall, Patrick Blanc, and Mobilane
// Slovak translation without diacritics for build compatibility

export const premiumContent = {
  company: {
    name: "Zelene fasady",
    tagline: "Systemy zelenych fasad pre modernu architekturu",
    description: "Navrhujeme, instalujeme a udrzujeme systemy zivych stien, ktore integruju prirodu s modernou architekturou. 15+ rokov expertiz a Cradle-to-Cradle certifikovane riesenia.",
    headline: "Ziva architektura pre moderne budovy",
    subheadline: "Premienam mestske priestory udrzatelnymi vertikalnymi ozelenovaciami systemami",
  },

  hero: {
    title: "Ziva architektura pre moderne budovy",
    subtitle: "Udrzatelne vertikalne ozelenovacie systemy",
    description: "Navrhujeme a implementujeme systemy zelenych fasad, ktore zvysuju biodiverzitu, zlepsuju kvalitu vzduchu a vytvaraju zdravsie mestske prostredie.",
    cta: {
      primary: "Dohodnut konzultaciu",
      secondary: "Prezriet projekty",
    },
    stats: [
      { value: "15+", label: "rokov expertiz" },
      { value: "50+", label: "zrealizovanych projektov" },
      { value: "100%", label: "spokojnost klientov" },
    ],
  },

  values: [
    {
      icon: "Sprout",
      title: "Biodiverzita",
      description: "Nase systemy podporuju lokalnu floru a faunu, vytvaraju zelene koridory v mestskom prostredi a prispievaju k obnove ekosystemov.",
    },
    {
      icon: "Droplets",
      title: "Vodny manazment",
      description: "Inteligentne zavlahovacie systemy so zberom a recyklaciou dazdovej vody znizuju spotrebu vody az o 60%.",
    },
    {
      icon: "Shield",
      title: "Ochrana budovy",
      description: "Zive fasady chrana obvodovy plast budovy pred poveternostnymi vplyvmi, UV ziarenim a teplotnymi vykyvy, cim predlzuju jeho zivotnost.",
    },
  ],

  benefits: [
    {
      icon: "Wind",
      title: "Klimaticka regulacia",
      description: "Vertikalna zelen zmieruje extremne teploty prostrednict vom evapotranspiracii a vytvara prirodnu izolaciu, znizuje naroky na energiu pre vykurovanie a chladenie.",
      image: "/images/benefit-climate.jpg",
    },
    {
      icon: "Sparkles",
      title: "Zlepsenie kvality vzduchu",
      description: "Rastliny prirodzene filtruju pevne castic, absorbuju CO2 a produkuju kysilik. Nase systemy meratelne prispievaju k zlepseniu kvality vzduchu v okoli.",
      image: "/images/benefit-air.jpg",
    },
    {
      icon: "Volume2",
      title: "Akusticka pohoda",
      description: "Huste vegetacne vrstvy absorbuju a odrazaju zvukove vlny, vytvaraju ucinne akusticke bariery, ktore znizuju hlukovu znecistenie z dopravy a mestskej cinnosti.",
      image: "/images/benefit-acoustic.jpg",
    },
    {
      icon: "Users",
      title: "Ludska pohoda",
      description: "Biofilne dizajnove prvky zlepsuju dusevne zdravie, znizuju stres a zvysuju produktivitu. Studie ukazuju, ze ozelnene priestory zlepsuju kognitivne funkcie a spokojnost.",
      image: "/images/benefit-wellbeing.jpg",
    },
    {
      icon: "TrendingUp",
      title: "Zvysenie hodnoty majetku",
      description: "BREEAM a LEED certifikovane zelene budovy dosahuju vyssiu obsadenost a najomne premie, zatial co demonstruju firemnu environmentalnu zodpovednost.",
      image: "/images/benefit-value.jpg",
    },
    {
      icon: "Leaf",
      title: "Manazment dazdovej vody",
      description: "Zive steny zadrzuju a spomaluju odtok dazdovej vody, znizuju stavove zatazenie komunalnych odvodnov acich systemov a prispievaju k udrzatelnemu manazmentu vody.",
      image: "/images/benefit-water.jpg",
    },
  ],

  process: [
    {
      step: "01",
      title: "Posudenie lokality",
      description: "Komplexne vyhodnotenie orientacie budovy, mikroklimaty, statitvej kapacity a regulatornych poziadaviek na urcenie optimalneho vyberu systemu.",
      icon: "Search",
    },
    {
      step: "02",
      title: "Navrh systemu",
      description: "Individualne inzinierstvo a vyber rastlin na zaklade specifickich podmienok lokality. 3D vizualizacia a modelovanie vykonnosti zabezpecuju uspesnu implementaciu.",
      icon: "Palette",
    },
    {
      step: "03",
      title: "Instalacia",
      description: "Profesionalna implementacia certifikovanymi instalatermi podla vyrobnych specifikacii a stavebnych predpisov. Minimalne prerusenie prevadzky budovy.",
      icon: "Hammer",
    },
    {
      step: "04",
      title: "Program udrzby",
      description: "Naplanovane inspekcie, rezanie, monitoring systemu a sezonna starostlivost o rastliny zabezpecuju dlouhodoby vykon a esteticku kvalitu.",
      icon: "Settings",
    },
  ],

  systems: [
    {
      id: "modular",
      name: "Modularne zive steny",
      subtitle: "Predsadene moduly pre okamzity vizualny dojem",
      description: "Prefabrikovane sadobne moduly s integrovanym pestovatelskym substratom a zavlahou. Idealne pre interierove aj exterierove aplikacie vyzadujuce dizajnovu flexibilitu a rychlu instalaciu.",
      specifications: {
        weight: "35-60 kg/sqm",
        depth: "150-200 mm",
        irrigation: "Automatizovany kvapkovy system",
        maintenance: "Stvrtrocny servis",
        lifespan: "15-20 rokov",
      },
      plants: ["Bergenia", "Heuchera", "Carex", "Festuca", "Sedum", "Paprade"],
      certifications: ["LEED Water Efficiency", "BREEAM Ecology", "Cradle to Cradle Certified"],
      benefits: [
        "Okamzite zelene pokrytie",
        "Dizajnova flexibilita",
        "Siroka paleta rastlin",
        "Kontrolovane pestovatelske podmienky",
      ],
      image: "/images/system-modular.jpg",
    },
    {
      id: "climbing",
      name: "Popinave zelene fasady",
      subtitle: "Tradicny pristup s modernym inzinierstvom",
      description: "Nosne konstrukcie pre popinave rastliny, ktore postupne vytvaraju prirodzene vegetacne vrstvy. Nizsie instalacne naklady a poziadavky na udrzbu toto riesenie vhodne pre rozsiahle ozeleovovanie fasad.",
      specifications: {
        weight: "10-30 kg/sqm",
        depth: "300-600 mm odstup",
        irrigation: "Pozemna alebo kvapkova",
        maintenance: "Polrocne rezanie",
        lifespan: "30+ rokov",
      },
      plants: ["Hedera helix", "Parthenocissus", "Wisteria", "Clematis", "Lonicera"],
      certifications: ["BREEAM Biodiversity", "LEED Sustainable Sites"],
      benefits: [
        "Prirodzena estetika",
        "Nizke prevadzkove naklady",
        "Samoudrzatelne systemy",
        "Maximalna hodnota biodiverzity",
      ],
      image: "/images/system-climbing.jpg",
    },
    {
      id: "hydroponic",
      name: "Hydroponicke systemy",
      subtitle: "Pestovanie bez substratov pre narocne prostredia",
      description: "Pokrocile pestovatelske systemy bez tradicneho pestovatelsketo substratu. Optimalizovane dodanie zivim a vodna ucinnost. Vhodne pre zlozite geometrie a interierove aplikacie, kde je hmotnost kriticka.",
      specifications: {
        weight: "25-40 kg/sqm",
        depth: "100-150 mm",
        irrigation: "Recirkulacna hydroponia",
        maintenance: "Mesacna kontrola systemu",
        lifespan: "20+ rokov",
      },
      plants: ["Pothos", "Philodendron", "Paprade", "Chlorophytum", "Tradescantia", "Ficus"],
      certifications: ["LEED IEQ", "BREEAM Health & Wellbeing", "WELL Building Standard"],
      benefits: [
        "Minimalne hmotnostne zatazenie",
        "Presna kontrola rastu",
        "Celorocny vykon",
        "Schopnost dialkoveho monitoringu",
      ],
      image: "/images/system-hydroponic.jpg",
    },
    {
      id: "biodiverse",
      name: "Biodiverzne fasady",
      subtitle: "Tvorba habitatov pre mestsku divocinu",
      description: "Specializovane systemy navrhute na podporu populacii opelovacov a mestskej biodiverzity. Vyber domacich rastlin a hniezdne prvky vytvaraju ekologicke koridory v zastavanych oblastiach.",
      specifications: {
        weight: "40-70 kg/sqm",
        depth: "200-400 mm",
        irrigation: "Dazdove napajanie s doplnkovou",
        maintenance: "Sezonna sprava",
        lifespan: "25+ rokov",
      },
      plants: ["Domace divoke kvety", "Travy", "Ostrice", "Byliny", "Kroviny s bobulami"],
      certifications: ["BREEAM Ecology Excellence", "LEED Innovation", "Net Gain Biodiversity"],
      benefits: [
        "Maximalna ekologicka hodnota",
        "Podpora opelovacov",
        "Vzdelavacne prilezitosti",
        "Klimaticka odolnost",
      ],
      image: "/images/system-biodiverse.jpg",
    },
  ],

  featuredProjects: [
    {
      id: 1,
      title: "NBS Business Center",
      location: "Bratislava, Slovensko",
      category: "Komercne",
      area: "450 sqm",
      year: "2023",
      system: "Modularne zive steny",
      description: "Komplexna instalacia zelenej fasady pre moderny kancelaarsky komplex. Modularny system poskytuje celorocnu zelen a prispieva k certifikacii BREEAM Excellent.",
      challenge: "Vysoka veternost a efekt mestskej tepelnej ostrovy vyzadovali starostlivy vyber rastlin a posielne kotviace systemy.",
      solution: "Dizajn odolny proti vetru so zosilnenym montaznym systemom. Automatizovana zavlaha s meteorologickymi senzormi optimalizuje spotrebu vody.",
      results: [
        "Dosiahnutie certifikacit BREEAM Excellent",
        "Namerene znizenie teploty fasady o 12C",
        "100% uspesnost zakorenenia rastlin",
      ],
      image: "/images/project-nbs.jpg",
      images: [
        "/images/project-nbs-1.jpg",
        "/images/project-nbs-2.jpg",
        "/images/project-nbs-3.jpg",
      ],
    },
    {
      id: 2,
      title: "Riverside Residences",
      location: "Praha, Cesko",
      category: "Rezidenčne",
      area: "320 sqm",
      year: "2022",
      system: "Popinave zelene fasady",
      description: "Tradicny system popinavych rastlin integrovany so sucasnou architekturou. Vyber domacich druhov zvysuje lokalnu biodiverzitu.",
      challenge: "Obmedzenia pamiatkovo chranenej budovy limitovali montazne moznosti a vyzadovali reverzibilne instalacne metody.",
      solution: "Volnostojaca nosna konstrukcia s minimalnymi prenikami do budovy. Sezonne kvetne sekvenccie poskytuju celorocny zajem.",
      results: [
        "Dosiahnute stavebne povolenie pre chrattenu budovu",
        "Zakorenenie domacich rastlin behom jednej rastovej sezony",
        "Ocenene Prazskou architektonickou cenou 2023",
      ],
      image: "/images/project-riverside.jpg",
      images: [
        "/images/project-riverside-1.jpg",
        "/images/project-riverside-2.jpg",
        "/images/project-riverside-3.jpg",
      ],
    },
    {
      id: 3,
      title: "Mountain Wellness Resort",
      location: "Vysoke Tatry, Slovensko",
      category: "Pohostinstvo",
      area: "180 sqm",
      year: "2023",
      system: "Hydroponicke systemy",
      description: "Interierove zive steny pre spa a wellness zariadenia. Hydroponicka technologia zabezpecuje optimalne zdravie rastlin v kontrolovanom vnutornom prostredi.",
      challenge: "Vysoka vlhkost prostredia a kolisave vnutorne teploty vyzadovali specializovany vyber rastlin a navrh systemu.",
      solution: "Druhy tolerantne na vlhkost so zlepsenim cirkulaciou vzduchu. Integrovane LED pestovatelske osvetlenie udrzuje vykon pocas zimnych mesiacov.",
      results: [
        "Zlepsene merania kvality vnutorneho vzduchu",
        "Skore spokojnosti hosti vzraste o 18%",
        "Prezentovane v Architectural Digest",
      ],
      image: "/images/project-wellness.jpg",
      images: [
        "/images/project-wellness-1.jpg",
        "/images/project-wellness-2.jpg",
        "/images/project-wellness-3.jpg",
      ],
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Ing. Peter Horvath",
      role: "Property Manager",
      company: "Business Park Bratislava",
      content: "Profesionalny pristup a pozornost detailom pocas projektu predcili nase ocakavania. Nasi najomcovia konzistentne komentuju zlepsene pracovne prostredie.",
      avatar: "/images/avatar-horvath.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Arch. Jana Novakova",
      role: "Hlavna architektka",
      company: "Studio Architekti",
      content: "Ich pochopenie zahradnickych aj architektonickych poziadaviek urobilo spoluspracu bezproblemovetou. Instalacia sa stala definicnym prvkom naseho dizajnu.",
      avatar: "/images/avatar-novakova.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Mgr. Martin Kovac",
      role: "Riaditel rozvoja",
      company: "Riverside Development",
      content: "Projekt dodany v termíne a v ramci rozpoctu. Zelena fasada sa stala charakteristickym prvkom rozvojoveho projektu a klucovym marketingovym aktivom.",
      avatar: "/images/avatar-kovac.jpg",
      rating: 5,
    },
  ],

  cta: {
    title: "Pripraveni transformovat vasu budovu?",
    subtitle: "Naplanovajte si konzultaciu na prediskutovanie vaseho projektu",
    description: "Nas tym poskytuje komplexne posudenie lokality a predbeznu dizajnovu konzultaciu bez zavazku. Pomozeme urcit optimalne riesenie zelenej fasady pre vasu budovu.",
    benefits: [
      "Bezplatne posudenie lokality",
      "Predbezne dizajnove koncepty",
      "Odporucania systemov",
      "Indikacia rozpoctu",
    ],
    cta: {
      primary: "Naplanovt konzultaciu",
      secondary: "Volat: +421 900 123 456",
    },
  },

  technology: {
    title: "Pokrocila technologia zelenych fasad",
    subtitle: "Inzinierske systemy pre dlhodoby vykon",
    description: "Nase instalacie zahrnaju najnovsie pokroky v zavlahovacej technologii, vyvoji pestovatelskych substratov a rastlinnej vede na zabezpecenie spolahliveho, udrzbu-efektivneho vykonu.",
    features: [
      {
        icon: "Droplets",
        title: "Inteligentna zavlaha",
        description: "Pocasiu-reagujuce systemy so senzormi vlhkosti poody a automatizovanym planovamim optimalizuju spotrebu vody pri zabezpeceni zdravia rastlin.",
      },
      {
        icon: "Cpu",
        title: "Dialakove monitorovanie",
        description: "Diagnostika systemu v realnom case a udaje o vykone umoznuju proaktivnu udrzbu a vcasnu detekciu problemov.",
      },
      {
        icon: "Leaf",
        title: "Optimalizovane pestovatelske substraty",
        description: "Lahke, vol ne-odvodnave substraty vyvinutte specialne pre vertikalne aplikacie poskytuju idealne prostredie pre korene.",
      },
      {
        icon: "Wind",
        title: "Klimaticky adaptovane rastliny",
        description: "Starostlivy vyber druhov zabezpecuje celorocny vykon a odolnost voci lokalnym klimatickym podmienkam.",
      },
    ],
  },

  certifications: [
    {
      name: "Cradle to Cradle Certified",
      description: "Materialy vybrane pre environmentalnu bezpecnost a recyklovatelnost",
      image: "/images/cert-c2c.svg",
    },
    {
      name: "BREEAM Accredited Professional",
      description: "Expertiza v hodnoteni udrzatelnych budov",
      image: "/images/cert-breeam.svg",
    },
    {
      name: "LEED Green Associate",
      description: "Vodcovstvo v energii a environmentalnom dizajne",
      image: "/images/cert-leed.svg",
    },
    {
      name: "EFB Certified",
      description: "Certifikacia Europskej federacie zivych stien",
      image: "/images/cert-efb.svg",
    },
  ],
}

export const premiumNavigation = {
  main: [
    { name: "Domov", href: "/" },
    { name: "Projekty", href: "/projekty" },
    { name: "Systemy", href: "/systemy" },
    { name: "Technologia", href: "/technologia" },
    { name: "O nas", href: "/o-nas" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  footer: {
    services: [
      { name: "Navrh a konzultacia", href: "#" },
      { name: "Instalacia", href: "#" },
      { name: "Udrzba", href: "#" },
      { name: "Technicke poradenstvo", href: "#" },
    ],
    company: [
      { name: "O nas", href: "#" },
      { name: "Projekty", href: "#" },
      { name: "Tim", href: "#" },
      { name: "Kariera", href: "#" },
    ],
    resources: [
      { name: "Technicke specifikacie", href: "#" },
      { name: "Pripadove studie", href: "#" },
      { name: "Vyskumne clanky", href: "#" },
      { name: "Dizajnove smernice", href: "#" },
    ],
    legal: [
      { name: "Ochrana osobnych udajov", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Obchodne podmienky", href: "#" },
    ],
    social: [
      { name: "Instagram", href: "#", icon: "Instagram" },
      { name: "LinkedIn", href: "#", icon: "Linkedin" },
      { name: "Facebook", href: "#", icon: "Facebook" },
    ],
  },
}
