
export const metadata = {
  title: "Astrocataclysm",
  description: "TCG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
