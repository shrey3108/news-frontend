import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'https://news-backend-136p.onrender.com';
const BACKEND_URL = SOCKET_URL;

const socket = io(BACKEND_URL, {
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
  timeout: 10000,
  transports: ['websocket', 'polling']
});

// Detailed Connection Logging
const logSocketEvents = () => {
  socket.on('connect', () => {
    console.group('🔌 Socket Connection');
    console.log('✅ Connected successfully');
    console.log('🌐 Connected to:', BACKEND_URL);
    console.log('🆔 Socket ID:', socket.id);
    console.groupEnd();
  });

  socket.on('connect_error', (error) => {
    console.group('❌ Socket Connection Error');
    console.error('🚨 Error Details:', error.message);
    console.error('🔗 Backend URL:', BACKEND_URL);
    console.error('📡 Error Type:', error.type);
    console.groupEnd();
  });

  socket.on('disconnect', (reason) => {
    console.group('🔌 Socket Disconnected');
    console.log('❗ Reason:', reason);
    console.log('🕒 Timestamp:', new Date().toISOString());
    console.groupEnd();
  });
};

// Initialize logging
logSocketEvents();

// Expose additional methods for debugging
window.socketDebug = {
  getSocket: () => socket,
  reconnect: () => socket.connect(),
  disconnect: () => socket.disconnect()
};

export default socket;
