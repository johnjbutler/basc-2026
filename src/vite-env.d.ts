/// <reference types="vite/client" />

// Global declarations for the application
declare global {
  interface Window {
    aiSdk?: Record<string, any>;
  }
}

export {};
