"use client";

import auth from "@/app/apis/auth";
import { useEffect, useEffectEvent, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const response = await auth.get("/users/me");
    setUser(response.data.data);
  };

  const handleGetUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);

        return;
      }
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
      const { accessToken, user } = response.data.data;
      localStorage.setItem("token", accessToken);
      setUser(user);
    } catch (error) {
      setError(error);
      throw error;
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
      value={{ user, loading, error, login, logout, mutate: handleGetUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
