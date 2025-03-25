import { Stack } from "expo-router";
import "@/i18n";
import UserContextProvider from "@/contexts/providers/UserContextProvider";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { useColorScheme } from "react-native";
import React from "react";

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

const theme = createTheme({
  lightColors: {
    primary: "#017aff",
  },
  darkColors: {
    primary: "#017aff",
  },
  components: {
    Button: {
      raised: true,
    },
  },
});
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TasksListContextProvider from "@/contexts/providers/TasksListContextProvider";
export default function RootLayout() {
  theme.mode = useColorScheme() as any;
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#017aff" }}>
          <TasksListContextProvider>
            <UserContextProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>

              <StatusBar style="auto" />
            </UserContextProvider>
          </TasksListContextProvider>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
}
