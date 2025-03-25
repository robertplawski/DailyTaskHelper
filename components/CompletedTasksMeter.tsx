import TasksListContext from "@/contexts/TasksListContext";
import { LinearProgress, Text } from "@rneui/themed";
import React, { useContext } from "react";
export default function CompletedTasksMeter() {
  const { points, maxPoints, tasks } = useContext(TasksListContext);
  return (
    <>
      <Text>
        {/* Add i18n */}
        Today's taskslist is {Math.round((points / maxPoints) * 100)}%
        completed, so tomorrow you will be rewarded with {points} points +{" "}
        {Math.round((points / maxPoints) * tasks.length)} completion bonus!
      </Text>
      <LinearProgress
        variant="determinate"
        value={Math.round((points / maxPoints) * 100)}
        color="#017aff"
      />
    </>
  );
}
