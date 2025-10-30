// components/Providers.jsx
"use client"; // This makes it a Client Component

import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}