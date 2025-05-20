import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: "Ordem de Livros",
  description: "Ordem de Livros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
       <main className="flex-1">{children}</main> 
       <Footer/>
      </body>
    </html>
  );
}
