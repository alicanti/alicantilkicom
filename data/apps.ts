export interface App {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  tags: string[];
  highlights: string[];
  description?: string;
  techStack?: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export const apps: App[] = [
  {
    slug: "instantpose",
    name: "InstantPose",
    tagline: "AI-powered pose generation with face preservation.",
    summary: "Generate professional poses from a single selfie while keeping identity intact.",
    tags: ["Mobile", "AI", "Image", "Flutter", "revenuecat"],
    highlights: [
      "25+ professional pose templates and multi-pose packs",
      "Strict identity-preserving prompt guardrails",
      "Flutter app; subscriptions via Revenuecat"
    ],
    description: `InstantPose is a mobile application that transforms a single selfie into professional poses while preserving the user's identity. Built with Flutter and powered by advanced AI models, it offers a seamless experience for users who want professional-looking photos without a photoshoot.

The app features over 25 professionally designed pose templates, organized into themed packs. Each generation uses strict prompt guardrails to ensure the output maintains facial identity while adapting the pose, lighting, and background.

The monetization strategy uses Revenuecat for subscription management, offering both individual pose purchases and unlimited monthly subscriptions. The infrastructure handles high-volume image processing with optimized queuing and caching strategies.`,
    techStack: [
      "Flutter",
      "Dart",
      "AI Image Generation APIs",
      "Revenuecat",
      "Firebase",
      "Cloud Storage"
    ],
    links: [
      {
        label: "App Store",
        url: "#"
      },
      {
        label: "Google Play",
        url: "#"
      }
    ]
  }
];

