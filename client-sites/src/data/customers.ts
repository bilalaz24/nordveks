
export type SectionKey = "intro" | "offerings" | "visit";

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
    text: string;
    muted: string;
    primary: string;
    primaryText: string;
    border: string;
  };
  sections: SectionKey[];
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
      background: "#171a17",
      surface: "#e9e6dc",
      text: "#f5f1e9",
      muted: "#b7b9b1",
      primary: "#c9e0a5",
      primaryText: "#20251e",
      border: "#ffffff25",
    },
    sections: ["intro", "offerings", "visit"],
  },

  restaurant: {
    slug: "restaurant",
    name: "LINDEN",
    category: "KITCHEN & WINE",
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
      background: "#f5f0e7",
      surface: "#e6ddcc",
      text: "#292d24",
      muted: "#6f7065",
      primary: "#8b4b35",
      primaryText: "#ffffff",
      border: "#292d2426",
    },
    sections: ["intro", "offerings", "visit"],
  },
};
