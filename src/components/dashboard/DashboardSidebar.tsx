import React, { useState, useCallback, type ReactElement } from "react";
import {
    Box,
    Button,
    Divider,
    Collapse,
    Drawer,
    IconButton,
    useMediaQuery,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { SmartToy } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Flag from "@mui/icons-material/Flag";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useUser } from "@/lib/hooks/useUser";
import { fetcher } from "@/lib/fetcher";
import NavItem from "./NavItem";
import Link from "next/link";

interface SidebarNavItems {
    href: string;
    icon: ReactElement<any, any>;
    title: string;
}

const items: SidebarNavItems[] = [
    {
        href: "/home",
        icon: <HomeIcon fontSize="small" />,
        title: "Home",
    },
    {
        href: "/profile",
        icon: <PersonIcon fontSize="small" />,
        title: "Profile",
    },
    {
        href: "/personalize",
        icon: <CreateIcon fontSize="small" />,
        title: "Personalize",
    },
    {
        href: "/settings",
        icon: <SettingsIcon fontSize="small" />,
        title: "Settings",
    },
    {
        href: "/Botfriend",
        icon: <SmartToy fontSize="small" />,
        title: "BotFriend",
    },
];

// const goalItems: SidebarNavItems[] = [
//     {
//         href: "/goal/goal1",
//         icon: <span style={{ width: 0 }}></span>,
//         title: "Goal 1",
//     },
//     {
//         href: "/goal/goal2",
//         icon: <span style={{ width: 0 }}></span>,
//         title: "Goal 2",
//     },
//     {
//         href: "/goal/goal3",
//         icon: <span style={{ width: 0 }}></span>,
//         title: "Goal 3",
//     },
//     {
//         href: "/goal/goal4",
//         icon: <span style={{ width: 0 }}></span>,
//         title: "Goal 4",
//     },
// ];

interface IProps {
    open: boolean;
    onClose: () => void;
}

const DashboardSidebar = ({ open, onClose }: IProps) => {
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
    const { mutate } = useUser();
    const router = useRouter();
    const { data } = useUser();

    // Sign out function from the navbar
    const onSignOut = useCallback(async () => {
        const response = await fetcher("/api/auth", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            data: null,
        });

        if (response.error) {
            toast.error(response.error);
        } else {
            toast.success("You have been signed out");
            mutate({ payload: null });
            router.replace("/");
        }
    }, [mutate, router]);

    const drawerWidth = 200; // Define width for easier customization

    // State to manage the dropdown visibility
    const [isGoalsDropdownOpen, setIsGoalsDropdownOpen] = useState(false);

    const toggleGoalsDropdown = () => {
        setIsGoalsDropdownOpen((prev) => !prev);
    };

    const content = (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                padding: 2,
            }}
        >
            {/* Top Section: Logo or Title */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 2,
                    paddingBottom: 2,
                }}
            >
                {!lgUp && (
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: "white",
                            alignSelf: "flex-end",
                        }}
                    >
                        <MenuOpenIcon />
                    </IconButton>
                )}
                <Link href="/" style={{ textDecoration: "none" }}>
                    <Typography
                        variant="h6"
                        sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}
                    >
                        Logo
                    </Typography>
                </Link>
            </Box>

            {/* Navigation Items */}
            <Box sx={{ flexGrow: 1 }}>
                {items.map((item) => (
                    <NavItem
                        key={item.title}
                        icon={item.icon}
                        href={item.href}
                        title={item.title}
                    />
                ))}
            </Box>

            {/*Dropdown box for Goal 1, Goal 2, Goal 3, Goal 4*/}
            {/* Dropdown Menu for Goals */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                <Button
                    onClick={toggleGoalsDropdown}
                    startIcon={<Flag fontSize="small" />}
                    sx={{
                        color: "#fff",
                        textTransform: "none",
                        justifyContent: "flex-start",
                        width: "100%",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Goals
                    </Typography>
                </Button>
                {/* Dropdown Content */}
                <Collapse in={isGoalsDropdownOpen}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingLeft: 1,
                            paddingTop: 1,
                            paddingBottom: 1,
                            borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                            width: "100%",
                        }}
                    >
                        {data?.payload?.goals &&
                            data?.payload?.goals.map((item) => (
                                <NavItem
                                    key={item.goalName}
                                    icon={<span style={{ width: 0 }}></span>}
                                    href={`goal/${item.goalName
                                        .split(" ")
                                        .join("-")}`}
                                    title={item.goalName}
                                />
                            ))}
                    </Box>
                </Collapse>
            </Box>

            {/* Sign Out Button */}
            <Box
                sx={{
                    textAlign: "center",
                    padding: 2,
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                <Button
                    onClick={onSignOut}
                    variant="outlined"
                    startIcon={<ExitToAppIcon />}
                    sx={{
                        color: "#fff",
                        borderColor: "#fff",
                        "&:hover": {
                            borderColor: "#fff",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                    }}
                >
                    Sign out
                </Button>
            </Box>
        </Box>
    );

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: "#757575", // Background to match the mockup
                    width: drawerWidth,
                    color: "#fff",
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                    overflowX: "hidden", // Prevents horizontal scrollbars
                },
            }}
            variant={lgUp ? "permanent" : "temporary"}
        >
            {content}
        </Drawer>
    );
};

export default DashboardSidebar;
