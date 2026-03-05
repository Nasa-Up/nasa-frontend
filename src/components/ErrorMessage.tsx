interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">

      <div className="flex flex-col items-center gap-1.5">
        <h2 className="text-lg font-semibold text-red-400">Algo salió mal</h2>
        <p className="text-green-100/40 text-sm max-w-sm text-center leading-relaxed">{message}</p>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 px-5 py-2 text-xs font-semibold bg-green-900/30 hover:bg-green-800/40 text-green-400 border border-green-800/50 rounded-lg transition-all duration-200 tracking-wide uppercase"
      >
        Recargar página
      </button>
    </div>
  );
}
