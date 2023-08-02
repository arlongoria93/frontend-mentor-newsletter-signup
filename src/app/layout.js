import "./globals.css";

export const metadata = {
  title: "Newsletter Signup",
  description: "Created with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
