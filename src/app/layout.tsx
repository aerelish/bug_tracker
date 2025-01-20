import '@/app/globals.css';
import { font_montserrat } from '@/app/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font_montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
