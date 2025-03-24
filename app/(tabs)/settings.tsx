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
export default function Settings() {
  const { t } = useTranslation();
  const { setName, name } = useContext(UserContext);

  const router = useRouter();

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
        <Text h1>{t`manage.title`}</Text>
        <Text h4>{t`manage.subtitle`}</Text>

        <Text>Please enter your name below</Text>
        <Input
          onChangeText={(text) => setName(text)}
          placeholder={name || t`placeholder.name`}
        />
        <Button>{t`manage.done`}</Button>
      </View>
    </View>
  );
}
