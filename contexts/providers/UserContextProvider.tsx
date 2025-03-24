import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import UserContext from "../UserContext";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useRouter, Redirect, useRootNavigationState, Slot } from "expo-router";

export default function UserContextProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [name, setNameState] = useState<string | null>(null);
  const { getItem: getNameStorage, setItem: setNameStorage } =
    useAsyncStorage("user.name");

  // Initialize the name from storage when component mounts
  useEffect(() => {
    const loadName = async () => {
      const storedName = await getNameStorage();
      setNameState(storedName);
      setLoading(false);

      if (!storedName) {
        router.replace("/introduction");
      }
    };

    loadName();
  }, []);

  // Update both state and storage when name changes
  const setName = useCallback(
    async (newName: string) => {
      await setNameStorage(newName);
      setNameState(newName);
    },
    [setNameStorage]
  );

  // Get the current name (from state)
  const getName = useCallback(() => {
    return name;
  }, [name]);

  if (loading) {
    return <Slot />;
  }

  return (
    <UserContext.Provider value={{ name, getName, setName }}>
      {children}
    </UserContext.Provider>
  );
}
