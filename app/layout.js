import Script from "next/script";
import "./globals.css";
// import Head from 'next/document';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
