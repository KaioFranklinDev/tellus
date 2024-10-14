import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400','500', '700'], // Escolha o peso da fonte
  subsets: ['latin'],     // Escolha o subset
});


export const metadata: Metadata = {
  title: "Tellus",
  description: "Empresa de placas Solar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
