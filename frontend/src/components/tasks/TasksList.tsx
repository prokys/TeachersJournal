import type { Task } from "../types/task";

interface TaskListProps {
    tasks: Task[];
    selectedTaskId: number | null;
    onSelectTask: (taskId: number) => void;
}

export default function TasksList ( {tasks} : TaskListProps){
    return (
        <div></div>
    )
}