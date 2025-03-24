import { Platform, View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { useCallback, useContext, useState } from "react";
import UserContext from "@/contexts/UserContext";
import { useRouter } from "expo-router";
import ThemedView from "@/components/ThemedView";
function isMobile() {
  return Platform.OS === "ios" || Platform.OS === "android";
}
export default function Introduction() {
  const { t } = useTranslation();
  const { setName } = useContext(UserContext);

  const router = useRouter();

  const introductionDone = useCallback(() => {
    router.navigate("/");
  }, []);

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
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
        <Text h1>{t`introduction.welcome`}</Text>
        <Text
          h4
          style={{ textAlign: "center" }}
        >{t`introduction.subtitle`}</Text>

        <Text style={{ margin: 14, marginBottom: 0 }}>{t`fields.name`}</Text>
        <Input
          onChangeText={(text) => setName(text)}
          placeholder={t`placeholder.name`}
        />
        <Button
          onPress={() => introductionDone()}
        >{t`introduction.done`}</Button>
      </ThemedView>
    </ThemedView>
  );
}
