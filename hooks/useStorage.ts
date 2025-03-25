import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";

export const useStorage = (key: string, required: boolean = true) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [value, setValueState] = useState<string | null>(null);
  const { getItem: getValueStorage, setItem: setValueStorage } =
    useAsyncStorage(key);

  // Initialize the name from storage when component mounts
  useEffect(() => {
    const loadValue = async () => {
      const storedValue = await getValueStorage();
      if (!storedValue && required) {
        router.replace("/introduction");
      }
      setValueState(storedValue);
      setLoading(false);
    };

    loadValue();
  }, []);

  // Update both state and storage when name changes
  const setValue = useCallback(
    async (newValue: string) => {
      await setValueStorage(newValue);
      setValueState(newValue);
    },
    [setValueStorage]
  );

  // Get the current name (from state)
  const getValue = useCallback(() => {
    return value;
  }, [value]);

  return { getValue, setValue, loading, value };
};

export default useStorage;
