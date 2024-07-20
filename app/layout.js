import AuthProvider from "./_components/AuthProvider";
import Nav from "./_components/Nav";
import "./globals.css";

export const metadata = {
  title: "AuthJS Walk-Thorugh",
  description: "https://www.youtube.com/watch?v=MNm1XhDjX1s",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-gray-100">
          <Nav />
          <div className="m-2">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
