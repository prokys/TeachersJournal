import { Box, Paper } from "@mui/material";

import TaskList from "./TaskList";
import TaskHeader from "./TaskHeader";
import SubTaskList from "./SubTaskList";
import NoteList from "./NoteList";

import type { Task } from "../types/task";

interface TaskLayoutProps {
    tasks: Task[];
    selectedTaskId: number | null;
    selectedTask: Task | null;
    onSelectTask: (taskId: number) => void;
}

export default function TaskLayout({
    tasks,
    selectedTaskId,
    selectedTask,
    onSelectTask,
}: TaskLayoutProps) {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    lg: "320px minmax(0, 1fr)",
                },
                gap: 3,
                height: {
                    lg: "calc(100vh - 180px)",
                },
            }}
        >

            <TaskList
                tasks={tasks}
                selectedTaskId={selectedTaskId}
                onSelectTask={onSelectTask}
            />

            <Paper
                variant="outlined"
                sx={{
                    minWidth: 0,
                    overflow: "auto",
                    borderRadius: 2,
                    p: 3,
                }}
            >
                <TaskHeader task={selectedTask} />

                {selectedTask && (
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1fr 1fr",
                            },
                            gap: 3,
                            mt: 3,
                        }}
                    >
                        <SubTaskList
                            subtasks={selectedTask.subtasks}
                        />

                        <NoteList
                            notes={selectedTask.notes}
                        />
                    </Box>
                )}
            </Paper>
        </Box>
    );
}