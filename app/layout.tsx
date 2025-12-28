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
        <script data-goatcounter="https://detraced-sinkhole.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
