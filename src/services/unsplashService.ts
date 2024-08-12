import { Photo } from '../types/types';

const getRandomPhotos = async (count: number): Promise<Photo[]> => {
  const photos: Photo[] = [];

  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * 1000);
    photos.push({
      id: id.toString(),
      url: `https://picsum.photos/id/${id}/300/200`,
    });
  }

  return photos;
};

export { getRandomPhotos };