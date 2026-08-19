import { Box, Checkbox, Paper, Typography } from "@mui/material";
import type { SubTask } from "../types/task";

interface SubTaskListProps {
    subtasks: SubTask[];
}

export default function SubTaskList ( {subtasks} : SubTaskListProps){
    const completedCount = subtasks.filter(
        (subtask) => subtask.completed
    ).length;

    return (
        <Paper
            variant="outlined"
            sx={{
                p: 3,
                borderRadius: 2,
            }}
        >
            <Typography
                variant="h6"
            >
                Subtasks ({completedCount}/{subtasks.length})
            </Typography>

            <Box sx={{ mt: 2 }}>
                {subtasks.map((subtask) => (
                    <Box
                        key={subtask.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Checkbox
                            checked={subtask.completed}
                        />

                        <Typography
                            sx={{
                                textDecoration:
                                    subtask.completed
                                        ? "line-through"
                                        : "none",

                                color:
                                    subtask.completed
                                        ? "text.secondary"
                                        : "text.primary",
                            }}
                        >
                            {subtask.title}
                        </Typography>
                    </Box>
                ))}

                {subtasks.length === 0 && (
                    <Typography
                        color="text.secondary"
                        sx={{ mt: 2 }}
                    >
                        No subtasks yet.
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}