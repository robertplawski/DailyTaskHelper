import TasksListContext from "@/contexts/TasksListContext";
import { TaskType } from "@/types/TaskType";
import { useCallback, useContext, useState } from "react";

export const useTask = (task: TaskType) => {
  const {
    index,
    iconType: _iconType,
    iconName: _iconName,
    title: _title,
    weight: _weight,
    expired: _expired,
    completed: _completed,
    fromTime: _fromTime,
    toTime: _toTime,
  } = task;
  const { updateTask } = useContext(TasksListContext);

  const [iconType, setIconTypeState] = useState(_iconType);
  const [iconName, setIconNameState] = useState(_iconName);
  const [title, setTitleState] = useState(_title);
  const [weight, setWeightState] = useState(_weight);
  const [expired, setExpiredState] = useState(_expired);
  const [completed, setCompletedState] = useState(_completed);
  const [fromTime, setFromTimeState] = useState(_fromTime);
  const [toTime, setToTimeState] = useState(_toTime);

  const setCompleted = useCallback(
    (value: boolean) => {
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
