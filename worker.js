const routes = new Map([
  ["cwg2-homepage.rskiland.workers.dev", ""],
  ["cwg2-leaderboard.rskiland.workers.dev", "/leaderboard"],
  ["cwg2-leaderboard-admin.rskiland.workers.dev", "/admin_panel"]
]);

export function redirect(url) {
  const prefix = routes.get(url.hostname);
  if (prefix === undefined) return new Response("Unknown hostname", { status: 404 });
  const target = new URL("https://cwg.echowrought.com/");
  target.pathname = prefix + (url.pathname === "/" ? "" : url.pathname);
  target.search = url.search;
  return Response.redirect(target.href, 302);
}

export default {
  fetch(request) {
    return redirect(new URL(request.url));
  }
};
