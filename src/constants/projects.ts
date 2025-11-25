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
    description: string;
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
        description: "Atlantis",
        type: ProjectType.PROFESSIONAL,
        technologies: ["React", "shadcn/ui", "TypeScript", "TanStack Query", ".NET Core", "EF Core", "Microsoft SQL Server", "IIS"],
        photos: [AtlantisLandingPage]
    },
    {
        title: "Attendance Management",
        description: "Attendance Management",
        type: ProjectType.PROFESSIONAL,
        technologies: ["React", "Tailwind", "Express", "TypeScript", "Prisma", "MySQL", "Docker"],
        photos: [AttendanceManagementLoginPage, AttendanceManagementStudentHomePage, AttendanceManagementClassroomHomePage, AttendanceManagementAdminHomePage],
    },
    {
        title: "ERamen",
        description: "ERamen",
        type: ProjectType.PERSONAL,
        technologies: ["HTML", "CSS", "JavaScript"],
        photos: [ERamenHome, ERamenProduct, ERamenPromotion, ERamenAboutUs, ERamenContactUs],
        githubs: [
            {
                title: "eramen",
                url: "https://github.com/AdrianYuu/eramen"
            }
        ],
        demoUrl: "https://adrianyuu.github.io/eramen/html/home.html"
    }
];