// ============================================
// LION'S FITNESS – Static Content Data
// Swap out any of this content easily
// ============================================

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Expert Programs" },
  { value: 10, suffix: "", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export const WHY_US_FEATURES = [
  {
    icon: "Dumbbell",
    title: "Expert Trainers",
    description:
      "Our certified coaches bring years of competitive and coaching experience to every session.",
  },
  {
    icon: "Zap",
    title: "Modern Equipment",
    description:
      "State-of-the-art machinery and free weights updated regularly for peak performance.",
  },
  {
    icon: "Leaf",
    title: "Rooftop Turf",
    description:
      "Train outdoors on our exclusive rooftop AstroTurf — a unique feature you won't find anywhere else.",
  },
  {
    icon: "Apple",
    title: "Nutrition Support",
    description:
      "In-house nutrition coaching and custom meal plans to fuel your transformation.",
  },
  {
    icon: "Clock",
    title: "Flexible Hours",
    description:
      "Open 7 days a week with extended morning and evening hours to fit your lifestyle.",
  },
  {
    icon: "Users",
    title: "Strong Community",
    description:
      "Join a tribe of motivated individuals who push each other to new heights every day.",
  },
];

export const PROGRAMS = [
  {
    id: "strength",
    title: "Strength & Conditioning",
    level: "All Levels",
    duration: "60 min",
    description:
      "Build functional strength and explosive power with barbell, kettlebell, and bodyweight training.",
    color: "#F5C518",
    bgGradient: "from-yellow-900/30 to-black",
  },
  {
    id: "crossfit",
    title: "CrossFit WOD",
    level: "Intermediate",
    duration: "45 min",
    description:
      "High-intensity functional movements combining gymnastics, weightlifting, and cardio.",
    color: "#FF6B35",
    bgGradient: "from-orange-900/30 to-black",
  },
  {
    id: "yoga",
    title: "Power Yoga",
    level: "Beginner–Advanced",
    duration: "75 min",
    description:
      "Dynamic flows to improve flexibility, mindfulness, and recovery between hard training days.",
    color: "#A78BFA",
    bgGradient: "from-purple-900/30 to-black",
  },
  {
    id: "mma",
    title: "MMA / Combat",
    level: "All Levels",
    duration: "90 min",
    description:
      "Boxing, Muay Thai, and grappling fundamentals for discipline, fitness, and self-defence.",
    color: "#F87171",
    bgGradient: "from-red-900/30 to-black",
  },
  {
    id: "hiit",
    title: "Cardio HIIT",
    level: "All Levels",
    duration: "30 min",
    description:
      "Short, brutal, effective. Max calorie burn in minimum time with structured interval training.",
    color: "#34D399",
    bgGradient: "from-emerald-900/30 to-black",
  },
  {
    id: "personal",
    title: "Personal Training",
    level: "Customized",
    duration: "60 min",
    description:
      "1-on-1 sessions with a dedicated coach crafting a program built specifically around your goals.",
    color: "#F5C518",
    bgGradient: "from-yellow-900/30 to-black",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, category: "gym", alt: "Modern gym floor with equipment" },
  { id: 2, category: "rooftop", alt: "Rooftop turf training area" },
  { id: 3, category: "training", alt: "Group HIIT training session" },
  { id: 4, category: "equipment", alt: "Weight rack and barbells" },
  { id: 5, category: "training", alt: "Personal training session" },
  { id: 6, category: "gym", alt: "Cardio equipment zone" },
  { id: 7, category: "rooftop", alt: "Sunset workout on rooftop" },
  { id: 8, category: "training", alt: "CrossFit class in session" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Software Engineer",
    rating: 5,
    quote:
      "Lion's Fitness completely changed my relationship with fitness. The trainers are world-class, and the rooftop turf sessions are like nothing else in the city.",
    initials: "AM",
    color: "#F5C518",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Entrepreneur",
    rating: 5,
    quote:
      "I've been to gyms across Mumbai, Delhi, and Bangalore — none match the energy and equipment quality here. The community keeps me coming back every day.",
    initials: "PS",
    color: "#A78BFA",
  },
  {
    id: 3,
    name: "Rohan Desai",
    role: "Competitive Athlete",
    rating: 5,
    quote:
      "The MMA and conditioning programs here took my performance to a completely different level. Coach Vikram is an absolute legend.",
    initials: "RD",
    color: "#34D399",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Marketing Manager",
    rating: 5,
    quote:
      "Lost 18kg in 6 months with their nutrition + training plan. The team genuinely cares about your progress, not just your membership fee.",
    initials: "NK",
    color: "#F87171",
  },
  {
    id: 5,
    name: "Siddharth Rao",
    role: "Architect",
    rating: 5,
    quote:
      "The HIIT sessions at 6am on the rooftop turf with city views are an experience. I look forward to my alarm now — that says everything.",
    initials: "SR",
    color: "#34D399",
  },
];

export const FAQS = [
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday to Saturday from 5:30 AM to 10:30 PM, and Sunday from 7:00 AM to 8:00 PM. Public holiday hours may vary.",
  },
  {
    question: "Do you offer trial sessions before membership?",
    answer:
      "Yes! We offer a free 1-day trial pass to new visitors. Come experience the facility, meet our trainers, and try any of our standard classes before committing.",
  },
  {
    question: "What membership plans are available?",
    answer:
      "We offer Monthly, Quarterly, and Annual plans. All plans include access to the gym floor, group classes, and the rooftop turf. Personal training sessions are add-ons available at discounted bundle rates.",
  },
  {
    question: "Is the rooftop turf available to all members?",
    answer:
      "Yes, the rooftop turf is included in all standard membership plans. Specific turf-based group classes may require prior booking through our app.",
  },
  {
    question: "Do you have nutritionists on staff?",
    answer:
      "We have two certified sports nutritionists on staff who offer free monthly consultations to all members, with the option for detailed custom meal planning at an additional fee.",
  },
  {
    question: "What should I bring on my first day?",
    answer:
      "Bring comfortable workout clothes, clean indoor shoes, a water bottle, and a towel. Lockers are available with a refundable deposit. We provide all necessary training equipment.",
  },
];

export const MEMBERSHIP_PLANS = [
  {
    name: "Monthly",
    price: "₹2,499",
    period: "/month",
    features: [
      "Full gym floor access",
      "All group classes",
      "Rooftop turf access",
      "1 nutrition consultation",
      "Locker access",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Quarterly",
    price: "₹5,999",
    period: "/3 months",
    features: [
      "Everything in Monthly",
      "2 personal training sessions",
      "3 nutrition consultations",
      "Progress tracking app",
      "Priority class booking",
    ],
    popular: true,
    cta: "Best Value",
  },
  {
    name: "Annual",
    price: "₹18,999",
    period: "/year",
    features: [
      "Everything in Quarterly",
      "Unlimited PT sessions (1/week)",
      "Custom meal plan",
      "Body composition analysis",
      "Guest passes (4/year)",
    ],
    popular: false,
    cta: "Go All In",
  },
];

export const CONTACT_INFO = {
  address: "Krishna Town, Near Refinery Nagar & CNG Petrol Pump, NH-2, Bad, Mathura, UP 281006",
  phone: "9528395833",
  email: "info@lionsfitness.com",
  hours: "Mon–Sat: 5:00 AM – 10:00 AM & 4:00 PM – 10:00 PM",
  social: {
    instagram: "https://instagram.com/lionsfitness",
    facebook: "https://facebook.com/lionsfitness",
    youtube: "https://youtube.com/lionsfitness",
  },
};
