import type { Metadata } from "next";
import { Inter, JetBrains_Mono as JetBrains } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./components/react-query-client-provider";

const inter = Inter({ subsets: ["latin"] });

const jetBrains = JetBrains({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={`${inter.className} bg-card-bg dark`}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}