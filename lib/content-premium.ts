// Premium content inspired by SemperGreenwall, Patrick Blanc, and Mobilane

export const premiumContent = {
  company: {
    name: "Zelene fasady",
    tagline: "Green facade systems for sustainable architecture",
    description: "We design, install, and maintain living wall systems that integrate nature with modern architecture. With 15 years of expertise and Cradle-to-Cradle certified solutions.",
    headline: "Living architecture for modern buildings",
    subheadline: "Transforming urban spaces with sustainable vertical greening systems",
  },

  hero: {
    title: "Living architecture for modern buildings",
    subtitle: "Sustainable vertical greening systems",
    description: "We design and implement green facade systems that enhance biodiversity, improve air quality, and create healthier urban environments.",
    cta: {
      primary: "Schedule consultation",
      secondary: "Explore projects",
    },
    stats: [
      { value: "15+", label: "years of expertise" },
      { value: "50+", label: "completed projects" },
      { value: "100%", label: "client satisfaction" },
    ],
  },

  values: [
    {
      icon: "Sprout",
      title: "Biodiversity",
      description: "Our systems support local flora and fauna, creating green corridors in urban environments and contributing to ecosystem restoration.",
    },
    {
      icon: "Droplets",
      title: "Water management",
      description: "Intelligent irrigation systems with rainwater harvesting and recycling capabilities reduce water consumption by up to 60%.",
    },
    {
      icon: "Shield",
      title: "Building protection",
      description: "Living facades protect building envelopes from weathering, UV radiation, and temperature fluctuations, extending structure lifespan.",
    },
  },

  benefits: [
    {
      icon: "Wind",
      title: "Climate regulation",
      description: "Vertical greenery moderates temperature extremes through evapotranspiration and creates natural insulation, reducing energy demands for heating and cooling.",
      image: "/images/benefit-climate.jpg",
    },
    {
      icon: "Sparkles",
      title: "Air quality improvement",
      description: "Plants naturally filter particulate matter, absorb CO2, and produce oxygen. Our systems contribute measurably to improved air quality in surrounding areas.",
      image: "/images/benefit-air.jpg",
    },
    {
      icon: "Volume2",
      title: "Acoustic performance",
      description: "Dense vegetation layers absorb and deflect sound waves, creating effective acoustic barriers that reduce noise pollution from traffic and urban activity.",
      image: "/images/benefit-acoustic.jpg",
    },
    {
      icon: "Users",
      title: "Human wellbeing",
      description: "Biophilic design elements improve mental health, reduce stress, and increase productivity. Studies show greened spaces enhance cognitive function and satisfaction.",
      image: "/images/benefit-wellbeing.jpg",
    },
    {
      icon: "TrendingUp",
      title: "Asset value enhancement",
      description: "BREEAM and LEED certified green buildings achieve higher occupancy rates and rental premiums while demonstrating corporate environmental responsibility.",
      image: "/images/benefit-value.jpg",
    },
    {
      icon: "Leaf",
      title: "Stormwater management",
      description: "Living walls retain and slow rainwater runoff, reducing peak loads on municipal drainage systems and contributing to sustainable urban water management.",
      image: "/images/benefit-water.jpg",
    },
  },

  process: [
    {
      step: "01",
      title: "Site assessment",
      description: "Comprehensive evaluation of building orientation, microclimate, structural capacity, and regulatory requirements to determine optimal system selection.",
      icon: "Search",
    },
    {
      step: "02",
      title: "System design",
      description: "Custom engineering and plant selection based on site-specific conditions. 3D visualization and performance modeling ensure successful implementation.",
      icon: "Palette",
    },
    {
      step: "03",
      title: "Installation",
      description: "Professional implementation by certified installers following manufacturer specifications and building codes. Minimal disruption to building operations.",
      icon: "Hammer",
    },
    {
      step: "04",
      title: "Maintenance program",
      description: "Scheduled inspection, pruning, system monitoring, and seasonal plant care ensure long-term performance and aesthetic quality.",
      icon: "Settings",
    },
  },

  systems: [
    {
      id: "modular",
      name: "Modular living walls",
      subtitle: "Pre-planted modules for immediate visual impact",
      description: "Prefabricated planting modules with integrated growing media and irrigation. Ideal for both interior and exterior applications requiring design flexibility and rapid installation.",
      specifications: {
        weight: "35-60 kg/m²",
        depth: "150-200 mm",
        irrigation: "Automated drip system",
        maintenance: "Quarterly service",
        lifespan: "15-20 years",
      },
      plants: ["Bergenia", "Heuchera", "Carex", "Festuca", "Sedum", "Ferns"],
      certifications: ["LEED Water Efficiency", "BREEAM Ecology", "Cradle to Cradle Certified"],
      benefits: [
        "Immediate green coverage",
        "Design flexibility",
        "Wide plant palette",
        "Controlled growing conditions",
      ],
      image: "/images/system-modular.jpg",
    },
    {
      id: "climbing",
      name: "Climbing green facades",
      subtitle: "Traditional approach with modern engineering",
      description: "Support structures for climbing plants that establish natural vegetation layers over time. Lower installation costs and maintenance requirements make this suitable for large-scale facade greening.",
      specifications: {
        weight: "10-30 kg/m²",
        depth: "300-600 mm clearance",
        irrigation: "Ground-based or drip",
        maintenance: "Bi-annual pruning",
        lifespan: "30+ years",
      },
      plants: ["Hedera helix", "Parthenocissus", "Wisteria", "Clematis", "Lonicera"],
      certifications: ["BREEAM Biodiversity", "LEED Sustainable Sites"],
      benefits: [
        "Natural aesthetic",
        "Low operational costs",
        "Self-sustaining systems",
        "Maximum biodiversity value",
      ],
      image: "/images/system-climbing.jpg",
    },
    {
      id: "hydroponic",
      name: "Hydroponic systems",
      subtitle: "Soilless cultivation for challenging environments",
      description: "Advanced growing systems without traditional growing media. Optimized nutrient delivery and water efficiency. Suitable for complex geometries and interior applications where weight is critical.",
      specifications: {
        weight: "25-40 kg/m²",
        depth: "100-150 mm",
        irrigation: "Recirculating hydroponics",
        maintenance: "Monthly system check",
        lifespan: "20+ years",
      },
      plants: ["Pothos", "Philodendron", "Ferns", "Chlorophytum", "Tradescantia", "Ficus"],
      certifications: ["LEED IEQ", "BREEAM Health & Wellbeing", "WELL Building Standard"],
      benefits: [
        "Minimal weight loading",
        "Precise growth control",
        "Year-round performance",
        "Remote monitoring capability",
      ],
      image: "/images/system-hydroponic.jpg",
    },
    {
      id: "biodiverse",
      name: "Biodiverse facades",
      subtitle: "Habitat creation for urban wildlife",
      description: "Specialized systems designed to support pollinator populations and urban biodiversity. Native plant selection and nesting features create ecological corridors in built environments.",
      specifications: {
        weight: "40-70 kg/m²",
        depth: "200-400 mm",
        irrigation: "Rain-fed with supplemental",
        maintenance: "Seasonal management",
        lifespan: "25+ years",
      },
      plants: ["Native wildflowers", "Grasses", "Sedges", "Herbs", "Berry-producing shrubs"],
      certifications: ["BREEAM Ecology Excellence", "LEED Innovation", "Net Gain Biodiversity"],
      benefits: [
        "Maximum ecological value",
        "Pollinator support",
        "Educational opportunities",
        "Climate resilience",
      ],
      image: "/images/system-biodiverse.jpg",
    },
  ],

  featuredProjects: [
    {
      id: 1,
      title: "NBS Business Center",
      location: "Bratislava, Slovakia",
      category: "Commercial",
      area: "450 m²",
      year: "2023",
      system: "Modular living walls",
      description: "Comprehensive green facade installation for modern office complex. The modular system provides year-round greenery while contributing to BREEAM Excellent certification.",
      challenge: "High wind exposure and urban heat island effect required careful plant selection and enhanced anchoring systems.",
      solution: "Wind-resistant planting design with reinforced mounting system. Automated irrigation with weather sensors optimizes water use.",
      results: [
        "BREEAM Excellent certification achieved",
        "Façade temperature reduction of 12°C measured",
        "100% plant establishment success",
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
      location: "Prague, Czech Republic",
      category: "Residential",
      area: "320 m²",
      year: "2022",
      system: "Climbing green facades",
      description: "Traditional climbing plant system integrated with contemporary architecture. Native species selection enhances local biodiversity.",
      challenge: "Listed building constraints limited mounting options and required reversible installation methods.",
      solution: "Custom freestanding support structure with minimal building penetrations. Seasonal flowering sequence provides year-round interest.",
      results: [
        "Planning approval achieved for protected structure",
        "Native plant establishment within one growing season",
        "Recognized by Prague Architecture Prize 2023",
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
      location: "High Tatras, Slovakia",
      category: "Hospitality",
      area: "180 m²",
      year: "2023",
      system: "Hydroponic systems",
      description: "Interior living walls for spa and wellness facilities. Hydroponic technology ensures optimal plant health in controlled indoor environment.",
      challenge: "High humidity environment and fluctuating indoor temperatures required specialized plant selection and system design.",
      solution: "Humidity-tolerant species with enhanced air circulation. Integrated LED grow lighting maintains performance during winter months.",
      results: [
        "Improved indoor air quality measurements",
        "Guest satisfaction scores increased 18%",
        "Featured in Architectural Digest",
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
      name: "Ing. Peter Horváth",
      role: "Property Manager",
      company: "Business Park Bratislava",
      content: "The professional approach and attention to detail throughout the project exceeded our expectations. Our tenants consistently comment on the improved working environment.",
      avatar: "/images/avatar-horvath.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Arch. Jana Nováková",
      role: "Principal Architect",
      company: "Studio Architekti",
      content: "Their understanding of both horticultural and architectural requirements made collaboration seamless. The installation became a defining feature of our design.",
      avatar: "/images/avatar-novakova.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Mgr. Martin Kováč",
      role: "Development Director",
      company: "Riverside Development",
      content: "Project delivered on schedule and within budget. The green facade has become the signature element of the development and a key marketing asset.",
      avatar: "/images/avatar-kovac.jpg",
      rating: 5,
    },
  ],

  cta: {
    title: "Ready to transform your building?",
    subtitle: "Schedule a consultation to discuss your project",
    description: "Our team provides comprehensive site assessment and preliminary design consultation at no obligation. We'll help determine the optimal green facade solution for your building.",
    benefits: [
      "Complimentary site assessment",
      "Preliminary design concepts",
      "System recommendations",
      "Budget indication",
    ],
    cta: {
      primary: "Schedule consultation",
      secondary: "Call: +421 900 123 456",
    },
  },

  technology: {
    title: "Advanced green facade technology",
    subtitle: "Engineered systems for long-term performance",
    description: "Our installations incorporate the latest advances in irrigation technology, growing media development, and plant science to ensure reliable, maintenance-efficient performance.",
    features: [
      {
        icon: "Droplets",
        title: "Smart irrigation",
        description: "Weather-responsive systems with soil moisture sensors and automated scheduling optimize water use while ensuring plant health.",
      },
      {
        icon: "Cpu",
        title: "Remote monitoring",
        description: "Real-time system diagnostics and performance data enable proactive maintenance and early issue detection.",
      },
      {
        icon: "Leaf",
        title: "Optimized growing media",
        description: "Lightweight, free-draining substrates developed specifically for vertical applications provide ideal root environment.",
      },
      {
        icon: "Wind",
        title: "Climate-adapted plants",
        description: "Careful species selection ensures year-round performance and resilience to local climate conditions.",
      },
    ],
  },

  certifications: [
    {
      name: "Cradle to Cradle Certified",
      description: "Materials selected for environmental safety and recyclability",
      image: "/images/cert-c2c.svg",
    },
    {
      name: "BREEAM Accredited Professional",
      description: "Expertise in sustainable building assessment",
      image: "/images/cert-breeam.svg",
    },
    {
      name: "LEED Green Associate",
      description: "Leadership in energy and environmental design",
      image: "/images/cert-leed.svg",
    },
    {
      name: "EFB Certified",
      description: "European Federation for Living Walls certification",
      image: "/images/cert-efb.svg",
    },
  ],
}

export const premiumNavigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projekty" },
    { name: "Systems", href: "/systemy" },
    { name: "Technology", href: "/technologia" },
    { name: "About", href: "/o-nas" },
    { name: "Contact", href: "/kontakt" },
  ],
  footer: {
    services: [
      { name: "Design & consultation", href: "#" },
      { name: "Installation", href: "#" },
      { name: "Maintenance", href: "#" },
      { name: "Technical advisory", href: "#" },
    ],
    company: [
      { name: "About us", href: "#" },
      { name: "Projects", href: "#" },
      { name: "Team", href: "#" },
      { name: "Careers", href: "#" },
    ],
    resources: [
      { name: "Technical specifications", href: "#" },
      { name: "Case studies", href: "#" },
      { name: "Research papers", href: "#" },
      { name: "Design guidelines", href: "#" },
    ],
    legal: [
      { name: "Privacy policy", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Terms of service", href: "#" },
    ],
    social: [
      { name: "Instagram", href: "#", icon: "Instagram" },
      { name: "LinkedIn", href: "#", icon: "Linkedin" },
      { name: "Facebook", href: "#", icon: "Facebook" },
    ],
  },
}
