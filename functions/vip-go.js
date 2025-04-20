exports.handler = async () => ({
  statusCode: 302,
  headers: {
    Location: "https://onlyfans.com/barbarella_xoxo",   // ← pokud máš jinou URL, změň tady
    "Cache-Control": "no-cache"
  },
  body: ""
});
