exports.handler = async () => ({
  statusCode: 302,
  headers: {
    Location: "https://onlyfans.com/barbarella_xoxo", // sem dej správnou OF URL
    "Cache-Control": "no-cache"
  },
  body: ""
});
