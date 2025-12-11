import {ProjectType} from "./project-type.ts";
import AttendanceManagementLoginPage from "../assets/projects/professional/attendance-management/login-page.webp";
import AttendanceManagementStudentHomePage
    from "../assets/projects/professional/attendance-management/student-home-page.webp";
import AttendanceManagementClassroomHomePage
    from "../assets/projects/professional/attendance-management/classroom-home-page.webp";
import AttendanceManagementAdminHomePage
    from "../assets/projects/professional/attendance-management/admin-home-page.webp";
import ERamenHome from "../assets/projects/personal/eramen/home.webp";
import ERamenProduct from "../assets/projects/personal/eramen/product.webp";
import ERamenPromotion from "../assets/projects/personal/eramen/promotion.webp";
import ERamenAboutUs from "../assets/projects/personal/eramen/about-us.webp";
import ERamenContactUs from "../assets/projects/personal/eramen/contact-us.webp";
import AtlantisLandingPage from "../assets/projects/professional/atlantis/landing-page.webp";

export interface IProject {
    title: string;
    descriptions: string[];
    type: ProjectType;
    technologies: string[];
    photos: string[];
    githubs?: IGithub[];
    demoUrl?: string;
}

export interface IGithub {
    title: string;
    url: string;
}

export const PROJECTS: IProject[] = [
    {
        title: "Atlantis",
        descriptions: [
            "Website used by Software Laboratory Center staff and laboratory coordinators at BINUS University, serving over 200 users.",
            "Supports promotion registration for Software Laboratory Center",
            "Provides a voting system for selecting the Best Assistant.",
            "Includes component mapping features for publishing academic scores to BINUSMAYA.",
            "Allows registration and management of course information.",
            "Offers a file downloader with data retrieved directly from the internal database.",
            "Displays student and lecturer schedules for easy reference and planning.",
        ],
        type: ProjectType.PROFESSIONAL,
        technologies: [
            "React",
            "TypeScript",
            "Tailwind",
            "Shadcn",
            "TanStack Query",
            ".NET Core",
            "EF Core",
            "Microsoft SQL Server",
            "IIS"
        ],
        photos: [
            AtlantisLandingPage
        ]
    },
    {
        title: "Attendance Management",
        descriptions: [
            "Website for managing internship student attendance at the Enrichment School of Computer Science, BINUS University, used daily by over 120 students.",
            "Streamlines supervisors’ workflow with automated attendance summaries exportable to Excel.",
            "Ensures integrity with location-based check-in validation.",
            "Features a dynamic attendance code that refreshes every 10 seconds, visible only to classroom devices or authorized admins.",
        ],
        type: ProjectType.PROFESSIONAL,
        technologies: [
            "React",
            "TypeScript",
            "Tailwind",
            "Express",
            "Prisma",
            "MySQL",
            "Docker"
        ],
        photos: [
            AttendanceManagementLoginPage,
            AttendanceManagementStudentHomePage,
            AttendanceManagementClassroomHomePage,
            AttendanceManagementAdminHomePage
        ]
    },
    {
        title: "ERamen",
        descriptions: [
            "Website for a ramen shop showcasing menu, promotions, and store information.",
            "Developed as a project for the Human-Computer Interaction course.",
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        photos: [
            ERamenHome,
            ERamenProduct,
            ERamenPromotion,
            ERamenAboutUs,
            ERamenContactUs
        ],
        githubs: [
            {
                title: "eramen",
                url: "https://github.com/AdrianYuu/eramen"
            }
        ],
        demoUrl: "https://adrianyuu.github.io/eramen/html/home.html"
    }
];