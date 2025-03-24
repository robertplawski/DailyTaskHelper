import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import React from "react";
import { useTheme } from "@rneui/themed";
export default function TabLayout() {
  const { t } = useTranslation();
  const { theme, updateTheme } = useTheme();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          headerShown: false,
          tabBarInactiveBackgroundColor: theme.colors.background,
          tabBarActiveBackgroundColor: theme.colors.background,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: t`home.title`,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="rewards"
          options={{
            title: t`rewards.title`,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="trophy" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: t`manage.title`,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
