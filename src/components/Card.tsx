import { EpicImage } from '@/services/api';
import Image from 'next/image';

interface CardProps {
  image: EpicImage;
}

export default function Card({ image }: CardProps) {
  const formattedDate = new Date(image.date).toLocaleString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="group bg-[#0d1f0e] rounded-2xl overflow-hidden border border-green-900/40 hover:border-green-500/50 hover:shadow-[0_0_24px_rgba(34,197,94,0.1)] transition-all duration-300">
      <div className="relative w-full aspect-square bg-black overflow-hidden">
        <Image
          src={image.imageUrl}
          alt={image.caption}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <p className="text-[10px] text-green-400/80 font-mono tracking-wide">{formattedDate}</p>

        <p className="text-sm text-green-100/60 line-clamp-3 leading-relaxed">
          {image.caption}
        </p>

        <div className="flex gap-4 pt-2 border-t border-green-900/30">
          <span className="text-[10px] text-green-600 font-mono">
            LAT <span className="text-green-300 font-semibold">{image.centroid_coordinates.lat.toFixed(2)}°</span>
          </span>
          <span className="text-[10px] text-green-600 font-mono">
            LON <span className="text-green-300 font-semibold">{image.centroid_coordinates.lon.toFixed(2)}°</span>
          </span>
        </div>
      </div>
    </div>
  );
}
