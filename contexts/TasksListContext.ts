import { TaskType } from "@/types/TaskType";
import { createContext } from "react";

export interface TaskListInterface {
  completedTasks: TaskType[];
  tasks: TaskType[];
  points: number;
  maxPoints: number;
  completionPercentage: number;
  pointsUntilNextReward: number;
  completionBonus: number;
  isInEditMode: boolean;
  toggleEditMode: () => void;
  updateTask: (index: number, key: string, value: any) => void;
}

export const TasksListContext = createContext<TaskListInterface>({
  tasks: [],
  points: 0,
  maxPoints: 0,
  completedTasks: [],
  pointsUntilNextReward: 0,
  completionPercentage: 0,
  completionBonus: 0,
  isInEditMode: false,
  toggleEditMode: () => {},
  updateTask: (index, key, value) => {},
});

export default TasksListContext;
