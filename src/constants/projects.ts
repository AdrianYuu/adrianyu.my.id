import {ProjectType} from "./project-type.ts";
import * as photos from './photos.ts';

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
        title: "MiniShop",
        descriptions: [
            "Built an e-commerce system with product and category management.",
            "Developed complete order lifecycle management with status tracking.",
            "Implemented role-based access control and secure authentication for admin and user operations.",
            "Integrated MinIO for image storage and retrieval."
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "Vue3",
            "TypeScript",
            "Vue Query",
            "Zod",
            "Pinia",
            "Tailwind",
            "Shadcn",
            "Spring Boot",
            "Java",
            "Lombok",
            "Hibernate",
            "Flyway",
            "MapStruct",
            "MinIO",
            "MySQL"
        ],
        photos: [
            photos.MiniShopHome,
            photos.MiniShopRegister,
            photos.MiniShopLogin,
            photos.MiniShopProduct,
            photos.MiniShopOrder,
            photos.MiniShopHistories,
            photos.MiniShopHistory,
            photos.MiniShopProfile,
            photos.MiniShopAdmin1,
            photos.MiniShopAdmin2
        ],
        githubs: [
            {
                title: "mini-shop-fe",
                url: "https://github.com/AdrianYuu/mini-shop-fe"
            },
            {
                title: "mini-shop-be",
                url: "https://github.com/AdrianYuu/mini-shop-be"
            },
        ]
    },
    {
        title: "Travelohi",
        descriptions: [
            "Developed a travel booking platform for flights and hotels.",
            "Implemented booking management, seat selection, and hotel room handling.",
            "Integrated WebSocket features for real-time multiplayer games.",
            "Built promos, reviews, and user profile management features."
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
            photos.TravelohiHotelDetail1,
            photos.TravelohiRegister,
            photos.TravelohiLogin,
            photos.TravelohiOTP,
            photos.TravelohiForgot,
            photos.TravelohiHome,
            photos.TravelohiFlight,
            photos.TravelohiFlightDetail,
            photos.TravelohiHotel,
            photos.TravelohiHotelDetail2,
            photos.TravelohiPromo,
            photos.TravelohiCart,
            photos.TravelohiOrder,
            photos.TravelohiProfile,
            photos.TravelohiWallet,
            photos.TravelohiCard,
            photos.TravelohiGame,
            photos.TravelohiGameEnd,
            photos.TravelohiAdmin
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
            "Developed a desktop application for managing airport operations and real-time workflows.",
            "Implemented flight scheduling, passenger services, and baggage handling systems.",
            "Built staff, logistics, and equipment management modules.",
            "Integrated real-time communication via chat and broadcast messaging."
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
            photos.LinkasaHRD,
            photos.LinkasaLanding,
            photos.LinkasaLogin,
            photos.LinkasaChat,
            photos.LinkasaBSS,
            photos.LinkasaCABCO,
            photos.LinkasaCIS,
            photos.LinkasaCS,
            photos.LinkasaFOM,
            photos.LinkasaGA,
            photos.LinkasaGHM,
            photos.LinkasaIDS,
            photos.LinkasaLAF,
            photos.LinkasaLOM,
            photos.LinkasaMM,
            photos.LinkasaBP,
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
            "Developed a gaming social platform to help users find and connect with others to play games together.",
            "Implemented team, competition, and match management features.",
            "Developed discussion forums and social interaction modules.",
            "Integrated order and payment processing for in-platform services."
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "Laravel",
            "Tailwind",
            "Flowbite",
            "MySQL"
        ],
        photos: [
            photos.TemanMabarHome,
            photos.TemanMabarRegister,
            photos.TemanMabarLogin,
            photos.TemanMabarGame,
            photos.TemanMabarFriend,
            photos.TemanMabarPlayer,
            photos.TemanMabarCompetition,
            photos.TemanMabarForum,
            photos.TemanMabarOrder,
            photos.TemanMabarProfile
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
            "Developed an e-commerce platform for gym supplement sales.",
            "Implemented product management, inventory tracking, and expiration monitoring.",
            "Built shopping cart, checkout, and transaction history features.",
            "Generated transaction reports using Crystal Report."
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "ASP.NET",
            "C#",
            "Bootstrap",
            "Crystal Report",
        ],
        photos: [
            photos.GymMeHome,
            photos.GymMeRegister,
            photos.GymMeLogin,
            photos.GymMeSupplement,
            photos.GymMeOrderAdmin,
            photos.GymMeHistory,
            photos.GymMeProfile,
            photos.GymMeOrderCustomer,
            photos.GymMeCart,
        ],
        githubs: [
            {
                title: "gym-me",
                url: "https://github.com/AdrianYuu/gym-me"
            }
        ]
    },
    {
        title: "ERamen",
        descriptions: [
            "Developed a responsive promotional website for a ramen restaurant.",
            "Designed user-friendly layouts following HCI principles.",
            "Implemented menu, promotion, and store information pages."
        ],
        type: ProjectType.PERSONAL,
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        photos: [
            photos.ERamenHome,
            photos.ERamenProduct,
            photos.ERamenPromotion,
            photos.ERamenAbout,
            photos.ERamenContact
        ],
        githubs: [
            {
                title: "eramen",
                url: "https://github.com/AdrianYuu/eramen"
            }
        ],
        demoUrl: "https://adrianyuu.github.io/eramen/html/home.html"
    },
    {
        title: "Atlantis",
        descriptions: [
            "Developed an internal web system serving 200+ staff and coordinators.",
            "Implemented promotion registration and Best Assistant voting functionalities.",
            "Built academic data mapping and internal file download modules.",
            "Developed schedule and course management functionalities."
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
            photos.AtlantisLanding,
            photos.AtlantisPromotion,
            photos.AtlantisVoting,
            photos.AtlantisMapping,
            photos.AtlantisCourse,
            photos.AtlantisDownloader,
            photos.AtlantisStudent,
            photos.AtlantisLecturer
        ]
    },
    {
        title: "Attendance Management",
        descriptions: [
            "Developed a web-based Attendance Management System supporting 120+ internship students.",
            "Implemented location-based check-in validation for attendance integrity.",
            "Built real-time attendance code generation using WebSocket.",
            "Automated attendance reporting with Excel export support."
        ],
        type: ProjectType.PROFESSIONAL,
        technologies: [
            "React",
            "TypeScript",
            "Tailwind",
            "Express",
            "Prisma",
            "MySQL",
            "WebSocket",
            "Docker"
        ],
        photos: [
            photos.AttendanceManagementLogin,
            photos.AttendanceManagementStudent,
            photos.AttendanceManagementClassroom,
            photos.AttendanceManagementAdmin,
            photos.AttendanceManagementExcel
        ]
    },
];