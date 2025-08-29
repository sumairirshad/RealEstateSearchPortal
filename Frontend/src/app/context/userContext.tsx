"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useRouter } from "next/navigation";

type JwtPayload = {
  sub: string;
  email: string;
  exp: number;
  [key: string]: any;
};

type UserContextType = {
  userId: string | null;
  email: string | null;
  setUser: (userId: string | null, email: string | null) => void;
};

const UserContext = createContext<UserContextType>({
  userId: null,
  email: null,
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.sub) {
        router.push("/");
        return;
      }

      setUserId(decoded.sub);
      setEmail(decoded.email);
    } catch (err) {
      console.error("Invalid token:", err);
      router.push("/");
    }
  }, []);

  const setUser = (id: string | null, mail: string | null) => {
    setUserId(id);
    setEmail(mail);
  };

  return (
    <UserContext.Provider value={{ userId, email, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
