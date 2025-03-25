import { TaskType } from "@/types/TaskType";
import { createContext } from "react";

export interface TaskListInterface {
  tasks: TaskType[];
  points: number;
  maxPoints: number;
  updateTask: (index: number, key: string, value: any) => void;
}

export const TasksListContext = createContext<TaskListInterface>({
  tasks: [],
  points: 0,
  maxPoints: 0,
  updateTask: (index, key, value) => {},
});

export default TasksListContext;
