# CWG redirects

Run `npm start` with Node.js 18 or newer. The project has no dependencies.
The local server uses the Host header to select the redirect. Try this in a second terminal:

```sh
curl -I -H "Host: cwg2-leaderboard.rskiland.workers.dev" "http://127.0.0.1:3000/round/2?q=abc"
```

The response is HTTP 302 with a Location of `https://cwg.echowrought.com/leaderboard/round/2?q=abc`.
For Cloudflare, use `worker.js` as the module entry point on each of the three existing Workers.
