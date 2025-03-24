import { View } from "react-native";
import { Input, Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import { getTimeOfDay } from "@/utils/getTimeOfDay";
import UserContext from "@/contexts/UserContext";
import { useContext } from "react";

export default function Index() {
  const { t } = useTranslation();
  const user = useContext(UserContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text h1>
        {t`home.welcome`} {user.name}!
      </Text>
      <Text h4 style={{ textAlign: "center" }}>
        {t("home.subtitles." + getTimeOfDay())}
      </Text>
    </View>
  );
}
