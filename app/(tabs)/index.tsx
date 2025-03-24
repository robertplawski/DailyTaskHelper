import { Platform, View } from "react-native";
import { Divider, Input, LinearProgress, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { getTimeOfDay } from "@/utils/getTimeOfDay";
import UserContext from "@/contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import TasksList from "@/components/TasksList";
function isMobile() {
  return Platform.OS === "ios" || Platform.OS === "android";
}
export default function Index() {
  const { t } = useTranslation();

  const user = useContext(UserContext);

  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        alignItems: isMobile() ? "stretch" : "center",
      }}
    >
      <View
        style={{
          maxWidth: 512,
          display: "flex",
          gap: 8,
          flexDirection: "column",
        }}
      >
        <Text h1>
          {t`home.welcome`} {user.name}!
        </Text>
        <Text h4>{t("home.subtitles." + getTimeOfDay())}</Text>
        <Text>
          Today's tasks are 25% completed, tomorrow you will be rewarded with 25
          points + 25 completion bonus!
        </Text>
        <LinearProgress variant="determinate" value={25} color="#017aff" />
        <Text>Point balance 10, next reward in 5</Text>
        <TasksList />
      </View>
    </View>
  );
}
