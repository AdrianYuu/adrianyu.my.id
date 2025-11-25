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
        title: "Software Engineer",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "February 2025",
        end: "Present",
        descriptions: [
            "Built an Attendance Management System for 120+ internship students using React, Express.js, and MySQL, including location-based attendance validation.",
            "Developed an Android app using Jetpack Compose and Room to calculate household electrical usage and estimate monthly electricity costs.",
            "Created an Online Learning Platform with Laravel and React to support bootcamp-style training and course access.",
            "Maintained servers and deployed applications using Docker for reliable, scalable, and consistent environments.",
            "Supported internal operations by designing and maintaining applications that improve efficiency and streamline workflows."
        ]
    },
    {
        title: "Database Administrator",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2024",
        end: "Present",
        descriptions: [
            "Design, optimize, and maintain SQL queries and stored procedures to efficiently fulfill internal and external data requests, improving data retrieval speed and reliability across academic systems.",
            "Modernized a decade-old ASP.NET MVC system into a .NET Core + React solution, improving data access, component mapping, and session rule management for multiple divisions.",
            "Coordinated appendix schedules for quizzes and exams across all six campuses, ensuring timely updates, resolving conflicts, and maintaining operational alignment.",
            "Generated analytical yudisium reports and provided validated data to support graduation evaluations and assistant honorarium processing for 100+ lab assistants.",
            "Optimized database operations by managing 15+ SQL Server Agent jobs, improving performance through indexing/materialized views, and developing efficient SQL queries and stored procedures."
        ]
    },
    {
        title: "Teaching Assistant",
        company: "PT Bank Central Asia Tbk (BCA)",
        location: "Bogor, West Java, Indonesia",
        start: "January 2024",
        end: "May 2024",
        descriptions: [
            "Assisted in teaching Scientific Computing with Python for PPTI 17, 18, and 19.",
            "Taught numerical computation using NumPy, SciPy, and Matplotlib.",
            "Guided students in implementing numerical methods such as equation solving, interpolation, regression, and integration.",
            "Supported practical sessions through code review, concept clarification, and debugging help.",
            "Contributed to designing and evaluating exercises to enhance student understanding and engagement."
        ]
    },
    {
        title: "Laboratory Assistant",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2023",
        end: "August 2024",
        descriptions: [
            "Taught 20+ classes and mentored 600+ students across programming, databases, networks, HCI, and other computing subjects.",
            "Developed 6 practicum exam cases and graded 500+ submissions with consistent evaluation standards.",
            "Coordinated the Database subject for New Assistant Recruitment, managing case creation, tasks, and candidate performance.",
            "Completed TPA modules covering game dev, web dev, networking, mobile dev, and business app development.",
            "Selected as Case Maker for TPA web dev, designing comprehensive assessment cases."
        ]
    }
];
