interface IRoute {
    to: string;
    label: string;
}

const ROUTES: IRoute[] = [
    {
        to: "/",
        label: "Home"
    },

    {
        to: "/experiences",
        label: "Experiences"
    },
    {
        to: "/works",
        label: "Works"
    }
];

export default ROUTES;