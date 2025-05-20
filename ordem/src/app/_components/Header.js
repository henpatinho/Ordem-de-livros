export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">Ordem de Livros</h1>
      <nav className="space-x-4">
        <a href="#teste" className="text-gray-700 hover:underline">Teste</a>
        <a href="#ebook" className="text-gray-700 hover:underline">E-book</a>
        <a href="#sobre" className="text-gray-700 hover:underline">Sobre</a>
      </nav>
    </header>
  );
}
