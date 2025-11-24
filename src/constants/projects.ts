import {ProjectType} from "./project-type.ts";
import AttendanceManagementLoginPage from "../assets/projects/professional/attendance-management/login-page.png";
import AttendanceManagementStudentHomePage
    from "../assets/projects/professional/attendance-management/student-home-page.png";
import AttendanceManagementClassroomHomePage
    from "../assets/projects/professional/attendance-management/classroom-home-page.png";
import AttendanceManagementAdminHomePage
    from "../assets/projects/professional/attendance-management/admin-home-page.png";
import AttendanceManagementExcel from "../assets/projects/professional/attendance-management/excel.png";
import ERamenHome from "../assets/projects/personal/eramen/home.png";
import ERamenProduct from "../assets/projects/personal/eramen/product.png";
import ERamenPromotion from "../assets/projects/personal/eramen/promotion.png";
import ERamenAboutUs from "../assets/projects/personal/eramen/about-us.png";
import ERamenContactUs from "../assets/projects/personal/eramen/contact-us.png";

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
        title: "Attendance Management",
        description: "A website for attendance management featuring real-time location verification and detailed daily or monthly recap reports, with support for exporting data to Excel.",
        type: ProjectType.PROFESSIONAL,
        technologies: ["React", "Tailwind", "Express", "TypeScript", "Prisma", "MySQL", "Docker"],
        photos: [AttendanceManagementLoginPage, AttendanceManagementStudentHomePage, AttendanceManagementClassroomHomePage, AttendanceManagementAdminHomePage, AttendanceManagementExcel],
        demoUrl: "https://enrichment-socs.apps.binus.ac.id/attendance-management/auth/login"
    },
    {
        title: "ERamen",
        description: "This ramen shop website showcases menu items, promotions, and essential shop information in a simple, appealing layout.",
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