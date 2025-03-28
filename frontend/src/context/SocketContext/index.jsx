import React, { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const SocketDataContext = createContext();

const SocketContext = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_BASE_URL); // Corrected the URL
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to socket server');
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });

    newSocket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    newSocket.on('new-ride', (data) => {
      console.log('New ride event received:', data);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (eventName, message) => {
    if (socket) {
        console.log("sending message  : ",message , " event name : ", eventName)
      socket.emit(eventName, message);
    }
  };

  const receiveMessage = (eventName, callback) => {
    if (socket) {
      socket.on(eventName, callback);
    }
  };

  return (
    <SocketDataContext.Provider value={{ sendMessage, receiveMessage , socket}}>
      {children}
    </SocketDataContext.Provider>
  );
};

export default SocketContext;
