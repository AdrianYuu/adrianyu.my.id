export const ProjectType = {
    PROFESSIONAL: "PROFESSIONAL",
    PERSONAL: "PERSONAL",
} as const;

export type ProjectType = typeof ProjectType[keyof typeof ProjectType];