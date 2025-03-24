import { Stack } from "expo-router";
import "@/i18n";
import UserContextProvider from "@/contexts/providers/UserContextProvider";
import { createTheme, ThemeProvider } from "@rneui/themed";
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
export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </UserContextProvider>
    </ThemeProvider>
  );
}
