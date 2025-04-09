import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sapzdeufcjsngbdcwrbl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcHpkZXVmY2pzbmdiZGN3cmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwODExMTgsImV4cCI6MjA1ODY1NzExOH0.-iDW4KIOZN3ViclssJpmwApgHTu4ujelaS8kIIHoh0M';

export const supabase = createClient(
    supabaseUrl,
    supabaseKey,
    {
        auth: {
            persistSession: true,
            storage: localStorage
        }
    }
)
