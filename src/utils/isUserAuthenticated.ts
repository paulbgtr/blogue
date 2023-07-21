import { supabase } from "./supabase";

export const isUserAuthenticated = async () => {
  const { data: session, error } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }
  const user = session?.session?.user;

  return user?.role === "authenticated";
};
