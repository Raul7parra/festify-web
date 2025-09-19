export type Artist = { id: number; name: string; genre?: string };

export const ARTISTS: Artist[] = [
  { id: 1, name: 'Aurora Waves', genre: 'Indie' },
  { id: 2, name: 'Neon Drums', genre: 'Electrónica' },
  { id: 3, name: 'Ritmo Gitano', genre: 'Fusión' }
];

export function getArtists(search = ''): Artist[] {
  const q = search.toLowerCase().trim();
  if (!q) return ARTISTS;
  return ARTISTS.filter(a =>
    [a.name, a.genre ?? ''].some(v => v.toLowerCase().includes(q))
  );
}

export function getArtistById(id: number): Artist | null {
  return ARTISTS.find(a => a.id === id) ?? null;
}