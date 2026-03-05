export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-5">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-green-900/40" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-400 animate-spin shadow-[0_0_16px_rgba(74,222,128,0.4)]" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-green-300/80 text-sm font-medium">Cargando imágenes de la NASA...</p>
      </div>
    </div>
  );
}
