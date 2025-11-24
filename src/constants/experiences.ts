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
            "Developed an Attendance Management System for over 120 internship students using React, Express.js, and MySQL, designed to efficiently track attendance and ensure compliance by preventing students from marking attendance outside the designated location",
            "Developed an Android application for households to calculate electrical usage and provide estimated electricity costs, using Jetpack Compose and Room, helping users monitor consumption and manage energy expenses effectively",
            "Developed an Online Learning Platform that enable students to access courses in bootcamp-style training programs using Laravel and React",
            "Maintained servers and deployed applications using Docker, ensuring reliable performance, simplified deployment, and scalability across environments"
        ]
    },
    {
        title: "Database Administrator",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2024",
        end: "Present",
        descriptions: [
            "Oversee, maintain, and publish laboratory scores for over 30,000 students each semester across all six BINUS campuses",
            "Revamped a 10-year-old legacy ASP.NET MVC application into a modern .NET Core and React solution using TanStack Query",
            "Manage appendix schedules for student laboratory quizzes and exams across all BINUS campuses",
            "Generate analytical yudisium reports for over 30,000 students each semester to evaluate academic performance and identify areas for improvement in laboratory operations",
            "Provide validated data to support the processing of honorariums for over 100 laboratory assistants each semester involved in case creation and grading activities",
            "Managed and optimized over 15 SQL Server Agent jobs to automate key database operations and ensure reliable, scheduled data processes across academic systems",
            "Implement and refine database indexing strategies and materialized views to improve query performance and data retrieval efficiency for large-scale academic datasets",
            "Design, optimize, and maintain SQL queries and stored procedures to efficiently fulfill internal and external data requests, improving data retrieval speed and reliability across academic systems"
        ]
    },
    {
        title: "Teaching Assistant",
        company: "PT Bank Central Asia Tbk (BCA)",
        location: "Bogor, West Java, Indonesia",
        start: "January 2024",
        end: "May 2024",
        descriptions: [
            "Teached scientific computing to PPTI 17, PPTI 18, and PPTI 19",
            "Supported practical sessions by reviewing code, clarifying concepts, and providing debugging assistance",
            "Helped design and evaluate exercises to reinforce understanding of scientific computing principles",
            "Collaborated with instructors to ensure effective learning outcomes and student engagement"
        ]
    },
    {
        title: "Laboratory Assistant",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2023",
        end: "August 2024",
        descriptions: [
            "Teached over 20 classes and guided over 600 students across different subjects",
            "Designed and graded over 500 submissions to ensure fair and consistent assessments",
            "Served as Subject Coordinator for Database Topic during New Assistant Recruitment program",
            "Participated in the TPA (Test Progressive Assistant): Game Programming, Business Analysis and Desktop Application Development, Web Design and Programming, Networking, and Mobile Application Development",
            "Selected as the Case Maker for the TPA Web Design and Programming for 24-2 generation"
        ]
    }
];
