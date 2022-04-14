import { createContext, useContext, useEffect, useState } from "react";
import { APILogin } from "../types";

interface UserContext {
  user: APILogin | null;
  setUser: (user: APILogin | null) => void;
}

const UserContext = createContext<UserContext | null>(null);

// @ts-expect-error Binding element 'children' implicitly has an 'any' type.ts(7031)
export function UserProvider({ children }) {
  const [user, setUser] = useState<APILogin | null>(null);

  useEffect(() => {
    setUser(JSON.parse((localStorage.getItem("user") as string) ?? "{}"));
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user ?? {}));
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: (user: APILogin | null) => {
          setUser(user);
        }
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error("useUser must be used inside a `UserProvider`");

  return context;
}
