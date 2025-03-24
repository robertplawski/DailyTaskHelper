import { View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { useCallback, useContext, useState } from "react";
import UserContext from "@/contexts/UserContext";
import { useRouter } from "expo-router";
import { Platform } from "react-native";
function isMobile() {
  return Platform.OS === "ios" || Platform.OS === "android";
}
export default function Rewards() {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
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
        <Text h1>{t`rewards.title`}</Text>
        <Text h4>{t`rewards.subtitle`}</Text>
      </View>
    </View>
  );
}
