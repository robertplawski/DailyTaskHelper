import { createContext } from "react";

export interface UserInterface {
  name: string;
}

export const UserContext = createContext<UserInterface>({
  name: "John Doe",
});

export default UserContext;
