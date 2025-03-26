import TasksListContext from "@/contexts/TasksListContext";
import { LinearProgress, Text } from "@rneui/themed";
import React, { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
export default function CompletedTasksMeter() {
  const { points, completionPercentage, completionBonus } =
    useContext(TasksListContext);
  const { t } = useTranslation();

  return (
    <>
      <Text>
        {t("tasks-meter.status", {
          completionPercentage,
          points,
          completionBonus,
        })}{" "}
      </Text>
      <LinearProgress
        variant="determinate"
        value={completionPercentage}
        color="#017aff"
      />
    </>
  );
}
