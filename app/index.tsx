import { View, Text } from "react-native";
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
      <Text>
        {t`home.welcome`} {user.name}!
      </Text>
      <Text>{t("home.subtitles." + getTimeOfDay())}</Text>
    </View>
  );
}
