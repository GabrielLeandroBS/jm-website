export const METHOD_STEPS = ["observe", "plan", "execute", "close"] as const;

export const SAFETY_KEYS = [
	"training",
	"equipment",
	"protocols",
	"insurance",
] as const;

export const HOME_FACT_KEYS = [
	"since",
	"domains",
	"coverage",
	"campaigns",
] as const;

export const PROOF_DELIVERABLE_KEYS = [
	"report",
	"photos",
	"log",
	"label",
] as const;

export const STORY_PARAGRAPH_KEYS = [
	"first",
	"second",
	"third",
	"fourth",
] as const;

export const CHAPTER_KEYS = [
	"house",
	"referral",
	"factory",
	"standard",
	"today",
] as const;

export const RULE_KEYS = [
	"facts",
	"discretion",
	"calm",
	"detail",
	"appointment",
] as const;

export const VALUE_KEYS = [
	"precision",
	"discretion",
	"proof",
	"continuity",
] as const;

export const TEAM_ROLE_KEYS = [
	"operations",
	"industry",
	"homes",
	"quality",
] as const;

export const TEAM_PRINCIPLE_KEYS = ["trust", "training", "stability"] as const;

export const CAREER_WHY_KEYS = ["stable", "training", "respect"] as const;

export const CAREER_PROFILE_KEYS = [
	"care",
	"punctuality",
	"discretion",
	"license",
] as const;

export const CAREER_PROCESS_KEYS = ["send", "talk", "shadow"] as const;

export const FAQ_GROUPS = {
	general: ["coverage", "spaces", "sameTeam"],
	booking: ["price", "visit", "lead"],
	industry: ["downtime", "polishing", "report"],
	safety: ["insurance", "keys", "products"],
} as const;

export const LEGAL_SECTIONS = {
	privacy: ["controller", "data", "purpose", "retention", "sharing", "rights"],
	cookies: ["what", "used", "analytics", "control"],
	terms: ["use", "ip", "complaints", "disputes", "law"],
} as const;

export const LEGAL_UPDATED_AT = "18 de novembro de 2026";

export const FAQ_ITEM_PATHS = [
	"general.items.coverage",
	"general.items.spaces",
	"general.items.sameTeam",
	"booking.items.price",
	"booking.items.visit",
	"booking.items.lead",
	"industry.items.downtime",
	"industry.items.polishing",
	"industry.items.report",
	"safety.items.insurance",
	"safety.items.keys",
	"safety.items.products",
] as const;

export const CONTACT_SPACE_KEYS = [
	"house",
	"office",
	"store",
	"construction",
	"factory",
	"moving",
] as const;
