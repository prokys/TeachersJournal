import {
    Box,
    Chip,
    Paper,
    Typography,
} from "@mui/material";

import type { Task } from "../types/task";

interface TaskCardProps {
    task: Task;
    selected: boolean;
    onClick: () => void;
}

export default function TaskCard({
    task,
    selected,
    onClick,
}: TaskCardProps) {
    return (
        <Paper
            onClick={onClick}
            elevation={0}
            sx={{
                p: 2,
                cursor: "pointer",
                border: 1,
                borderColor: selected
                    ? "primary.main"
                    : "divider",
                borderRadius: 2,

                bgcolor: selected
                    ? "primary.50"
                    : "background.paper",

                "&:hover": {
                    bgcolor: "action.hover",
                },
            }}
        >
            <Typography
                sx={{
                    mb: 1,
                }}
            >
                {task.title}
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
            >
                {task.subject} · {task.schoolClass}
            </Typography>

            {task.deadline && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                >
                    Termín:{" "}
                    {new Date(task.deadline).toLocaleDateString("cs-CZ")}
                </Typography>
            )}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                }}
            >
                <Chip
                    label={task.priority}
                    size="small"
                    color={getPriorityColor(task.priority)}
                />

                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {task.status}
                </Typography>
            </Box>
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