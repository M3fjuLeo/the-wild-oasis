import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ojlqnvbwfwzfnolkeurn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbHFudmJ3Znd6Zm5vbGtldXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMjkxOTYsImV4cCI6MjAyMTYwNTE5Nn0.cCZ1fkgpzwE97E3yTWzZwDrFuQQ3DP2VU_Z9hanMxHo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
