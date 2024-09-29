import React, { useCallback, type ReactElement } from "react";
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    useMediaQuery,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
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
        href: "/settings",
        icon: <SettingsIcon fontSize="small" />,
        title: "Settings",
    },
];

interface IProps {
    open: boolean;
    onClose: () => void;
}

const DashboardSidebar = ({ open, onClose }: IProps) => {
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
    const { mutate } = useUser();
    const router = useRouter();

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
