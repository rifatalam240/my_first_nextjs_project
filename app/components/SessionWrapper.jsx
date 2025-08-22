// app/components/SessionWrapper.jsx
"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";

export default function SessionWrapper({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}
