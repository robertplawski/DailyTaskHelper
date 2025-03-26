import { Platform, ScrollView, View } from "react-native";
import { Dialog, Divider, Input, LinearProgress, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { getTimeOfDay } from "@/utils/getTimeOfDay";
import UserContext from "@/contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import TasksList from "@/components/TasksList";
import ThemedView from "@/components/ThemedView";
import CompletedTasksMeter from "@/components/CompletedTasksMeter";
import PointBalanceText from "@/components/PointBalanceText";
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
      <ScrollView style={{ flex: 1 }}>
        <ThemedView
          style={{
            maxWidth: 512,
            display: "flex",
            gap: 8,
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Text h1>
            {t`home.welcome`} {user.name}!
          </Text>
          <Text h4>{t("home.subtitles." + getTimeOfDay())}</Text>
          <CompletedTasksMeter />
          <PointBalanceText />
          <TasksList />
          {/*<Dialog overlayStyle={{ gap: 8 }}>
          <Text h3 style={{ textAlign: "center" }}>
            Points delivery!
          </Text>
          <Text h4 style={{ textAlign: "center" }}>
            25 points + 25 bonus for yesterday's tasks
          </Text>
          <Text style={{ textAlign: "center" }}>
            You have only 20 points left to reward yourself with "McDonald's"
          </Text>
        </Dialog>*/}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
