import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Sinkhole",
  robots: "noindex, nofollow"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://detraced-sinkhole.goatcounter.com/count.js"
          data-goatcounter="https://detraced-sinkhole.goatcounter.com/count"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
