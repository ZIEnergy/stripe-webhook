const handler = (request: Request): Response => {
    console.log("Received request", request.url);
    return new Response("Hello from Deno Deploy!", {
      status: 200,
      headers: {
        "content-type": "text/plain",
      },
    });
  };
  
  addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(handler(event.request));
  });