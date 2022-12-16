import { Link, NavLink } from "react-router-dom";
import {
    HomeIcon,
    ChartBarIcon,
    UserCircleIcon,
    CircleStackIcon,
    ArchiveBoxIcon,
    BuildingLibraryIcon,
    TruckIcon,
    UsersIcon,
    InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
// import { useStateContext } from "../contexts/ContextProvider";

// for dashboard layout
const Sidebar = (activeMenu) => {
    // const { activeMenu } = useStateContext();
    const activeStyle =
        "active bg-white text-sidebar rounded py-2 px-1.5 mb-5 flex gap-x-5 pl-12 font-roboto text-normal font-light";
    const linkStyle =
        "mb-5 flex gap-x-5 pl-12 font-roboto text-sm font-light text-white";
    const navMenu = [
        {
            title: "",
            links: [
                {
                    path: "dashboard",
                    name: "Dashboard",
                    icon: <HomeIcon className="h-6 w-6" />,
                },
                {
                    path: "performance",
                    name: "Performance Matrics",
                    icon: <ChartBarIcon className="h-6 w-6" />,
                },
                {
                    path: "profile",
                    name: "Manage Profile",
                    icon: <UserCircleIcon className="h-6 w-6" />,
                },
            ],
        },
        {
            title: "Trips",
            links: [
                {
                    path: "database",
                    name: "Database",
                    icon: <CircleStackIcon className="h-6 w-6" />,
                },
                {
                    path: "orders",
                    name: "Orders",
                    icon: <ArchiveBoxIcon className="h-6 w-6" />,
                },
                {
                    path: "financial",
                    name: "Financial",
                    icon: <BuildingLibraryIcon className="h-6 w-6" />,
                },
            ],
        },
        {
            title: "Trips Requirements",
            links: [
                {
                    path: "mytrucks",
                    name: "My Trucks",
                    icon: <TruckIcon className="h-6 w-6" />,
                },
                {
                    path: "driver",
                    name: "Drivers",
                    icon: <UsersIcon className="h-6 w-6" />,
                },
            ],
        },
        {
            title: "Help",
            links: [
                {
                    path: "support",
                    name: "Support & Ticket",
                    icon: <InboxArrowDownIcon className="h-6 w-6" />,
                },
            ],
        },
    ];
    return (
        <aside className="h-screen flex-col space-y-20 overflow-auto bg-sidebar px-2 md:w-72 md:overflow-hidden md:hover:overflow-auto">
            <div className="mt-4 mb-20 flex justify-center">
                <Link to="/">
                    <img
                        src="/kaya_logo.svg"
                        alt="Kaya logo"
                        className="w-16"
                    />
                </Link>
            </div>
            <div className="">
                {navMenu.map((menu) => (
                    <div key={menu.title}>
                        <p
                            className="mb-5 block font-roboto text-sm font-normal text-white/80"
                            key={menu.title}
                        >
                            {menu.title}
                        </p>
                        {menu.links &&
                            menu.links.map((link) => (
                                <div key={link.path}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? activeStyle : linkStyle
                                        }
                                        to={`/${link.path}`}
                                    >
                                        {link.icon}{" "}
                                        {activeMenu && <span>{link.name}</span>}
                                    </NavLink>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </aside>
    );
};
Sidebar();
export default Sidebar;
