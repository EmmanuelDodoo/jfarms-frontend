"use client";

import { createContext } from "react";
import { dummyUser, defaultUser } from "r/util/dummies";
import { User } from "r/util/types";

export const UserContext = createContext<User | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContext.Provider value={dummyUser}>{children}</UserContext.Provider>
  );
}
