import { CalendarMonth, Checklist, Class, MenuBook, Settings, Logout } from "@mui/icons-material";

import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import { NavLink } from "react-router";

const drawerWidth = 240;

export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,

                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Box sx={{ p: 2 }}>
                <Typography
                    variant="h6"
                >
                    📖 Teacher Diary
                </Typography>
            </Box>

            <Divider />

            <List sx={{ p: 1 }}>

                <NavItem
                    to="/tasks"
                    icon={<Checklist />}
                    text="Tasks"
                />

                <NavItem
                    to="/calendar"
                    icon={<CalendarMonth />}
                    text="Calendar"
                />

            </List>

            <Divider />

            <Typography
                variant="overline"
                sx={{
                    px: 2,
                    pt: 2,
                    color: "text.secondary",
                }}
            >
                Manage
            </Typography>

            <List sx={{ p: 1 }}>

                <NavItem
                    to="/subjects"
                    icon={<MenuBook />}
                    text="Subjects"
                />

                <NavItem
                    to="/classes"
                    icon={<Class />}
                    text="Classes"
                />

            </List>

            <Box sx={{ flex: 1 }} />

            <List sx={{ p: 1 }}>

                <NavItem
                    to="/settings"
                    icon={<Settings />}
                    text="Settings"
                />

                <ListItemButton>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>

                    <ListItemText primary="Logout" />
                </ListItemButton>

            </List>

        </Drawer>
    );
}


interface NavItemProps {
    to: string;
    icon: React.ReactNode;
    text: string;
}


function NavItem({ to, icon, text }: NavItemProps) {
    return (
        <ListItemButton
            component={NavLink}
            to={to}
            sx={{
                borderRadius: 2,
                mb: 0.5,

                "&.active": {
                    bgcolor: "primary.light",
                    color: "primary.main",

                    "& .MuiListItemIcon-root": {
                        color: "primary.main",
                    },
                },
            }}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>

            <ListItemText primary={text} />
        </ListItemButton>
    );
}