export async function GET(request: Request) {
  return new Response(JSON.stringify({ test: "test" }), {
    headers: { "Content-Type": "application/json" },
  });
}
