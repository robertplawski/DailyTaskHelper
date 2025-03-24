import { View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { useCallback, useContext, useState } from "react";
import UserContext from "@/contexts/UserContext";
import { useRouter } from "expo-router";

export default function Introduction() {
  const { t } = useTranslation();
  const { setName } = useContext(UserContext);

  const router = useRouter();

  const introductionDone = useCallback(() => {
    router.navigate("/");
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
        <Text h1>{t`introduction.welcome`}</Text>
        <Text
          h4
          style={{ textAlign: "center" }}
        >{t`introduction.subtitle`}</Text>

        <Text>Please enter your name below</Text>
        <Input
          onChangeText={(text) => setName(text)}
          placeholder={t`placeholder.name`}
        />
        <Button
          onPress={() => introductionDone()}
        >{t`introduction.done`}</Button>
      </View>
    </View>
  );
}
