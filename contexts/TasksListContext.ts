import { TaskType } from "@/types/TaskType";
import { createContext } from "react";

export interface TaskListInterface {
  tasks: TaskType[];
  updateTask: (index: number, key: string, value: any) => void;
}

export const TasksListContext = createContext<TaskListInterface>({
  tasks: [],
  updateTask: (index, key, value) => {},
});

export default TasksListContext;
