import { TaskType } from "@/types/TaskType";
import { ReactNode, useCallback, useEffect, useState } from "react";
import TasksListContext from "../TasksListContext";
import useJSONStorage from "@/hooks/useJSONStorage";
import { Slot } from "expo-router";

export default function TasksListContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const {
    value: tasks,
    loading,
    setValue: setTasks,
  } = useJSONStorage("user.tasks", [
    {
      id: 1,
      title: "Morning Exercise",
      description: "Do a 30-minute workout",
      completed: false,
      weight: 2,
      iconName: "fitness-center",
      iconType: "material",
      expired: false,
      fromTime: "06:00",
      toTime: "06:30",
    },
    {
      id: 2,
      title: "Team Meeting",
      description: "Discuss project updates with the team",
      completed: true,
      weight: 3,
      iconName: "group",
      iconType: "material",
      expired: false,
      fromTime: "09:00",
      toTime: "10:00",
    },
    {
      id: 3,
      title: "Lunch Break",
      description: "Take a break and have lunch",
      completed: false,
      weight: 1,
      iconName: "lunch-dining",
      iconType: "material",
      expired: false,
      fromTime: "12:00",
      toTime: "13:00",
    },
    {
      id: 4,
      title: "Code Review",
      description: "Review pull requests from the team",
      completed: false,
      weight: 4,
      iconName: "code",
      iconType: "material",
      expired: true,
      fromTime: "14:00",
      toTime: "16:00",
    },
    {
      id: 5,
      title: "Evening Walk",
      description: "Go for a walk to relax after work",
      completed: false,
      weight: 2,
      iconName: "directions-walk",
      iconType: "material",
      expired: null,
      fromTime: "18:00",
      toTime: "18:30",
    },
  ]);

  useEffect(() => {
    if (!tasks) {
      return;
    }
    const sum: number = tasks.reduce(
      (accumulator: number, task: TaskType) => accumulator + task.weight,
      0
    );
    setMaxPoints(sum);
  }, [tasks, setMaxPoints]);

  useEffect(() => {
    if (!tasks) {
      return;
    }
    const sum: number = tasks.reduce(
      (accumulator: number, task: TaskType) =>
        accumulator + (task.completed ? 1 : 0) * task.weight,
      0
    );
    setPoints(sum);
  }, [tasks, setPoints]);
  const updateTask = useCallback(
    (index: number, key: string, value: any) => {
      const result: any[] = [...tasks];
      const task: any = result[index];
      task[key] = value;

      setTasks(result);
    },
    [setTasks, tasks]
  );

  if (loading) {
    return <Slot />;
  }

  return (
    <TasksListContext.Provider value={{ maxPoints, points, tasks, updateTask }}>
      {children}{" "}
    </TasksListContext.Provider>
  );
}
