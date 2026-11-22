import { createServer } from "node:http";
import { redirect } from "./worker.js";

const port = Number(process.env.PORT || 3000);
createServer(async (request, response) => {
  try {
    const origin = new URL("http://" + request.headers.host);
    const url = new URL(origin.origin + request.url);
    const result = redirect(url);
    response.writeHead(result.status, Object.fromEntries(result.headers));
    response.end(await result.text());
  } catch {
    response.writeHead(400);
    response.end("Invalid request");
  }
}).listen(port, "127.0.0.1", () => console.log("Listening on http://127.0.0.1:" + port));

