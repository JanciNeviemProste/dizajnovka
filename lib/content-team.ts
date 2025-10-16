// Team content for dizajnovka - Professional team presentation
// Slovak without diacritics for build compatibility

export const teamMembers = [
  {
    id: 1,
    name: "Ing. Peter Novak",
    role: "Zakladatel a CEO",
    bio: "Viac ako 15 rokov skusenosti v oblasti vertikalneho ozelenenia a udrzatelnej architektury. Absolvoval specializovane kurzy v Holandsku a Francuzsku u pionierov zelenych fasad. Vedie strategicky smer spolocnosti a dohlada na kvalitu vsetkych projektov.",
    photo: "/images/team/peter-novak.jpg",
    email: "peter.novak@zelenefasady.sk",
    linkedin: "https://linkedin.com/in/peter-novak",
    expertise: [
      "System design",
      "Project management",
      "LEED certification",
      "Cradle to Cradle methodology"
    ],
    achievements: [
      "50+ realizovanych projektov",
      "LEED Green Associate",
      "C2C Accredited Professional"
    ]
  },
  {
    id: 2,
    name: "Mgr. Jana Kovacova",
    role: "Hlavna architektka",
    bio: "Specialistka na biofilny dizajn a integraciu zelenych systemov do modernej architektury. Absolvovala studium krajinovej architektury v Cechach a specializacne kurzy biofilneho dizajnu v Singapure. Zodpovedna za dizajnove riesenia a vizualne koncepty projektov.",
    photo: "/images/team/jana-kovacova.jpg",
    email: "jana.kovacova@zelenefasady.sk",
    linkedin: "https://linkedin.com/in/jana-kovacova",
    expertise: [
      "Biofilny dizajn",
      "Krajinova architektura",
      "BREEAM assessment",
      "3D vizualizacia"
    ],
    achievements: [
      "BREEAM Accredited Professional",
      "Cena za dizajn 2022",
      "30+ dizajnovych konceptov"
    ]
  },
  {
    id: 3,
    name: "Bc. Martin Horvath",
    role: "Technicky riaditel",
    bio: "Expert na zavlahovacie systemy, hydroponnu technologiu a IoT monitoring. Stazoval v Izraeli v oblasti presnej polnohospodarskej techniky a smart irrigation. Zaruci technickku spolahlvost a inovacie vo vsetkych instalacnych projektoch.",
    photo: "/images/team/martin-horvath.jpg",
    email: "martin.horvath@zelenefasady.sk",
    linkedin: "https://linkedin.com/in/martin-horvath",
    expertise: [
      "Hydroponia",
      "IoT monitoring systemy",
      "Automatizovana zavlaha",
      "Senzorove technologie"
    ],
    achievements: [
      "Patent na zavlahovy system",
      "98% system reliability",
      "60% water savings average"
    ]
  },
  {
    id: 4,
    name: "Ing. Eva Tomasova",
    role: "Veduca botanicka",
    bio: "Botanicka so zamerani na vertikalne pestovanie a klimaticku adaptaciu rastlin. Vyskumala viac ako 200 druhov rastlin pre podmienky strednej Europy. Zabezpecuje vyber vhodnych rastlin a ich dlouhodobu zivotaschopnost v zelenych fasadach.",
    photo: "/images/team/eva-tomasova.jpg",
    email: "eva.tomasova@zelenefasady.sk",
    linkedin: "https://linkedin.com/in/eva-tomasova",
    expertise: [
      "Rastlinna veda",
      "Klimaticka adaptacia",
      "Biodiverzita",
      "Substraty a vyziva"
    ],
    achievements: [
      "200+ druhov testovanych",
      "95% survival rate",
      "Vyskumne publikacie v odbore"
    ]
  }
]

