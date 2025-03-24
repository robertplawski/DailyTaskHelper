import { View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation();
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
        <Input placeholder={t`placeholder.name`} />
        <Button>{t`introduction.done`}</Button>
      </View>
    </View>
  );
}
