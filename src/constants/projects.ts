import {ProjectType} from "./project-type.ts";
import {
    AtlantisCourse,
    AtlantisDownloader,
    AtlantisLanding,
    AtlantisLecturer,
    AtlantisMapping,
    AtlantisPromotion,
    AtlantisStudent,
    AtlantisVoting,
    AttendanceManagementAdmin,
    AttendanceManagementClassroom,
    AttendanceManagementExcel,
    AttendanceManagementLogin,
    AttendanceManagementStudent,
    ERamenAbout,
    ERamenContact,
    ERamenHome,
    ERamenProduct,
    ERamenPromotion,
    GymMeCart,
    GymMeHistory,
    GymMeHomeAdmin,
    GymMeLogin,
    GymMeOrderAdmin,
    GymMeOrderCustomer,
    GymMeProfile,
    GymMeRegister,
    GymMeSupplement,
    LinkasaBP,
    LinkasaBSS,
    LinkasaCABCO,
    LinkasaChat,
    LinkasaCIS,
    LinkasaCS,
    LinkasaFOM,
    LinkasaGA,
    LinkasaGHM,
    LinkasaHRD,
    LinkasaIDS,
    LinkasaLAF,
    LinkasaLanding,
    LinkasaLogin,
    LinkasaLOM,
    LinkasaMM,
    TemanMabarCompetition,
    TemanMabarForum,
    TemanMabarFriend, TemanMabarGame,
    TemanMabarHome,
    TemanMabarLogin, TemanMabarOrder, TemanMabarPlayer, TemanMabarProfile,
    TemanMabarRegister,
    TravelohiAdmin,
    TravelohiCard,
    TravelohiCart,
    TravelohiFlight,
    TravelohiFlightDetail,
    TravelohiForgot,
    TravelohiGame,
    TravelohiGameEnd,
    TravelohiHome,
    TravelohiHotel,
    TravelohiHotelDetail,
    TravelohiHotelDetail2,
    TravelohiLogin,
    TravelohiOrder,
    TravelohiOTP,
    TravelohiProfile,
    TravelohiPromo,
    TravelohiRegister,
    TravelohiWallet
} from "./photos.ts";

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
        title: "TemanMabar",
        descriptions: [
            "Provides user registration, authentication, and customizable gamer profiles.",
            "Manages games and genres to organize user preferences and activities.",
            "Supports team creation, team membership management, and collaborative play activities.",
            "Enables competition creation, scheduling, participation, and team-based match coordination.",
            "Includes a forum for posting questions, discussions, and comments.",
            "Handles order management and payment processing for game-related services or items.",
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "Laravel",
            "Tailwind",
            "Flowbite",
            "MySQL"
        ],
        photos: [
            TemanMabarRegister,
            TemanMabarLogin,
            TemanMabarHome,
            TemanMabarCompetition,
            TemanMabarForum,
            TemanMabarFriend,
            TemanMabarGame,
            TemanMabarOrder,
            TemanMabarPlayer,
            TemanMabarProfile
        ],
        githubs: [
            {
                title: "teman-mabar",
                url: "https://github.com/AdrianYuu/teman-mabar"
            }
        ]
    },
    {
        title: "GymMe",
        descriptions: [
            "ASP.NET Web Forms e‑commerce platform for managing and selling gym supplements.",
            "Provides customer-facing product browsing with detailed supplement information (type, price, expiry).",
            "Supports shopping cart functionality including add, update, and remove items.",
            "Handles checkout and transaction processing with detailed transaction history views.",
            "Includes user authentication and profile management.",
            "Admin panel supports CRUD operations for supplements and supplement types.",
            "Tracks inventory levels and supplement expiry dates.",
            "Provides transaction reporting using Crystal Reports."
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "ASP.NET",
            "C#",
            "Bootstrap",
            "Crystal Report",
        ],
        photos: [
            GymMeRegister,
            GymMeLogin,
            GymMeHomeAdmin,
            GymMeCart,
            GymMeHistory,
            GymMeOrderAdmin,
            GymMeSupplement,
            GymMeProfile,
            GymMeOrderCustomer
        ],
        githubs: [
            {
                title: "gym-me",
                url: "https://github.com/AdrianYuu/gym-me"
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