// functions/vip-go.js
exports.handler = async (event) => {
  // 💡 MUSÍ tu být parametr `event` – bez něj httpMethod nikdy nezjistíš
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { Allow: 'GET' },
      body: ''
    };
  }

  return {
    statusCode: 302,
    headers: {
      Location: 'https://onlyfans.com/barbarella_xoxo',
      'Cache-Control': 'no-store',
      'Content-Security-Policy': "default-src 'none';"
    },
    body: ''
  };
};
