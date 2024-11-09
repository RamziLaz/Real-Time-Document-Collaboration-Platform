import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
export function useSupabaseAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => authListener?.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) console.error("Login error:", error);
  };

  const logout = async () => await supabase.auth.signOut();

  return { user, login, logout };
}
