import "./globals.css";


export const metadata = {
  title: "Recipt book",
  description: "My recipe",
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
