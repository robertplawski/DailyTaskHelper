import { PropsWithChildren, useEffect, useState } from "react";
import UserContext from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserContextProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState<string>("John Doe");
  useEffect(() => {
    async () => {
      const username = await AsyncStorage.getItem("user.name");
      if (username) {
        setName(username);
      } else {
        setName("John Doe");
      }
    };
  }, [setName]);

  return (
    <UserContext.Provider value={{ name }}> {children}</UserContext.Provider>
  );
}
