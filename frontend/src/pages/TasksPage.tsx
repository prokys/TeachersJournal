import { Box, Button, Typography } from "@mui/material";
import { Add, FilterList } from "@mui/icons-material";
import MainLayout from "../components/layouts/MainLayout";
import TasksLayout from "../components/tasks/TasksLayout";
import type { Task } from "../components/types/task";

const testTasks: Task[] = [
    {
        id: 1,
        title: "Připravit test z matematiky",
        description: "Připravit test pro 7.A na Pythagorovu větu.",
        deadline: "2026-08-15T12:00:00",
        priority: "HIGH",
        status: "IN_PROGRESS",
        subject: "Matematika",
        schoolClass: "7.A",
        subtasks: [
            {
                id: 1,
                title: "Připravit otázky",
                completed: true,
            },
            {
                id: 2,
                title: "Vytisknout testy",
                completed: false,
            },
            {
                id: 3,
                title: "Připravit bodování",
                completed: false,
            },
        ],
        notes: [
            {
                id: 1,
                text: "Nezapomenout upravit obtížnost pro slabší skupinu.",
                createdAt: "2026-08-10T14:30:00",
            },
        ],
    },
    {
        id: 2,
        title: "Opravit písemky",
        description: "Opravit písemky z posledního testu.",
        deadline: "2026-08-13T16:00:00",
        priority: "MEDIUM",
        status: "TODO",
        subject: "Matematika",
        schoolClass: "7.B",
        subtasks: [],
        notes: [],
    },
    {
        id: 3,
        title: "Připravit hodinu češtiny",
        description: "Připravit materiály na příští hodinu.",
        deadline: "2026-08-18T08:00:00",
        priority: "LOW",
        status: "TODO",
        subject: "Český jazyk",
        schoolClass: "6.A",
        subtasks: [],
        notes: [],
    },
];

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

            <TasksLayout tasks={testTasks} selectedTask={testTasks[0]} selectedTaskId={0} onSelectTask={null}></TasksLayout>

    </MainLayout>
    );
}