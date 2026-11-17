import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Naga Lakshmi | Software Developer",
  description:
    "Portfolio of Sai Naga Lakshmi — Software Developer focused on Python, backend development, APIs and AI.",
  metadataBase: new URL("https://example.vercel.app"),
  openGraph: {
    title: "Sai Naga Lakshmi | Software Developer",
    description: "Python • Backend Development • AI",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
