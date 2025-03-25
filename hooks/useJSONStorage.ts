import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";

export const useJSONStorage = (key: string, defaultValue: any | null) => {
  const [loading, setLoading] = useState(true);
  const [value, setValueState] = useState<any | null>(null);
  const { getItem: getValueStorage, setItem: setValueStorage } =
    useAsyncStorage(key);

  // Initialize the name from storage when component mounts
  useEffect(() => {
    const loadValue = async () => {
      const storedValue = await getValueStorage();
      if (!storedValue) {
        setValue(defaultValue);
        setLoading(false);
        return;
      }
      try {
        setValueState(JSON.parse(storedValue));
        setLoading(false);
      } catch (e) {
        setValue(defaultValue);
        setLoading(false);
        return;
      }
    };

    loadValue();
  }, []);

  // Update both state and storage when name changes
  const setValue = useCallback(
    async (newValue: any) => {
      await setValueStorage(JSON.stringify(newValue));
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

export default useJSONStorage;
