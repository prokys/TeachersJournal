import { Box, Paper, Typography } from "@mui/material";
import type { Task } from "../types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
    tasks: Task[];
    selectedTaskId: number | null;
    onSelectTask: (taskId: number) => void;
}

export default function TaskList ( {tasks, selectedTaskId, onSelectTask} : TaskListProps){
    return(
        <Paper
            elevation={0}
            sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                overflow: "auto",
            }}
        >
            <Box sx={{ p: 2 }}>
                <Typography variant="h6">
                    My Tasks
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {tasks.length} tasks
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    p: 1,
                }}
            >
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        selected={task.id === selectedTaskId}
                        onClick={() => onSelectTask(task.id)}
                    />
                ))}
            </Box>
        </Paper>
    );
}