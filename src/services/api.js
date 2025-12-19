import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const registerUser = async (userData) => {
  const { data, error } = await supabase.functions.invoke("register", {
    body: {
      full_name: userData.fullName,
      email: userData.email,
      company: userData.company,
      job_title: userData.jobTitle,
    },
  });

  if (error) {
    throw new Error(error.message || "Registration failed");
  }

  return data;
};
