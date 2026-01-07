import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thecozycornerbydigal.vercel.app"),
  title: {
    default: "The Cozy Corner",
    template: "%s | The Cozy Corner",
  },
  description: "The Cozy Corner is an online bookstore with great book recommendations.",
  openGraph: {
    title: "The Cozy Corner",
    description: "The Cozy Corner is an online bookstore with great book recommendations.",
    url: "https://thecozycornerbydigal.vercel.app",
    siteName: "The Cozy Corner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/book1.png",
        alt: "The Cozy Corner",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "The Cozy Corner",
    description: "The Cozy Corner is an online bookstore with great book recommendations.",
    images: ["/images/book1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50`}
      >
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-semibold">
              The Cozy Corner
            </Link>
            <nav className="space-x-4 text-sm">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/books">Books</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-6">{children}</main>

        <footer className="text-center text-sm text-zinc-500 py-6">
          © 2026 The Cozy Corner
        </footer>
      </body>
    </html>
  );
}
