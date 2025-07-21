export const connectWebSocket = (slug: string): WebSocket => {
  const protocol = typeof window !== 'undefined' && window.location.protocol === 'https:' ? 'wss' : 'ws';
  const host = typeof window !== 'undefined' ? window.location.host : 'localhost:8000';
  const wsUrl = `${protocol}://${host}/ws/chat/${slug}/`;

  return new WebSocket(wsUrl);
};
