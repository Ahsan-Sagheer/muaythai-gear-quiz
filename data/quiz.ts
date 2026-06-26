export interface QuizAnswer {
  experience: "beginner" | "intermediate" | "advanced";
  weight: "under130" | "130-160" | "160-185" | "185plus";
  weakWrists: boolean;
  trainingFocus: "bag-work" | "sparring" | "pad-work" | "competition" | "all-around";
  glovePadding: "thick" | "feel";
  gloveClosure: "hook-and-loop" | "lace-up";
  sweatyHands: boolean;
  buyingKit: "full" | "gap";
  needShinGuards: boolean;
  shinAnkleCoverage: boolean;
  shinKneeCoverage: boolean;
  shinType: "slip-on" | "strap-on";
  needThaiPads: boolean;
  padMaterial: "leather" | "synthetic";
  padShape: "curved" | "flat";
  holderExperience: "beginner" | "experienced";
  holderHandSize: "small" | "normal";
  needHandWraps: boolean;
  needShorts: boolean;
  glovesBudget: "under60" | "60-120" | "120plus";
  shinBudget: "under40" | "40-80" | "80plus";
}

export interface QuizStep {
  id: string;
  section: string;
  question: string;
  type: "single" | "boolean";
  options?: { value: string; label: string; description?: string }[];
  dependsOn?: { field: keyof QuizAnswer; value: unknown };
}

export const quizSteps: QuizStep[] = [
  {
    id: "buyingKit",
    section: "Getting Started",
    question: "Are you buying a full kit or filling a gap?",
    type: "single",
    options: [
      { value: "full", label: "Full Kit", description: "I need everything" },
      { value: "gap", label: "Filling a Gap", description: "I already have some gear" },
    ],
  },
  {
    id: "experience",
    section: "About You",
    question: "What's your experience level?",
    type: "single",
    options: [
      { value: "beginner", label: "Beginner", description: "Less than 1 year" },
      { value: "intermediate", label: "Intermediate", description: "1-3 years" },
      { value: "advanced", label: "Advanced", description: "3+ years or competing" },
    ],
  },
  {
    id: "weight",
    section: "About You",
    question: "What's your weight class?",
    type: "single",
    options: [
      { value: "under130", label: "Under 130 lbs" },
      { value: "130-160", label: "130–160 lbs" },
      { value: "160-185", label: "160–185 lbs" },
      { value: "185plus", label: "185+ lbs" },
    ],
  },
  {
    id: "trainingFocus",
    section: "About You",
    question: "What's your primary training focus?",
    type: "single",
    options: [
      { value: "bag-work", label: "Bag Work", description: "Heavy bag, pads at home" },
      { value: "sparring", label: "Sparring", description: "Live partner training" },
      { value: "pad-work", label: "Pad Work", description: "Mitts and Thai pads with a trainer" },
      { value: "all-around", label: "All-Around", description: "A bit of everything" },
    ],
  },
  {
    id: "weakWrists",
    section: "Gloves",
    question: "Do you have weak wrists or prior wrist injuries?",
    type: "boolean",
  },
  {
    id: "sweatyHands",
    section: "Gloves",
    question: "Do your hands get very sweaty during training?",
    type: "boolean",
  },
  {
    id: "glovePadding",
    section: "Gloves",
    question: "Do you prefer more protection or more feel/feedback?",
    type: "single",
    options: [
      { value: "thick", label: "More Protection", description: "Thicker padding — safer for sparring and weak wrists" },
      { value: "feel", label: "More Feel", description: "Thinner padding — better feedback on techniques" },
    ],
  },
  {
    id: "gloveClosure",
    section: "Gloves",
    question: "Velcro (hook & loop) or lace-up closure?",
    type: "single",
    options: [
      { value: "hook-and-loop", label: "Velcro", description: "Easy on/off — recommended for most" },
      { value: "lace-up", label: "Lace-Up", description: "Tighter fit — better for competition" },
    ],
  },
  {
    id: "glovesBudget",
    section: "Gloves",
    question: "What's your gloves budget?",
    type: "single",
    options: [
      { value: "under60", label: "Under $60" },
      { value: "60-120", label: "$60–$120" },
      { value: "120plus", label: "$120+" },
    ],
  },
  {
    id: "needShinGuards",
    section: "Shin Guards",
    question: "Do you need shin guards?",
    type: "boolean",
  },
  {
    id: "shinAnkleCoverage",
    section: "Shin Guards",
    question: "Do you need extra ankle coverage/protection?",
    type: "boolean",
    dependsOn: { field: "needShinGuards", value: true },
  },
  {
    id: "shinKneeCoverage",
    section: "Shin Guards",
    question: "Do you need knee coverage?",
    type: "boolean",
    dependsOn: { field: "needShinGuards", value: true },
  },
  {
    id: "shinType",
    section: "Shin Guards",
    question: "Slip-on or strap-on shin guards?",
    type: "single",
    dependsOn: { field: "needShinGuards", value: true },
    options: [
      { value: "slip-on", label: "Slip-On", description: "Faster to put on, easier to adjust mid-session" },
      { value: "strap-on", label: "Strap-On", description: "More secure during heavy sparring" },
    ],
  },
  {
    id: "shinBudget",
    section: "Shin Guards",
    question: "What's your shin guards budget?",
    type: "single",
    dependsOn: { field: "needShinGuards", value: true },
    options: [
      { value: "under40", label: "Under $40" },
      { value: "40-80", label: "$40–$80" },
      { value: "80plus", label: "$80+" },
    ],
  },
  {
    id: "needThaiPads",
    section: "Thai Pads",
    question: "Do you need Thai pads? (For trainers or those training with a partner)",
    type: "boolean",
  },
  {
    id: "padMaterial",
    section: "Thai Pads",
    question: "Leather or synthetic Thai pads?",
    type: "single",
    dependsOn: { field: "needThaiPads", value: true },
    options: [
      { value: "leather", label: "Leather", description: "More durable, better feel — lasts years" },
      { value: "synthetic", label: "Synthetic", description: "Lighter, more affordable" },
    ],
  },
  {
    id: "padShape",
    section: "Thai Pads",
    question: "Curved or flat Thai pads?",
    type: "single",
    dependsOn: { field: "needThaiPads", value: true },
    options: [
      { value: "curved", label: "Curved", description: "Easier to catch kicks — recommended for most" },
      { value: "flat", label: "Flat", description: "Traditional style — preferred by experienced holders" },
    ],
  },
  {
    id: "holderExperience",
    section: "Thai Pads",
    question: "How experienced is the person holding the pads?",
    type: "single",
    dependsOn: { field: "needThaiPads", value: true },
    options: [
      { value: "beginner", label: "Beginner Holder", description: "New to holding pads" },
      { value: "experienced", label: "Experienced Holder", description: "Comfortable catching hard kicks" },
    ],
  },
  {
    id: "holderHandSize",
    section: "Thai Pads",
    question: "What's the holder's hand/arm size?",
    type: "single",
    dependsOn: { field: "needThaiPads", value: true },
    options: [
      { value: "small", label: "Smaller / Lighter Build", description: "Compact pads may be easier to manage" },
      { value: "normal", label: "Average or Larger Build" },
    ],
  },
  {
    id: "needHandWraps",
    section: "Extras",
    question: "Do you need hand wraps?",
    type: "boolean",
  },
  {
    id: "needShorts",
    section: "Extras",
    question: "Do you need Muay Thai shorts?",
    type: "boolean",
  },
];
