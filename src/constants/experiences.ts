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
            "Developed an Attendance Management System for over 120 internship students using React, Express, and MySQL, designed to efficiently track attendance and ensure compliance by preventing students from marking attendance outside the designated location.",
            "Developed an Android application for households to calculate electrical usage and provide estimated electricity costs, using Jetpack Compose and Room, helping users monitor consumption and manage energy expenses effectively.",
            "Developed an Online Learning Platform that enable students to access courses in bootcamp-style training programs using React, Laravel, and MySQL.",
        ]
    },
    {
        title: "Database Administrator",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2024",
        end: "Present",
        descriptions: [
            "Oversee, maintain, and publish laboratory scores for over 30,000 students each semester across all six BINUS campuses (Kemanggisan, Alam Sutera, Bekasi, Semarang, Bandung, and Malang) to ensure data accuracy, consistency, and timely integration with BINUSMAYA, the university’s internal academic system.",
            "Revamped a 10-year-old legacy ASP.NET MVC application into a modern .NET Core and React solution using TanStack Query, enabling other divisions to access laboratory data, perform component mapping, and manage session rules for specific courses.",
            "Manage appendix schedules for student laboratory quizzes and exams across all six BINUS campuses, including coordinating with campus operation teams, ensuring timely updates, tracking changes, and resolving scheduling conflicts.",
            "Generate analytical yudisium reports for over 30,000 students each semester to evaluate academic performance, ensure graduation eligibility accuracy, and identify areas for improvement in laboratory operations.",
            "Provide validated data to support the processing of honorariums for over 100 laboratory assistants each semester involved in case creation and grading activities.",
            "Managed and optimized over 15 SQL Server Agent jobs to automate key database operations and ensure reliable, scheduled data processes across academic systems.",
            "Implement and refine database indexing strategies and materialized views to improve query performance and data retrieval efficiency for large-scale academic datasets.",
            "Design, optimize, and maintain SQL queries and stored procedures to efficiently fulfill internal and external data requests, improving data retrieval speed and reliability across academic systems.",
        ]
    },
    {
        title: "Teaching Assistant",
        company: "PT Bank Central Asia Tbk (BCA)",
        location: "Bogor, West Java, Indonesia",
        start: "January 2024",
        end: "May 2024",
        descriptions: [
            "Assisted in teaching Python programming and numerical computation using NumPy, SciPy, and Matplotlib.",
            "Guided students in implementing various numerical methods, including equation solving, interpolation, regression, and integration.",
            "Supported practical sessions by reviewing code, clarifying concepts, and providing debugging assistance.",
            "Helped design and evaluate exercises to reinforce understanding of scientific computing principles.",
            "Collaborated with instructors to ensure effective learning outcomes and student engagement.",
        ]
    },
    {
        title: "Laboratory Assistant",
        company: "BINUS University",
        location: "West Jakarta, Jakarta, Indonesia",
        start: "August 2023",
        end: "August 2024",
        descriptions: [
            "Taught 20+ classes and guided 600+ students.",
            "Delivered courses in Algorithm and Programming, Business Application Development, Database Systems, Computer Networks, Human and Computer Interaction, Scientific Computing, Database Technology, and Computer Vision.",
            "Created 6 practicum exam cases.",
            "Graded 500+ practicum submissions.",
            "Served as Subject Coordinator for Database during New Assistant Recruitment, overseeing case creation and quality, and coordinating teaching and evaluation task distribution.",
            "Completed TPA modules in Game Programming (Unity, C#).",
            "Completed TPA modules in Business Analysis & Desktop Apps (Visual Paradigm, Electron, React, Bootstrap, Firebase Firestore).",
            "Completed TPA modules in Web Development (React, TypeScript, Go, PostgreSQL, Styled Components, Firebase Cloud Storage).",
            "Completed TPA modules in Networking (Rocky Linux, Proxmox, Nginx, Docker, Ansible, Grafana, Mikrotik, Windows Server, Cisco Packet Tracer).",
            "Completed TPA modules in Mobile Development (Kotlin, Android Studio, Firebase Realtime Database).",
            "Selected as Case Maker for TPA Web Design & Programming 24-2 generation.",
        ]
    }
];
