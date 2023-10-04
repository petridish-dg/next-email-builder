import { createClient } from '@supabase/supabase-js';

export async function getData() {
    const supabase = createClient(
        'https://pqyftumjmcjegbqgrzbo.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxeWZ0dW1qbWNqZWdicWdyemJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNDU0ODAsImV4cCI6MjAxMDcyMTQ4MH0.yV204tpfoW9W4PX1snIBR8_zU1z4KYBBt72bPl2dpo4'
    )
    const { data, error } = await supabase.from("akXml").select("*");

    if (error) {
        console.log(error);
        return;
    }

    return data;

}

