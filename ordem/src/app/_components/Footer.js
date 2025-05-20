export default function Footer() {
  return (
    <footer className="w-full px-6 py-6 text-center text-sm text-gray-500 border-t mt-10">
      © {new Date().getFullYear()} Ordem de Livros. Todos os direitos reservados.
    </footer>
  );
}
