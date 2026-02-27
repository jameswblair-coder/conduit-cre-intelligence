const { neon } = require("@netlify/neon");

exports.handler = async () => {
  try {
    // automatically uses NETLIFY_DATABASE_URL from Neon extension
    const sql = neon();

    const rows = await sql`SELECT NOW() AS server_time`;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ok: true,
        database: "connected",
        time: rows[0].server_time
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ok: false,
        error: err.message
      })
    };
  }
};
