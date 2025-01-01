
import type { Metadata } from "next";
import "./globals.css";
import RecoilProvider from "./config/RecoilProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <RecoilProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </RecoilProvider>
  );
}; 
