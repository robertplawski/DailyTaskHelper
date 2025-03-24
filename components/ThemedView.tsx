import { useTheme } from "@rneui/themed";
import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";

interface ThemedViewProps extends PropsWithChildren {
  style: StyleProp<ViewStyle>;
}

export default function ThemedView({ children, style }: ThemedViewProps) {
  const { theme, updateTheme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        ...(style as object),
      }}
    >
      {children}
    </View>
  );
}
