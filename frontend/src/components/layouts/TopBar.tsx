import { Avatar, Badge, Box, IconButton, Toolbar, AppBar, Typography } from "@mui/material";

import { NotificationsOutlined } from "@mui/icons-material";

export default function Topbar() {
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={0}
            sx={{
                borderBottom: 1,
                borderColor: "divider",
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                }}
            >

                <Typography
                    variant="h6"
                >
                    Teachers Journal
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >

                    <IconButton>
                        <Badge
                            badgeContent={3}
                            color="primary"
                        >
                            <NotificationsOutlined />
                        </Badge>
                    </IconButton>

                    <Avatar>
                        JN
                    </Avatar>

                    <Typography>
                        Jan Novák
                    </Typography>

                </Box>

            </Toolbar>
        </AppBar>
    );
}