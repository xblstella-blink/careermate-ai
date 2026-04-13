"use client";

import auth from "@/app/apis/auth";
import { useEffect, useEffectEvent, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const response = await auth.get("/auth/user");
    setUser(response.data.data);
  };

  const handleGetUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
      await fetchUser();
    } catch (error) {
      setError(error);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  const handleGetUserEventEffect = useEffectEvent(handleGetUser);
  useEffect(() => {
    handleGetUserEventEffect();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await auth.post("/auth/login", { email, password });
      const { token } = response.data.data;
      localStorage.setItem("token", token);
      await fetchUser();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, loading, error, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
