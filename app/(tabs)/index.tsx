import { Platform, View } from "react-native";
import { Dialog, Divider, Input, LinearProgress, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { getTimeOfDay } from "@/utils/getTimeOfDay";
import UserContext from "@/contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import TasksList from "@/components/TasksList";
import ThemedView from "@/components/ThemedView";
function isMobile() {
  return Platform.OS === "ios" || Platform.OS === "android";
}
export default function Index() {
  const { t } = useTranslation();

  const user = useContext(UserContext);

  return (
    <ThemedView
      style={{
        padding: 16,
        flex: 1,
        alignItems: isMobile() ? "stretch" : "center",
      }}
    >
      <ThemedView
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
          {/* Add i18n */}
          Today's taskslist is 25% completed, so tomorrow you will be rewarded
          with 25 points + 25 completion bonus!
        </Text>
        <LinearProgress variant="determinate" value={25} color="#017aff" />
        <Text>Point balance 10, next reward in 5</Text>
        <TasksList />
        <Dialog overlayStyle={{ gap: 8 }}>
          <Text h3 style={{ textAlign: "center" }}>
            Points delivery!
          </Text>
          <Text h4 style={{ textAlign: "center" }}>
            25 points + 25 bonus for yesterday's tasks
          </Text>
          <Text style={{ textAlign: "center" }}>
            You have only 20 points left to reward yourself with "McDonald's"
          </Text>
        </Dialog>
      </ThemedView>
    </ThemedView>
  );
}
