
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
  barber: {
    slug: "barber",
    name: "FORM.",
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

  restaurant: {
    slug: "restaurant",
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

    studio: {
    slug: "studio",
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

};
