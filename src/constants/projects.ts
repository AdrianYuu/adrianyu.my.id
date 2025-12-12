import {ProjectType} from "./project-type.ts";
import AttendanceManagementLogin from "../assets/projects/professional/attendance-management/login.webp";
import AttendanceManagementStudent
    from "../assets/projects/professional/attendance-management/student.webp";
import AttendanceManagementClassroom
    from "../assets/projects/professional/attendance-management/classroom.webp";
import AttendanceManagementAdmin
    from "../assets/projects/professional/attendance-management/admin.webp";
import AttendanceManagementExcel
    from "../assets/projects/professional/attendance-management/excel.webp";
import ERamenHome from "../assets/projects/personal/eramen/home.webp";
import ERamenProduct from "../assets/projects/personal/eramen/product.webp";
import ERamenPromotion from "../assets/projects/personal/eramen/promotion.webp";
import ERamenAbout from "../assets/projects/personal/eramen/about.webp";
import ERamenContact from "../assets/projects/personal/eramen/contact.webp";
import AtlantisLanding from "../assets/projects/professional/atlantis/landing.webp";
import AtlantisPromotion from "../assets/projects/professional/atlantis/promotion.webp";
import AtlantisVoting from "../assets/projects/professional/atlantis/voting.webp";
import AtlantisMapping from "../assets/projects/professional/atlantis/mapping.webp";
import AtlantisCourse from "../assets/projects/professional/atlantis/course.webp";
import AtlantisDownloader from "../assets/projects/professional/atlantis/downloader.webp";
import AtlantisStudent from "../assets/projects/professional/atlantis/student.webp";
import AtlantisLecturer from "../assets/projects/professional/atlantis/lecturer.webp";
import LinkasaLanding from "../assets/projects/personal/linkasa/landing.webp";
import LinkasaLogin from "../assets/projects/personal/linkasa/login.webp";
import LinkasaChat from "../assets/projects/personal/linkasa/chat.webp";
import LinkasaBP from "../assets/projects/personal/linkasa/bp.webp";
import LinkasaBSS from "../assets/projects/personal/linkasa/bss.webp";
import LinkasaCABCO from "../assets/projects/personal/linkasa/cabco.webp";
import LinkasaCIS from "../assets/projects/personal/linkasa/cis.webp";
import LinkasaCS from "../assets/projects/personal/linkasa/cs.webp";
import LinkasaFOM from "../assets/projects/personal/linkasa/fom.webp";
import LinkasaGA from "../assets/projects/personal/linkasa/ga.webp";
import LinkasaGHM from "../assets/projects/personal/linkasa/ghm.webp";
import LinkasaHRD from "../assets/projects/personal/linkasa/hrd.webp";
import LinkasaIDS from "../assets/projects/personal/linkasa/ids.webp";
import LinkasaLAF from "../assets/projects/personal/linkasa/laf.webp";
import LinkasaLOM from "../assets/projects/personal/linkasa/lom.webp";
import LinkasaMM from "../assets/projects/personal/linkasa/mm.webp";
import TravelohiRegister from "../assets/projects/personal/travelohi/register.webp";
import TravelohiLogin from "../assets/projects/personal/travelohi/login.webp";
import TravelohiOTP from "../assets/projects/personal/travelohi/otp.webp";
import TravelohiForgot from "../assets/projects/personal/travelohi/forgot.webp";
import TravelohiHome from "../assets/projects/personal/travelohi/home.webp";
import TravelohiFlight from "../assets/projects/personal/travelohi/flight.webp";
import TravelohiFlightDetail from "../assets/projects/personal/travelohi/flight-detail.webp";
import TravelohiHotel from "../assets/projects/personal/travelohi/hotel.webp";
import TravelohiHotelDetail from "../assets/projects/personal/travelohi/hotel-detail.webp";
import TravelohiHotelDetail2 from "../assets/projects/personal/travelohi/hotel-detail-2.webp";
import TravelohiPromo from "../assets/projects/personal/travelohi/promo.webp";
import TravelohiCart from "../assets/projects/personal/travelohi/cart.webp";
import TravelohiOrder from "../assets/projects/personal/travelohi/order.webp";
import TravelohiProfile from "../assets/projects/personal/travelohi/profile.webp";
import TravelohiWallet from "../assets/projects/personal/travelohi/wallet.webp";
import TravelohiCard from "../assets/projects/personal/travelohi/card.webp";
import TravelohiGame from "../assets/projects/personal/travelohi/game.webp";
import TravelohiGameEnd from "../assets/projects/personal/travelohi/game-end.webp";
import TravelohiAdmin from "../assets/projects/personal/travelohi/admin.webp";

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
        title: "Travelohi",
        descriptions: [
            "Full-stack travel booking platform for searching and booking flights and hotels with real-time availability.",
            "Supports flight booking with seat selection, detailed flight information, and booking management.",
            "Provides hotel browsing with room types, facilities, real-time availability, and booking management.",
            "Includes OTP email verification and personal security questions.",
            "Supports real-time multiplayer games for earning rewards and promotional codes via WebSocket.",
            "Allows users to submit and view ratings and reviews for flights and hotels with multiple rating types.",
            "Manages loyalty programs with points, promotional codes, and user promo tracking.",
            "Tracks search history for flights and hotels for personalized recommendations and convenience.",
            "Enables real-time admin broadcasting of announcements and promotional messages to users.",
            "Provides detailed airport and transit information to assist travelers.",
            "Supports comprehensive user profile management including personal info, security questions, and account settings."
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "React",
            "TypeScript",
            "Styled Components",
            "Go",
            "Gin",
            "Gorm",
            "PostgreSQL",
            "Firebase",
            "Canvas",
            "WebSocket",
            "Python",
            "Flask"
        ],
        photos: [
            TravelohiRegister,
            TravelohiLogin,
            TravelohiOTP,
            TravelohiForgot,
            TravelohiHome,
            TravelohiFlight,
            TravelohiFlightDetail,
            TravelohiHotel,
            TravelohiHotelDetail,
            TravelohiHotelDetail2,
            TravelohiPromo,
            TravelohiCart,
            TravelohiOrder,
            TravelohiProfile,
            TravelohiWallet,
            TravelohiCard,
            TravelohiGame,
            TravelohiGameEnd,
            TravelohiAdmin
        ],
        githubs: [
            {
                title: "travelohi",
                url: "https://github.com/AdrianYuu/travelohi"
            }
        ]
    },
    {
        title: "Linkasa",
        descriptions: [
            "Desktop application used for managing airport operations, serving airports with real-time operational needs.",
            "Supports flight schedule creation and management with real-time updates.",
            "Provides passenger services including boarding pass generation, custom declarations, and passenger information tracking.",
            "Includes cargo and logistics management for shipments, storage allocation, and inventory tracking.",
            "Allows staff and employee management with access control and training program oversight.",
            "Offers baggage handling task assignment, monitoring, and security incident reporting.",
            "Supports ground operations coordination including transportation routes and schedules.",
            "Includes equipment maintenance tracking and facility management.",
            "Manages lost and found items with status tracking and photo documentation.",
            "Includes real-time communications with chat and broadcast messaging.",
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "React",
            "TypeScript",
            "Bootstrap",
            "Firebase",
            "Electron"
        ],
        photos: [
            LinkasaLanding,
            LinkasaLogin,
            LinkasaChat,
            LinkasaBSS,
            LinkasaCABCO,
            LinkasaCIS,
            LinkasaCS,
            LinkasaFOM,
            LinkasaGA,
            LinkasaGHM,
            LinkasaHRD,
            LinkasaIDS,
            LinkasaLAF,
            LinkasaLOM,
            LinkasaMM,
            LinkasaBP
        ],
        githubs: [
            {
                title: "linkasa",
                url: "https://github.com/AdrianYuu/linkasa"
            }
        ]
    },
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
            AtlantisLanding,
            AtlantisPromotion,
            AtlantisVoting,
            AtlantisMapping,
            AtlantisCourse,
            AtlantisDownloader,
            AtlantisStudent,
            AtlantisLecturer
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
            AttendanceManagementLogin,
            AttendanceManagementStudent,
            AttendanceManagementClassroom,
            AttendanceManagementAdmin,
            AttendanceManagementExcel
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
            ERamenAbout,
            ERamenContact
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