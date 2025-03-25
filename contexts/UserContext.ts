import { createContext } from "react";

export interface UserInterface {
  name: string | null;
  getName: () => string | null;
  setName: (value: string) => void;
}

export const UserContext = createContext<UserInterface>({
  name: "",
  getName: (): string | null => "",
  setName: (value: string): void => {},
});

export default UserContext;
