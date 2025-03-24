import { PropsWithChildren, useEffect, useState } from "react";
import UserContext from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function UserContextProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const [name, setName] = useState<string>("John Doe");
  useEffect(() => {
    const payload = async () => {
      const username = await AsyncStorage.getItem("user.name");
      if (username) {
        setName(username);
      } else {
        router.navigate("/introduction");
      }
    };
    payload();
  }, [setName]);

  return (
    <UserContext.Provider value={{ name }}> {children}</UserContext.Provider>
  );
}
