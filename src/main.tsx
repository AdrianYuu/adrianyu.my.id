import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/main-layout.tsx";
import HomePage from "./pages/home-page.tsx";
import ExperiencesPage from "./pages/experiences-page.tsx";
import ProjectsPage from "./pages/projects-page.tsx";
import NotFoundPage from "./pages/not-found-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "",
                Component: HomePage
            },
            {
                path: "experiences",
                Component: ExperiencesPage
            },
            {
                path: "projects",
                Component: ProjectsPage
            },
            {
                path: "*",
                Component: NotFoundPage
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);
