

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider as ProviderUI } from "@/components/ui/provider"
import NodeProvider from '../store/nodeProvider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ML Flow by Aziz",
  description: "Machine Learning Playground App",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NodeProvider>
        <ProviderUI>
          {children}
        </ProviderUI>
      </NodeProvider>
      </body>
    </html>
  );
}
