import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://etvdfcempwjegcfrqlho.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0dmRmY2VtcHdqZWdjZnJxbGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMzQzMjEsImV4cCI6MjAxMDYxMDMyMX0.f-zzcv9M3uYnlS8TtbmPJ-af9Ll-F4P3TVpcqA9iej4";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;