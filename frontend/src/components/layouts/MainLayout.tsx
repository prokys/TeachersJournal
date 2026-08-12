import type { ReactNode } from "react";
import { Box } from "@mui/material";

import Sidebar from "./SideBar";
import Topbar from "./TopBar";

interface Props {
    children: ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                bgcolor: "background.default",
            }}
        >
            <Sidebar />

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                }}
            >
                <Topbar />

                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        overflow: "auto",
                        p: 3,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}