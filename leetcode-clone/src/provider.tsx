// provider.tsx
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "./components/footer";

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <SessionProvider><Header /> {children} <Footer /> </SessionProvider>;
};

export default Provider;
