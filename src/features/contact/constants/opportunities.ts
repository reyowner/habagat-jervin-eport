export const OPPORTUNITIES = ["Freelance", "Full-Time", "Collaboration", "Other"] as const;

export type OpportunityType = (typeof OPPORTUNITIES)[number];
