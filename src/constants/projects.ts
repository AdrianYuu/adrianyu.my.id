import {ProjectType} from "./project-type.ts";
import AttendanceManagementLoginPage from "../assets/projects/professional/attendance-management/login-page.png";
import AttendanceManagementStudentHomePage
    from "../assets/projects/professional/attendance-management/student-home-page.png";
import AttendanceManagementClassroomHomePage
    from "../assets/projects/professional/attendance-management/classroom-home-page.png";
import AttendanceManagementAdminHomePage
    from "../assets/projects/professional/attendance-management/admin-home-page.png";

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
        technologies: ["React", "Express.js"],
        photos: [AttendanceManagementLoginPage, AttendanceManagementStudentHomePage, AttendanceManagementClassroomHomePage, AttendanceManagementAdminHomePage],
        demoUrl: "https://enrichment-socs.apps.binus.ac.id/attendance-management/auth/login"
    }
];