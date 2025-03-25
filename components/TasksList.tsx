import TasksListContext from "@/contexts/TasksListContext";
import { useTask } from "@/hooks/useTask";
import { TaskType } from "@/types/TaskType";
import { Button, CheckBox, Icon, ListItem } from "@rneui/themed";
import { useCallback, useContext, useMemo, useState } from "react";
import { ScrollView } from "react-native";

export interface TaskItemProps {
  task: TaskType;
}

export function TaskItem({ task }: TaskItemProps) {
  const {
    iconType = "font-awesome-5",
    iconName = "tasks",
    title,
    weight,
    expired,
    completed,
    fromTime,
    toTime,
    setCompleted,
  } = useTask(task);

  const isInactive = useMemo(() => expired || completed, [expired, completed]);

  return (
    <ListItem
      style={{ margin: 8, marginBottom: 0, opacity: isInactive ? 0.5 : 1 }}
    >
      <Icon type={iconType} name={iconName} color="grey" />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>

        <ListItem.Subtitle>
          Reward: {weight} points, from {fromTime} to {toTime}{" "}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.CheckBox
        onPress={() => setCompleted(true)}
        checked={completed}
      />
    </ListItem>
  );
}

export default function TasksList() {
  const { tasks } = useContext(TasksListContext);

  return (
    <ScrollView>
      {tasks.map((value, index) => (
        <TaskItem task={{ ...value, index }} />
      ))}
    </ScrollView>
  );
}
