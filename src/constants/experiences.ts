export interface IExperience {
    title: string;
    company: string;
    location: string;
    start: string;
    end: string;
    descriptions: string[];
}

export const EXPERIENCES: IExperience[] = [
    {
        title: "Database Administrator",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2024",
        end: "Present",
        descriptions: [
            "Designed and optimized 50+ complex SQL queries, stored procedures, and views to support application-level data processing and business logic requirements across academic systems.",
            "Built and maintained automated 15+ data processing workflows using SQL Server Agent to ensure reliable, scheduled operations and data consistency across systems.",
            "Improved system performance by implementing advanced indexing strategies and analyzing execution plans, significantly reducing query latency for large-scale datasets.",
            "Modernized a legacy ASP.NET MVC web application by migrating it to .NET Core and React (with TanStack Query), enabling cross-division data access and configurable course management rules.",
            "Managed laboratory academic data for 30,000+ students per semester across six BINUS University campuses, ensuring accurate score publication, schedule coordination, and yudisium (graduation eligibility) reporting.",
        ]
    },
    {
        title: "Application Developer",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "February 2025",
        end: "February 2026",
        descriptions: [
            "Developed a web-based attendance management system supporting 120+ internship students using React, Express, and MySQL, featuring location-based attendance validation and real-time attendance code generation.",
            "Developed an Android electricity usage tracking application using Jetpack Compose and Room, enabling households to monitor power consumption and estimate energy costs.",
            "Developed an online learning platform for bootcamp training using React, Laravel, and MySQL, enabling structured course access and scalable content delivery for final-year students.",
        ]
    },
    {
        title: "Teaching Assistant",
        company: "PT Bank Central Asia Tbk (BCA)",
        location: "Bogor, West Java, Indonesia",
        start: "January 2024",
        end: "May 2024",
        descriptions: [
            "Assisted instruction in Python-based scientific computing using NumPy, SciPy, and Matplotlib.",
            "Guided 80+ students in implementing numerical methods (equation solving, interpolation, regression, integration).",
            "Reviewed code, debugged implementations, and supported practical sessions and exercise evaluation.",
        ]
    },
    {
        title: "Laboratory Assistant",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2023",
        end: "August 2024",
        descriptions: [
            "Instructed 20+ classes and mentored 600+ students across core CS subjects including Algorithms, Databases, Networks, HCI, Computer Vision, and Scientific Computing.",
            "Designed 6 practicum exam cases, graded 500+ submissions, and served as Database Subject Coordinator during New Assistant Recruitment, managing case quality and teaching/evaluation task distribution.",
            "Completed TPA (Test Progressive Assistant) modules covering Web, Mobile, Game, Networking, and Business Applications (React, TypeScript, Go, Kotlin, Unity, Docker, Linux, Firebase, PostgreSQL, etc.).",
        ]
    }
];
