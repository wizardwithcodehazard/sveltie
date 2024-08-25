import {sql} from "@vercel/postgres";
export async function load({ params ,locals }){
    return {
        content :await sql`
        SELECT * FROM NAMES WHERE user_id = ${locals.user}`
    }
}