export const companyValues = [
  {
    icon: "Leaf",
    title: "Udrzatelnost",
    description: "Vsetky nase systemy su navrhnutte s oh\u013eadom na okruzujuce prostredie. Pouzivame Cradle to Cradle certifikovane materialy a minimalizujeme ekologicku stopu."
  },
  {
    icon: "Lightbulb",
    title: "Inovacia",
    description: "Investujeme do vyskumu a vyvoja novych technologii. Nase IoT monitoring systemy a automatizovane zavlahovacie riesenia su na popredku odvetvia."
  },
  {
    icon: "Award",
    title: "Kvalita",
    description: "98% spolahlvost systemov a 100% spokojnost klientov. Kazdy projekt prechadzza priesnou kontrolou kvality a dlhodobym monitoringom."
  },
  {
    icon: "Users",
    title: "Experti",
    description: "Nas tym tvoria certifikovani specialisti s medzinarodnou skusenostou. LEED, BREEAM a C2C akreditacie garantuju najvyssiu odbornú uroven."
  }
]

export const companyMission = {
  title: "Nasa misia",
  subtitle: "Transformujeme mestske prostredie",
  description: "Specializujeme sa na navrh, instalaciu a udrzbu profesionalnych systemov zelenych fasad. Nase riesenia zlepsuhu kvalitu vzduchu, znizuju energeticku spotrebu budov a vytvaraju zdravsie mestske prostredie pre vsetkych.",
  founded: "2009",
  stats: [
    { value: "15+", label: "Rokov skusenosti" },
    { value: "50+", label: "Realizovanych projektov" },
    { value: "100%", label: "Spokojnost klientov" },
    { value: "4", label: "Certifikovanych expertov" }
  ]
}

export const certifications = [
  {
    id: "c2c",
    name: "Cradle to Cradle",
    shortName: "C2C Certified",
    description: "Nase systemy pouzivaju materialy certifikovane pre environmentalnu bezpecnost a plnu recyklovatelnost.",
    image: "/images/cert-c2c.svg",
    issuer: "C2C Products Innovation Institute",
    level: "Bronze"
  },
  {
    id: "leed",
    name: "LEED Green Associate",
    shortName: "LEED GA",
    description: "Certifikacia expertov v oblasti energeticko-efektivneho a environmentalneho dizajnu budov.",
    image: "/images/cert-leed.svg",
    issuer: "U.S. Green Building Council",
    level: "Professional"
  },
  {
    id: "breeam",
    name: "BREEAM Accredited Professional",
    shortName: "BREEAM AP",
    description: "Akreditacia v najrozsirenejsom europskom systeme hodnotenia udrzatelnosti budov.",
    image: "/images/cert-breeam.svg",
    issuer: "BRE Global",
    level: "Accredited"
  },
  {
    id: "efb",
    name: "European Federation of Green Walls",
    shortName: "EFB Certified",
    description: "Clenska certifikacia Europskej federacie pre zelene steny a vertikalne ozelenovanie.",
    image: "/images/cert-efb.svg",
    issuer: "EFB",
    level: "Member"
  },
  {
    id: "well",
    name: "WELL Building Standard",
    shortName: "WELL AP",
    description: "Specializacia na budovy zamerane na zdravie a pohodu obyvatelov.",
    image: "/images/cert-well.svg",
    issuer: "International WELL Building Institute",
    level: "Associate"
  }
]

export const companyTimeline = [
  {
    year: "2009",
    title: "Zalozenie spolocnosti",
    description: "Start so zakladnou viziou priniest zelene fasady na slovensky trh."
  },
  {
    year: "2012",
    title: "Prvy velky projekt",
    description: "Realizacia 450 sqm zelenej fasady pre NBS Business Center v Bratislave."
  },
  {
    year: "2015",
    title: "C2C Certifikacia",
    description: "Ziskanie Cradle to Cradle certifikacie pre nase materialy a systemy."
  },
  {
    year: "2018",
    title: "Expanzia",
    description: "Otvorenie pobocky v Ceskej republike a zaciatok projektov v zahranici."
  },
  {
    year: "2021",
    title: "IoT Innovation",
    description: "Uvedenie vlastneho IoT monitoring systemu pre dialakove riadenie."
  },
  {
    year: "2024",
    title: "50+ Projektov",
    description: "Dosiahnutie milnika 50 realizovanych projektov s 100% spokojnostou."
  }
]
