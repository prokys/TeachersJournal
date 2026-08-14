export type TaskStatus =
    | "TODO"
    | "IN_PROGRESS"
    | "DONE"
    | "CANCELLED";

export type TaskPriority =
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "URGENT";

export interface SubTask {
    id: number;
    title: string;
    completed: boolean;
}

export interface Note {
    id: number;
    text: string;
    createdAt: string;
}

export interface Task {
    id: number;
    title: string;
    description?: string;
    deadline?: string;
    priority: TaskPriority;
    status: TaskStatus;
    subject?: string;
    schoolClass?: string;
    subtasks: SubTask[];
    notes: Note[];
}