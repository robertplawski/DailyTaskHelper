import TasksListContext from "@/contexts/TasksListContext";
import { Text } from "@rneui/themed";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function PointBalanceText() {
  const { points, pointsUntilNextReward } = useContext(TasksListContext);
  const { t } = useTranslation();

  return (
    <Text>
      {" "}
      {t("point-balance", {
        points,
        pointsUntilNextReward,
      })}{" "}
    </Text>
  );
}
