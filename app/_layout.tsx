import { Stack } from "expo-router";
import "@/i18n";
import UserContextProvider from "@/contexts/providers/UserContextProvider";

export default function RootLayout() {
  return (
    <UserContextProvider>
      <Stack />
    </UserContextProvider>
  );
}
