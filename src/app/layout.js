import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata = {
  title: {
    default: "Transformer Coach Indonesia",
    template: "%s | Transformer Coach Indonesia",
  },
  description:
    "Platform personal branding dan layanan coaching profesional. Achieve Financial Freedom with Indonesia's top transformation coaches.",
  metadataBase: new URL("https://transformercoachindonesia.com"),
  openGraph: {
    title: "Transformer Coach Indonesia",
    description:
      "Platform personal branding dan layanan coaching profesional. Achieve Financial Freedom with Indonesia's top transformation coaches.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
