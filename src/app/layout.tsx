import "./globals.css";

export const metadata = {
  title: "Mike Garavani",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex min-h-screen font-raleway">{children}</body>
    </html>
  );
}
