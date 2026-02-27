export default async () => {
  return new Response(
    JSON.stringify({ ok: true, message: "market-metrics live" }),
    { headers: { "Content-Type": "application/json" } }
  );
};
