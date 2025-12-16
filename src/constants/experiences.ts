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
        title: "Application Developer",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "February 2025",
        end: "Present",
        descriptions: [
            "Developed a web-based Attendance Management System supporting 120+ internship students using React, Express, and MySQL, featuring location-based attendance validation and real-time attendance code generation.",
            "Developed an Android electricity usage tracking application using Jetpack Compose and Room, enabling households to monitor power consumption and estimate energy costs.",
            "Developed an online learning platform for bootcamp-style training using React, Laravel, and MySQL, supporting structured course access and content delivery for final-year students.",
        ]
    },
    {
        title: "Database Administrator",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2024",
        end: "Present",
        descriptions: [
            "Managed and published laboratory scores for 30,000+ students per semester across six campuses, ensuring data accuracy and seamless integration with BINUSMAYA, BINUS University’s internal academic system.",
            "Produced yudisium analytics for 30,000+ students per semester and provided data for 100+ assistant honorariums.",
            "Coordinated laboratory quiz and exam appendix schedules across six campuses, resolving conflicts and ensuring on-time execution with operations teams.",
            "Revamped a legacy ASP.NET MVC system into .NET Core + React with TanStack Query, enabling cross-division data access and configurable course rules.",
            "Optimized database operations by managing 15+ SQL Server Agent jobs, improving performance via indexing, materialized views, and query tuning.",
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
            "Reviewed code, debugged implementations, and supported practical sessions and exercise evaluation."
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
