import TasksListContext from "@/contexts/TasksListContext";
import { TaskType } from "@/types/TaskType";
import { useCallback, useContext, useMemo, useState } from "react";

export const useTask = (task: TaskType) => {
  const {
    index,
    iconType: _iconType,
    iconName: _iconName,
    title: _title,
    weight: _weight,
    expired: _expired,
    completed: _completed,
    fromTime,
    toTime,
  } = task;
  const { updateTask } = useContext(TasksListContext);

  const [iconType, setIconTypeState] = useState(_iconType);
  const [iconName, setIconNameState] = useState(_iconName);
  const [title, setTitleState] = useState(_title);
  const [weight, setWeightState] = useState(_weight);
  const expired = useMemo(() => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();

    const [fromHour, fromMinute]: any = fromTime.split(":").map(Number);
    const [toHour, toMinute]: any = toTime.split(":").map(Number);

    return !(
      hour + minute / 60 >= fromHour + fromMinute / 60 &&
      hour < toHour + toMinute / 60
    );
  }, [new Date().getMinutes()]);
  const [completed, setCompletedState] = useState(_completed);

  const setCompleted = useCallback(
    (value: boolean) => {
      if (expired) {
        return;
      }
      setCompletedState(value);
      updateTask(index, "completed", value);
    },
    [index]
  );

  return {
    iconType,
    iconName,
    title,
    weight,
    expired,
    completed,
    fromTime,
    toTime,
    setCompleted,
  };
};
