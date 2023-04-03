//Import client 
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cmxhrzsqtokwzbxpdpvi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNteGhyenNxdG9rd3pieHBkcHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwNzI5MTEsImV4cCI6MTk5MzY0ODkxMX0.Psl30r8Ubvc_BeiL9slYDSyD_jZnVEuh6L9LHMAn8jA';

export const supabase = createClient(supabaseUrl, supabaseKey)