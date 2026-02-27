import { neon } from "@netlify/neon";

export default async (req, context) => {
  try {
    const sql = neon();

    const result = await sql`SELECT NOW() as server_time`;

    return new Response(
      JSON.stringify({
        ok: true,
        database: "connected",
        time: result[0].server_time,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
