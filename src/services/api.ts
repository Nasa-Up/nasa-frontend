const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface EpicImage {
  identifier: string;
  caption: string;
  image: string;
  date: string;
  centroid_coordinates: {
    lat: number;
    lon: number;
  };
  imageUrl: string; 
}

export async function getAvailableDates(collection: string = 'natural'): Promise<{ date: string }[]> {
  const response = await fetch(`${BASE_URL}/nasa/epic/dates?collection=${collection}`);

  if (!response.ok) {
    throw new Error('Error al obtener las fechas disponibles');
  }

  return response.json();
}

export async function getImagesByDate(date: string, collection: string = 'natural'): Promise<EpicImage[]> {
  const response = await fetch(`${BASE_URL}/nasa/epic/date/${date}?collection=${collection}`);

  if (!response.ok) {
    throw new Error(`Error al obtener imágenes de la fecha ${date}`);
  }

  return response.json();
}
