import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import type { Task } from "../types/task";
import { CalendarMonth, Edit } from "@mui/icons-material";

interface TaskHeaderProps {
    task: Task | null;
}

export default function TaskHeader ( {task} : TaskHeaderProps){
    if (!task) {
        return (
            <Paper
                variant="outlined"
                sx={{
                    p: 4,
                    textAlign: "center",
                }}
            >
                <Typography color="text.secondary">
                    Select a task
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper
            variant="outlined"
            sx={{
                p: 3,
                borderRadius: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                }}
            >
                <Box>
                    <Typography
                        variant="h4"
                    >
                        {task.title}
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{ mt: 1 }}
                    >
                        {task.subject} · {task.schoolClass}
                    </Typography>
                </Box>

                <Button
                    variant="outlined"
                    startIcon={<Edit />}
                >
                    Edit
                </Button>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                    mt: 3,
                }}
            >
                <Chip
                    label={task.status.replace("_", " ")}
                    color="primary"
                />

                <Chip
                    label={task.priority}
                    color={getPriorityColor(task.priority)}
                />

                {task.deadline && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            ml: 1,
                        }}
                    >
                        <CalendarMonth
                            fontSize="small"
                            color="action"
                        />

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {new Date(
                                task.deadline
                            ).toLocaleString("cs-CZ")}
                        </Typography>
                    </Box>
                )}
            </Box>

            {task.description && (
                <Typography
                    sx={{
                        mt: 3,
                        color: "text.secondary",
                    }}
                >
                    {task.description}
                </Typography>
            )}
        </Paper>
    );
}

function getPriorityColor(priority: Task["priority"]) {
    switch (priority) {
        case "LOW":
            return "success";
        case "MEDIUM":
            return "info";
        case "HIGH":
            return "warning";
        case "URGENT":
            return "error";
    }
}