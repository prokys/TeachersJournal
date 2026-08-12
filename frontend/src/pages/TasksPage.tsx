import { Box, Button, Typography } from "@mui/material";
import { Add, FilterList } from "@mui/icons-material";
import MainLayout from "../components/layouts/MainLayout";


export default function TasksPage(){
    return (
    <MainLayout>
        
        <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >

                <Typography
                    variant="h4"
                >
                    Tasks
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                    }}
                >

                    <Button
                        variant="outlined"
                        startIcon={<FilterList />}
                    >
                        Filter
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<Add />}
                    >
                        New Task
                    </Button>

                </Box>

            </Box>

    </MainLayout>
    );
}