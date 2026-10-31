
export type SectionKey =
  | "intro"
  | "offerings"
  | "gallery"
  | "testimonials"
  | "visit";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail?: string;
};

export type Offering = {
  name: string;
  description: string;
  price: string;
};

export type CustomerConfig = {
  slug: string;
  faviconUrl: string;
  name: string;
  category: string;
  location: string;
  tagline: string;
  heroTitle: string;
  heroEmphasis: string;
  heroDescription: string;
  heroImage: string;
  aboutTitle: string;
  aboutEmphasis: string;
  aboutDescription: string;
  offeringsTitle: string;
  offeringsEmphasis: string;
  offeringsLabel: string;
  offerings: Offering[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  hours: { days: string; time: string }[];
    theme: {
    background: string;
    surface: string;
    surfaceText: string; // Add this line
    text: string;
    muted: string;
    primary: string;
    primaryText: string;
    border: string;
    };
  sections: SectionKey[];
  gallery?: GalleryImage[];
  testimonials?: Testimonial[];
};

export const customers: Record<string, CustomerConfig> = {
  rook: {
    slug: "barber",
    faviconUrl: "/favicons/rook.svg",
    name: "ROOK.",
    category: "BARBERSHOP",
    location: "GÖTEBORG",
    tagline: "Grooming, refined.",
    heroTitle: "Good hair.",
    heroEmphasis: "No shortcuts.",
    heroDescription:
      "Thoughtful cuts, precise fades and a little time for yourself. Your neighbourhood barbershop, done differently.",
    heroImage:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=85",
    aboutTitle: "It's not just a haircut.",
    aboutEmphasis: "It's how you carry yourself.",
    aboutDescription:
      "No rush, no guesswork. Just good conversation, attention to detail and a cut that feels like you.",
    offeringsTitle: "Made for",
    offeringsEmphasis: "you.",
    offeringsLabel: "THE MENU",
    offerings: [
      {
        name: "Classic haircut",
        description: "A clean, timeless cut tailored to you.",
        price: "350 kr",
      },
      {
        name: "Skin fade",
        description: "A precise fade with a sharp finish.",
        price: "400 kr",
      },
      {
        name: "Haircut & beard",
        description: "A complete, carefully detailed look.",
        price: "500 kr",
      },
    ],
    contact: {
      email: "hello@example.com",
      phone: "+46 70 000 0000",
      address: "Example Street 12, Göteborg",
    },
    hours: [
      { days: "Mon–Fri", time: "10:00–18:00" },
      { days: "Saturday", time: "10:00–15:00" },
      { days: "Sunday", time: "Closed" },
    ],
    theme: {
    background: "#191b18",
    surface: "#e9e5da",
    surfaceText: "#292c25",
    text: "#f3f0e8",
    muted: "#b8b9b0",
    primary: "#c4d2a5",
    primaryText: "#24291f",
    border: "#ffffff25",
    },
    sections: ["intro", "offerings", "visit", "gallery", "testimonials"],
        
    gallery: [
    {
        src: "/images/barber-interior.png",
        alt: "Interior of the barbershop",
    },
    {
        src: "/images/barber-chair.png",
        alt: "Barber chair and workstation",
    },
    {
        src: "/images/barber-work.png",
        alt: "A finished haircut",
    },
    ],
    testimonials: [
    {
        quote:
        "Exactly the kind of haircut I wanted. Clean details, great finish, and no unnecessary fuss.",
        name: "Demo customer 01",
        detail: "Fictional review · Design preview",
    },
    {
        quote:
        "A relaxed experience from start to finish. The attention to detail makes all the difference.",
        name: "Demo customer 02",
        detail: "Fictional review · Design preview",
    },
    {
        quote:
        "Sharp cut, thoughtful service, and a style that actually works for me.",
        name: "Demo customer 03",
        detail: "Fictional review · Design preview",
    },
    ],
  },

  linden: {
    slug: "restaurant",
    faviconUrl: "/favicons/linden.svg",
    name: "LINDEN",
    category: "KITCHEN & COCKTAILS",
    location: "GÖTEBORG",
    tagline: "Good food, good company.",
    heroTitle: "Gather around.",
    heroEmphasis: "Stay awhile.",
    heroDescription:
      "Seasonal ingredients, thoughtful cooking and a table worth lingering around. Welcome to Linden.",
    heroImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
    aboutTitle: "Seasonal by nature.",
    aboutEmphasis: "Made to be shared.",
    aboutDescription:
      "We believe the best meals happen when good ingredients meet an open table, a relaxed atmosphere and people you love.",
    offeringsTitle: "From our",
    offeringsEmphasis: "kitchen.",
    offeringsLabel: "A TASTE OF LINDEN",
    offerings: [
      {
        name: "Roasted seasonal vegetables",
        description: "Market vegetables, herbs and whipped feta.",
        price: "145 kr",
      },
      {
        name: "Today's catch",
        description: "Fresh fish, brown butter and seasonal greens.",
        price: "225 kr",
      },
      {
        name: "Chocolate tart",
        description: "Dark chocolate, crème fraîche and sea salt.",
        price: "95 kr",
      },
    ],
    contact: {
      email: "hello@linden.example",
      phone: "+46 31 000 000",
      address: "Example Square 4, Göteborg",
    },
    hours: [
      { days: "Mon–Thu", time: "11:00–21:00" },
      { days: "Fri–Sat", time: "11:00–23:00" },
      { days: "Sunday", time: "12:00–17:00" },
    ],  
    theme: {
    background: "#f5f1e8",
    surface: "#e9e1d3",
    surfaceText: "#292c25",
    text: "#292c25",
    muted: "#706e63",
    primary: "#92543e",
    primaryText: "#ffffff",
    border: "#292c2526",
    },
    sections: ["intro", "offerings", "visit"],
  },

  stillform: {
    slug: "studio",
    faviconUrl: "/favicons/stillform.svg",
    name: "STILLFORM",
    category: "STRENGTH & CONDITIONING",
    location: "GÖTEBORG",
    tagline: "Built through consistency.",
    heroTitle: "Stronger",
    heroEmphasis: "every day.",
    heroDescription:
        "Purposeful training, expert coaching and a space built to help you progress. From strength fundamentals to challenging sessions, every workout has a reason.",

    heroImage:
        "https://images.unsplash.com/photo-1778828450059-f39d5bbb01af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

    aboutTitle: "Train with",
    aboutEmphasis: "purpose.",
    aboutDescription:
        "STILLFORM brings together thoughtful programming, quality equipment and focused coaching. Whether you're building your foundations or pushing toward new goals, train at your own pace and make every session count.",

    offeringsTitle: "Find your",
    offeringsEmphasis: "strength.",
    offeringsLabel: "TRAINING",

    offerings: [
        {
        name: "Strength Training",
        description:
            "Build strength and confidence with structured, progressive training.",
        price: "180 kr",
        },
        {
        name: "Small Group Training",
        description:
            "Coach-led sessions that combine focused programming with group energy.",
        price: "250 kr",
        },
        {
        name: "Personal Training",
        description:
            "Individual coaching tailored to your experience, technique and goals.",
        price: "650 kr",
        },
    ],

    contact: {
        email: "hello@stillform.example",
        phone: "+46 31 000 000",
        address: "Example Street 8, Göteborg",
    },

    hours: [
        { days: "Mon–Fri", time: "06:00–21:00" },
        { days: "Saturday", time: "08:00–17:00" },
        { days: "Sunday", time: "09:00–15:00" },
    ],

    theme: {
        background: "#17191b",
        surface: "#e9e7e1",
        surfaceText: "#202326",
        text: "#f3f1eb",
        muted: "#a7adb0",
        primary: "#a8bac4",
        primaryText: "#17191b",
        border: "#ffffff20",
    },

    sections: ["intro", "offerings", "visit"],
  },

  
  gaetanos_demo: {
    slug: "gaetanos",
    faviconUrl: "/favicons/gaetanos.svg",

    name: "GAETANOS",
    category: "PIZZERIA ITALIANA",
    location: "LINNÉ, GÖTEBORG",
    tagline: "Linnés lilla Italien · Sveagatan 16",

    heroTitle: "Pizzan är papperstunn.",
    heroEmphasis: "Personligheten är stor.",
    heroDescription:
      "På Sveagatan 16 i Linné serverar Gaetano pizzor med " +
      "riktigt tunn, frasig botten och italienska smakkombinationer. " +
      "Prova Pizza Italia med kryddig salami och ansjovis, husets " +
      "egen Gaetanos med pancetta och Gorgonzola – och spara plats " +
      "för tiramisu med hemliga ingredienser. " +
      "9,8/10 på TheFork, baserat på 258 gästomdömen.",

    heroImage:
      "https://cdn.thefork.com/tf-lab/image/upload/w_1080%2Cc_fill%2Cq_auto%2Cf_auto/restaurant/5b33f763-cd99-4234-a5fb-f8c9f7cf5a81/e7b15304-7f86-4d81-9dc7-fee858619978.jpg",

    aboutTitle: "Välkommen till",
    aboutEmphasis: "Gaetanos bord.",

    aboutDescription:
      "En liten, familjeägd restaurang i Linné med en tydlig " +
      "passion för italiensk pizza. Här handlar det om den tunna, " +
      "frasiga bottnen, klassiska italienska ingredienser och " +
      "ett personligt bemötande. Börja gärna med något litet, " +
      "hitta din favorit bland pizzorna och avsluta med husets " +
      "tiramisu – receptet på de hemliga ingredienserna behåller vi för oss själva. " +
      "När vädret tillåter finns även uteservering längs Sveagatan.",

    offeringsTitle: "Välkända favoriter.",
    offeringsEmphasis: "Gaetanos stil.",
    offeringsLabel: "DAL MENÙ · MENYN",

    offerings: [
      {
        name: "Pizza Italia",
        description:
          "Tomatsås, mozzarella, kryddig salami, ansjovis, " +
          "parmesan, vitlök och oregano.",
        price: "199 kr",
      },
      {
        name: "Pizza Gaetanos",
        description:
          "Tomatsås, mozzarella, pancetta, Gorgonzola, " +
          "oliver, vitlök och oregano.",
        price: "199 kr",
      },
      {
        name: "Diavola",
        description:
          "Tomatsås, mozzarella, kryddig salami, oregano och chili. " +
          "För dig som gillar lite mer hetta.",
        price: "189 kr",
      },
      {
        name: "Napoli",
        description:
          "Tomatsås, mozzarella, buffelost, körsbärstomater, " +
          "ruccola och oregano.",
        price: "189 kr",
      },
      {
        name: "Pesto",
        description:
          "Pesto, körsbärstomater, oliver, vitlök, parmesan, " +
          "ruccola och oregano.",
        price: "179 kr",
      },
      {
        name: "Noce e Miele",
        description:
          "Mozzarella, Gorgonzola, buffelost, valnötter, " +
          "honung och oregano. En kombination av sälta och sötma.",
        price: "209 kr",
      },
      {
        name: "Bruschetta",
        description:
          "Rostat bröd med hemmagjord bruschetta. " +
          "En klassisk start på middagen.",
        price: "79 kr",
      },
      {
        name: "Insalata Gaetanos",
        description:
          "Romansallad, lök, Gorgonzola, valnötter, " +
          "Parmigiano Reggiano och balsamico.",
        price: "89 kr",
      },
      {
        name: "Homemade Tiramisu",
        description:
          "Husets hemlagade tiramisu. En italiensk klassiker " +
          "med hemliga ingredienser och en fin avslutning på måltiden.",
        price: "79 kr",
      },
    ],

    contact: {
      email: "",
      phone: "+46 70 567 45 09",
      address: "Sveagatan 16, 413 14 Göteborg",
    },

    hours: [
      { days: "Måndag–Lördag", time: "17:00–22:00" },
      { days: "Söndag", time: "12:00–22:00" },
    ],

    theme: {
      background: "#191A17",
      surface: "#F1E9DB",
      surfaceText: "#282820",
      text: "#F6F0E6",
      muted: "#BDB6A7",
      primary: "#C65B40",
      primaryText: "#FFFFFF",
      border: "#FFFFFF24",
    },

    sections: [
      "intro",
      "offerings",
      "gallery",
      "testimonials",
      "visit",
    ],

    gallery: [
      {
        src:
          "https://cdn.thefork.com/tf-lab/image/upload/w_640%2Cc_fill%2Cq_auto%2Cf_auto/customer/5b33f763-cd99-4234-a5fb-f8c9f7cf5a81/09680791-434b-4eac-a93c-1683ac99cc83.jpg",
        alt: "Pizzor serverade vid bordet hos Gaetanos Pizza Italiana",
      },
      {
        src:
          "https://cdn.thefork.com/tf-lab/image/upload/w_500%2Ch_500%2Cc_fill%2Cq_auto%2Cf_jpg/restaurant/5b33f763-cd99-4234-a5fb-f8c9f7cf5a81/fec81705-cbc6-4ce8-903e-c0f71004455c.jpg",
        alt: "Den intima restaurangmiljön hos Gaetanos",
      },
      {
        src:
          "https://cdn.thefork.com/tf-lab/image/upload/restaurant/5b33f763-cd99-4234-a5fb-f8c9f7cf5a81/128b60ad-1ff6-4d74-b631-fc324a45c2c6.jpg",
        alt: "Pizza med italienska råvaror, skinka och ruccola",
      },
    ],

    testimonials: [
      {
        quote: "Grym personal och jätte goda pizzor 👍🏽👌🏼",
        name: "Sandra M.",
        detail: "TheFork · Gästomdöme · 10/10",
      },
      {
        quote: "Mysigt och kändes genuint Italienskt.",
        name: "Ulf L.",
        detail: "TheFork · Gästomdöme · 9,5/10",
      },
      {
        quote:
          "Liten trevlig restaurang, hit kommer jag att gå fler gånger.",
        name: "Catarina J.",
        detail: "TheFork · Gästomdöme · 10/10",
      },
    ],
  },


kortedala_demo: {
  slug: "kortedala",
  faviconUrl: "/favicons/kortedala.svg",

  name: "KORTEDALA",
  category: "LÅS & SKOMAKERI",
  location: "KORTEDALA TORG · GÖTEBORG",
  tagline: "Omsorg om det du redan har.",

  heroTitle: "Det mesta går",
  heroEmphasis: "att laga.",
  heroDescription:
    "Favoritskorna som behöver lite omsorg. En extra nyckel till hemmet. " +
    "Eller en klocka som stannat. På Kortedala Torg hittar du " +
    "Kortedala Lås & Skomakeri – en lokal verkstad för vardagens " +
    "reparationer och praktiska ärenden.",

  // Published on the official Kortedala Torg business listing.
  heroImage:
    "https://www.kortedalatorg.se/wp-content/uploads/2025/01/Skomakare.png",

  aboutTitle: "Ett hantverk värt",
  aboutEmphasis: "att bevara.",

  aboutDescription:
    "Alla saker behöver inte ersättas när de börjar bli slitna. " +
    "Med hjälp av en erfaren skomakare får skor en ny chans, " +
    "samtidigt som du kan ordna nyckelkopiering och batteribyte " +
    "av klockor på samma ställe. " +
    "Här på Kortedala Torg samlas flera användbara tjänster " +
    "under ett och samma tak. Enkelt, personligt och nära till hands.",

  offeringsTitle: "Från små fix",
  offeringsEmphasis: "till stora skillnader.",
  offeringsLabel: "DET HÄR HJÄLPER VI DIG MED",

  offerings: [
    {
      name: "Skoreparation",
      description:
        "Ge dina favoritskor längre liv. Vi hjälper till med " +
        "skoreparationer och olika typer av lagningar.",
      price: "Pris på förfrågan",
    },
    {
      name: "Snabbklackning",
      description:
        "Slitna klackar? Vi erbjuder snabbklackning så att " +
        "du kan fortsätta använda skorna du tycker om.",
      price: "Pris på förfrågan",
    },
    {
      name: "Nyckelkopiering",
      description:
        "Behöver du en extra nyckel? Vi hjälper dig med " +
        "nyckelkopiering direkt i butiken.",
      price: "Pris på förfrågan",
    },
    {
      name: "Batteribyte av klockor",
      description:
        "När klockan stannar hjälper vi dig med batteribyte.",
      price: "Pris på förfrågan",
    },
    {
      name: "Kemtvätt",
      description:
        "Lämna in dina kläder och mattor för kemtvätt. " +
        "En smidig tjänst när textilierna behöver lite extra omsorg.",
      price: "Pris på förfrågan",
    },
  ],

  contact: {
    email: "",
    phone: "+46 31 46 64 95",
    address: "Kortedala Torg 4, 415 36 Göteborg",
  },

  hours: [
    {
      days: "Måndag–Fredag",
      time: "10:00–18:00",
    },
    {
      days: "Lördag",
      time: "10:00–15:00",
    },
    {
      days: "Söndag",
      time: "Stängt",
    },
  ],

  theme: {
    background: "#22231F",
    surface: "#E8E0D2",
    surfaceText: "#302E28",
    text: "#F1EDE4",
    muted: "#B9B4A8",
    primary: "#B58259",
    primaryText: "#211F1B",
    border: "#FFFFFF20",
  },

  sections: [
    "intro",
    "offerings",
    "testimonials",
    "visit",
  ],

  testimonials: [
    {
      quote:
        "En riktig hantverkare.",
      name: "Kundomdöme",
      detail:
        "Publikt kundomdöme · återkommande kund",
    },
    {
      quote:
        "Mycket nöjd.",
      name: "Kundomdöme",
      detail:
        "Publikt kundomdöme · skoreparation",
    },
  ],
},


};
