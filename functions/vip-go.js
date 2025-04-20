// functions/vip-go.js
exports.handler = async (event) => {
  // IG prefetch → HEAD → pošleme 405, ať dá pokoj
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { Allow: 'GET' },
      body: ''
    };
  }

  // Reálný klik uživatele → 302 ven z IG
  return {
    statusCode: 302,
    headers: {
      Location: 'https://onlyfans.com/barbarella_xoxo', // uprav si URL
      // žádný cache, ať se to nikdy nelepí
      'Cache-Control': 'no-store',
      // mini CSP, IG to má rádo
      'Content-Security-Policy': "default-src 'none';"
    },
    body: ''
  };
};
