export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      <h1 className="text-5xl max-sm:text-3xl text-nowrap">
        Essa não é a página que procurava...
      </h1>
      <a
        href="/"
        className="underline decoration-zinc-500 underline-offset-4 dark:decoration-zinc-600"
      >
        Para página inicial, voltar você deve 🛸
      </a>
    </div>
  );
}
