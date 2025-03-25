import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import UserContext from "../UserContext";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useRouter, Redirect, useRootNavigationState, Slot } from "expo-router";
import useStorage from "@/hooks/useStorage";

export default function UserContextProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const {
    loading,
    value: name,
    getValue: getName,
    setValue: setName,
  } = useStorage("user.name");

  if (loading) {
    return <Slot />;
  }

  return (
    <UserContext.Provider value={{ name, getName, setName }}>
      {children}
    </UserContext.Provider>
  );
}
