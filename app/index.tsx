import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { getTimeOfDay } from "@/utils/getTimeOfDay";

export default function Index() {
  const { t } = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        {t`home.welcome`} {}
      </Text>
      <Text>{t("home.subtitles." + getTimeOfDay())}</Text>
    </View>
  );
}
