'use client';

import { useEffect, useState } from 'react';
import { EpicImage, getImagesByDate } from '@/services/api';
import Card from '@/components/Card';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';

const COLLECTION = 'natural';

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

export default function Home() {
  const [images, setImages] = useState<EpicImage[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(todayStr());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDate) return;

    async function fetchImages() {
      try {
        setLoading(true);
        setError(null);

        const data = await getImagesByDate(selectedDate, COLLECTION);
        setImages(data);
      } catch {
        setError(`No se pudieron cargar las imágenes del ${selectedDate}.`);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [selectedDate]);

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-[#e2f5e4]">

      <header className="px-6 py-6 bg-gradient-to-r from-[#052e16] via-[#14532d] to-[#166534] border-b border-green-900/50 shadow-lg shadow-green-950/50">
        <div className="max-w-7xl mx-auto flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">NASA EPIC</h1>
          </div>
          <p className="text-green-300/70 text-sm">
            Earth Polychromatic Imaging Camera — Imágenes diarias de la Tierra desde el punto de Lagrange L1
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-4 items-end">

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-green-500/70 uppercase tracking-widest font-semibold">Fecha</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            max={todayStr()}
            className="bg-[#0d1f0e] border border-green-900/60 text-green-100 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-600 transition-all cursor-pointer [color-scheme:dark]"
          />
        </div>

        {!loading && !error && (
          <p className="text-green-500/50 text-sm pb-2 font-mono">
            <span className="text-green-400 font-semibold">{images.length}</span> imágenes encontradas
          </p>
        )}
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-16">

        {loading && <Loader />}

        {!loading && error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {images.map((image) => (
              <Card key={image.identifier} image={image} />
            ))}
          </div>
        )}
      </main>

    </div>
  );
}

